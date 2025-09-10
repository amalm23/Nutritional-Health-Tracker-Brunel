package com.example.demo.repository;

import com.example.demo.model.Queries;
import org.springframework.data.repository.CrudRepository;


public interface ContactusRepository extends CrudRepository<Queries,String>{
	Queries findByEmail(String queryemail);
	
}