package com.example.demo.repository;

import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.ThoughtDiary;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ThoughtDiaryRespository extends CrudRepository<ThoughtDiary, Long> {
	List<ThoughtDiary> findByEmail(String email);
}