package com.example.demo.repository;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.NutrionalUserInput;
import com.example.demo.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface NutrionalUserInputRepository extends CrudRepository<NutrionalUserInput, Long> {
 
}