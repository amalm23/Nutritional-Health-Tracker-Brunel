package com.example.demo.repository;

import com.example.demo.model.QuizScores;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface QuizScoresRepositry extends CrudRepository<QuizScores, Long> {
	List<QuizScores> findByEmail(String email);
}