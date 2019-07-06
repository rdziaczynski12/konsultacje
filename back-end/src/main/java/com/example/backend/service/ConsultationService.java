package com.example.backend.service;

import com.example.backend.message.request.NewPost;
import com.example.backend.message.request.Post;
import com.example.backend.model.*;
import com.example.backend.repository.*;
import javafx.scene.effect.SepiaTone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ConsultationService {
    @Autowired
    private ConsultationRepository consultationRepository;
    @Autowired
    private SubjectRepository subjectRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SpecializationRepository specializationRepository;
    @Autowired
    private TypeSubjectRepository typeSubjectRepository;

    public Collection<Post> getAllPost(){
        Collection<Consultation> consultations = consultationRepository.findAll();
        Collection<Post> posts = new HashSet<>();

        consultations.forEach(consultation -> {
            Post post = new Post();
            post.setId(consultation.getId());
            post.setDate(consultation.getDate());
            post.setDescription(consultation.getDescription());
            post.setTitle(consultation.getTitle());
            String titlesString = new String();

            Collection<Title> titles = consultation.getUser().getTitles();
            for (Iterator<Title> iterator = titles.iterator(); iterator.hasNext();) {
                titlesString = titlesString + iterator.next().getName() + ' ';
            }
            post.setAutor(  titlesString
                            + consultation.getUser().getFirstName()
                            + ' '
                            + consultation.getUser().getLastName());
            posts.add(post);

        });
        return posts;
    }

    public Collection<Subject> getAllMySubject(String username){
        Optional<User> user = userRepository.findByUsername(username);
        return subjectRepository.findAllByUsers(user);

    }

    public Collection<Specialization> getAllSpecialization(){
        return specializationRepository.findAll();

    }

    public Collection<TypeSubject> getAllType(){
        return typeSubjectRepository.findAll();

    }

    public void addPost(NewPost newPost){
        Consultation consultation = new Consultation();
        consultation.setActive(true);
        consultation.setDefault(false);
        consultation.setDate(newPost.getDate());
        consultation.setDescription(newPost.getDescription());
        consultation.setTitle(newPost.getTitle());
        Optional<User> user = userRepository.findByUsername(newPost.getAutor());
        consultation.setUser(user.get());
        Set<Subject> tmpSubject = new HashSet<Subject>();
        for (int i=0; i< newPost.getSubject().length; i++)
            tmpSubject.add(subjectRepository.findById(newPost.getSubject()[i].longValue()).get());
        consultation.setSubjects(tmpSubject);

        consultationRepository.saveAndFlush(consultation);

    }

}
