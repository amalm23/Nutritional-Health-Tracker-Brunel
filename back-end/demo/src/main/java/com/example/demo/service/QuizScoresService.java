package com.example.demo.service;

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


import com.example.demo.repository.QuizScoresRepositry;
import com.example.demo.dto.QuizScoresDTO;
import com.example.demo.dto.UpdatedNutrionalFormDTO;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.NutrionalUserInput;
import com.example.demo.model.QuizScores;
import com.example.demo.model.User;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class QuizScoresService {
	@Autowired
	QuizScoresRepositry qsRepository;
	
	public QuizScoresService(){
		super();
	}
	public List<QuizScores> findByEmail(String queryemail) {
		return qsRepository.findByEmail(queryemail);
	}
	
	public void addQuizScores(QuizScores newQuizScores) {
		// TODO Auto-generated method stub
		qsRepository.save(newQuizScores);

	}
	
	public void updateResponse(Long id, QuizScoresDTO newDTO) {
		QuizScores existingScores = qsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form", "id", id));
		existingScores.setScore(newDTO.getScore());
		qsRepository.save(existingScores);
	}
	}