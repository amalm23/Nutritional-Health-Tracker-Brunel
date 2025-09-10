package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.GettingUserRepository;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.dto.UpdatedUserPostDTO;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class GettingUserService {
	@Autowired
	GettingUserRepository userRepository;

	public GettingUserService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	public void addUser(User newUser) {
		userRepository.save(newUser);
	}

	public Optional<User> findByID(Long id) {
		return userRepository.findById(id);
	}

	public List<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public void deleteUser(Long id) {
		User response = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
				userRepository.delete(response);
	}

	public void updateUser(Long id, UpdatedUserPostDTO newDTO) {
		User existingUser = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", id));	
		
		existingUser.setFirstName(newDTO.getFirstName());
		existingUser.setLastName(newDTO.getLastName());
		existingUser.setBirthday(newDTO.getBirthday());
		existingUser.setEmail(newDTO.getEmail());
		existingUser.setUsername(newDTO.getUsername());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		existingUser.setPassword(encoder.encode(newDTO.getPassword()));
		userRepository.save(existingUser);
	}
}
