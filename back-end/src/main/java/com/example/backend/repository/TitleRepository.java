package com.example.backend.repository;

import com.example.backend.model.Title;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
//@CrossOrigin(origins = "http://localhost:4200")
public interface TitleRepository extends JpaRepository<Title, Long> {
    Optional<Title> findByName(String roleName);
}

