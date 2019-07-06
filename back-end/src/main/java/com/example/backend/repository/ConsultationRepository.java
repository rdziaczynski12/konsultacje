package com.example.backend.repository;

import com.example.backend.message.request.Post;
import com.example.backend.model.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Long> {
    @Query(
            value = "SELECT c.id , c.id_user, c.date, c.title, c.description FROM Consultation c ",
            nativeQuery = true)
    Collection<Post> getAllPost();

}
