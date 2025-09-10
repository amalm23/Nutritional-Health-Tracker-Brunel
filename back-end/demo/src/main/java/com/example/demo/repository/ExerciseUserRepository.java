package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ExerciseUser;

@Repository
public interface ExerciseUserRepository extends JpaRepository<ExerciseUser, Long> {
    List<ExerciseUser> findByEmail(String email);
}