package com.example.backend.repository;

import com.example.backend.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SpecializationRepository extends JpaRepository<Specialization, Long> {
}
