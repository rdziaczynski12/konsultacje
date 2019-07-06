package com.example.backend.repository;

import com.example.backend.model.Subject;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    Collection<Subject> findAllByUsers(Optional<User> user);
}
