package com.example.demo.controller;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletResponse;

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

import com.example.demo.dto.NutrionalHealthFormPostDTO;
import com.example.demo.dto.ThoughtDiaryDTO;
import com.example.demo.dto.UpdatedNutrionalFormDTO;
import com.example.demo.dto.UpdatedThoughtDiaryDTO;
import com.example.demo.dto.UserPostDTO;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.NutrionalUserInput;
import com.example.demo.model.ThoughtDiary;
import com.example.demo.model.ThoughtDiaryInput;
import com.example.demo.model.User;
import com.example.demo.repository.NutrionalFormRepository;
import com.example.demo.repository.NutrionalUserInputRepository;
//import com.example.demo.repository.NutrionalUserInputRepository;
import com.example.demo.repository.ThoughtDiaryRespository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.NutrionalFormService;
import com.example.demo.service.NutrionalUserInputService;
import com.example.demo.service.ThoughtDiaryInputService;
//import com.example.demo.service.NutrionalUserInputService;
import com.example.demo.service.ThoughtDiaryService;
import com.example.demo.service.UserService;

@RestController

public class ThoughtDiaryController {

	@Autowired
	NutrionalFormService nService;

	@Autowired
	ThoughtDiaryService thoughtService;

	@Autowired
	NutrionalFormRepository nRepository;

	@Autowired
	UserRepository user;

	@Autowired
	UserService userS;

	@Autowired
	ThoughtDiaryInputService n2Service;

	@PostMapping("/addThought")
	public ResponseEntity<Optional<ThoughtDiary>> addResponse(@RequestBody ThoughtDiaryDTO thoughtDTO) {

		if (thoughtDTO.getEmail() == null || thoughtDTO.getEmail() == "" || thoughtDTO.getThought() == null
				|| thoughtDTO.getThought() == "") {
			return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
		}
		ThoughtDiary newThoughts = new ThoughtDiary(thoughtDTO.getEmail(), thoughtDTO.getThought());
		thoughtService.addThoughts(newThoughts);
		String email = thoughtDTO.getEmail();
		System.out.println(email);
		User emailCompare = user.findByEmail(email);
		System.out.println(emailCompare);
		ThoughtDiaryInput input = new ThoughtDiaryInput();
		input.setUser(emailCompare);
		input.setThoughtDiaryResponse(newThoughts);
		thoughtService.addThoughtEntity(input);
		return new ResponseEntity<>(Optional.ofNullable(newThoughts), HttpStatus.CREATED);
	}

	@PutMapping("/thoughtdiary/editData")
	public String updateFormResponse(HttpServletResponse response, @RequestParam String id2,
			@RequestBody UpdatedThoughtDiaryDTO newDTO) {
		long id = Long.parseLong(id2);

		String thoughtRegex = "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[0-9])/";

		Pattern thoughtPattern = Pattern.compile(thoughtRegex);

		String thoughtCheck = newDTO.getThought();

		Matcher thoughtMatcher = thoughtPattern.matcher(thoughtCheck);

		if (thoughtMatcher.matches() == true) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return "False";
		} else {
			response.setStatus(HttpServletResponse.SC_CREATED);
			thoughtService.updateResponse(id, newDTO);
			return "Saved";
		}
	}

	@DeleteMapping("/thoughtdiary/id2")
	public String deleteFormResponse(@RequestParam String id2) {
		long id = Long.parseLong(id2);
		n2Service.deleteResponse();
		thoughtService.deleteResponse(id);
		return "Response Deleted";
	}

	@GetMapping("/thoughtdiary/findByEmail")
	public Optional<List<ThoughtDiary>> getInputByEmail(@RequestParam String email) {
		return Optional.ofNullable(thoughtService.findByEmail(email));
	}

}