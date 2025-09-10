package com.example.demo.service;
import com.example.demo.dto.UpdatedNutrionalFormDTO;
import com.example.demo.model.NutrionalHealthForm;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.repository.NutrionalFormRepository;
import com.example.demo.repository.NutrionalUserInputRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.NutrionalUserInput;
import com.example.demo.model.ThoughtDiary;
import com.example.demo.model.User;

@Service
public class NutrionalUserInputService {
	@Autowired
	NutrionalUserInputRepository nRepository;

	@Autowired
	UserRepository user;
	
	@Autowired
	private NutrionalFormRepository nFormRepository;


	public NutrionalUserInputService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void addFormEntity(NutrionalUserInput newForm2) {
		nRepository.save(newForm2);
	}

	public void deleteResponse() {
		nRepository.deleteAll();
		
	}

}