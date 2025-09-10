package com.example.demo.repository;

import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.ThoughtDiaryInput;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ThoughtDiaryInputRepository extends CrudRepository<ThoughtDiaryInput, Long> {
}