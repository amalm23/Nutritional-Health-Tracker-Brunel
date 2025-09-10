package com.example.demo.repository;

import com.example.demo.model.NutrionalHealthForm;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface NutrionalFormRepository extends CrudRepository<NutrionalHealthForm, Long> {
	List<NutrionalHealthForm> findByEmail(String email);
}