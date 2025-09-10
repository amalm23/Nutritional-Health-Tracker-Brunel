package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Queries;
import com.example.demo.repository.ContactusRepository;
import com.example.demo.repository.UserRepository;
// import com.example.demo.exception.ResourceNotFoundException;


@Service
public class QueriesService {
	@Autowired
    ContactusRepository contactRepository;//contactusR;
	
	public QueriesService() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
//	public List<Queries> getQueries() {
//		return (List<Queries>) QueriesRepository.findAll();
//	}

	
	public void addQuery(Queries newQuery) {
		contactRepository.save(newQuery);
	}
	
	public Queries findByEmail(String queryemail) {
		return contactRepository.findByEmail(queryemail);
	}

}