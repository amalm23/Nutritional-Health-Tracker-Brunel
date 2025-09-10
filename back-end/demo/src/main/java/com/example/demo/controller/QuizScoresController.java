package com.example.demo.controller;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.demo.dto.QuizScoresDTO;
import com.example.demo.dto.UserPostDTO;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.QuizScores;

import com.example.demo.model.User;
import com.example.demo.repository.QuizScoresRepositry;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.QuizScoresService;
import com.example.demo.service.UserService;

@RestController
public class QuizScoresController {
	@Autowired
	QuizScoresService qsService;
	@Autowired
	QuizScoresRepositry qsRepository;

	@Autowired
	UserRepository user;

	@Autowired
	UserService userService;
	
	@PostMapping("/QuizScores")
	public ResponseEntity<Optional<QuizScores>> addResponse(
			@RequestBody QuizScoresDTO quizScoresDTO) {

		if (quizScoresDTO.getEmail() == null) {
			return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
		}
		QuizScores newQuizScores = new QuizScores(quizScoresDTO.getEmail(), quizScoresDTO.getScore());
		qsService.addQuizScores(newQuizScores);
	    	return new ResponseEntity<>(Optional.ofNullable(newQuizScores),HttpStatus.CREATED);
	    }
	
	@GetMapping("/quizScores/findByEmail")
	public Optional<List<QuizScores>> getInputByEmail(@RequestParam String email) {
		return Optional.ofNullable(qsService.findByEmail(email));
	}
	

}
