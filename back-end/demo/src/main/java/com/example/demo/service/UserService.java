package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public UserService() {
		super();
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

	public void deleteUser(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
		userRepository.delete(user);
	}

	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

}