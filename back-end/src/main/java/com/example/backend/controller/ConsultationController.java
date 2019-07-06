package com.example.backend.controller;

import com.example.backend.message.request.NewPost;
import com.example.backend.message.request.Post;
import com.example.backend.model.Consultation;
import com.example.backend.model.Specialization;
import com.example.backend.model.Subject;
import com.example.backend.model.TypeSubject;
import com.example.backend.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping({"/api"})
public class ConsultationController {
    @Autowired
    ConsultationService consultationService;

    //@PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping("/consultations")
    public Collection<Post> getAllPost(){
        return consultationService.getAllPost();
    }

    //@PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping(value ="/my-subject/{username}")
    public Collection<Subject> getAllMySubject(@PathVariable(name="username")String username){
        return consultationService.getAllMySubject(username);
    }

    //@PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping(value ="/specialization")
    public Collection<Specialization> getAllSpecialization(){
        return consultationService.getAllSpecialization();
    }

    //@PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping(value ="/type")
    public Collection<TypeSubject> getAllType(){
        return consultationService.getAllType();
    }

    @PostMapping("/post/add")
    public int addPost(@Valid @RequestBody NewPost newPost) {
        consultationService.addPost(newPost);
        return 1;
    }
}
