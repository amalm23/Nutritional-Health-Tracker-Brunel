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

import com.example.demo.repository.NutrionalFormRepository;
import com.example.demo.repository.ThoughtDiaryRespository;
import com.example.demo.repository.ThoughtDiaryInputRepository;
import com.example.demo.dto.UpdatedNutrionalFormDTO;
import com.example.demo.dto.UpdatedThoughtDiaryDTO;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.ThoughtDiary;
import com.example.demo.model.ThoughtDiaryInput;
import com.example.demo.model.User;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class ThoughtDiaryService {
	@Autowired
	ThoughtDiaryRespository nRepository;

	@Autowired
	ThoughtDiaryInputRepository nThoughtRepository;

	public ThoughtDiaryService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void addThoughts(ThoughtDiary newThought) {
		nRepository.save(newThought);
	}


	public void addThoughtEntity(ThoughtDiaryInput newThoughtLink) {
		nThoughtRepository.save(newThoughtLink);
	}

	public List<ThoughtDiary> findByEmail(String email) {
		return nRepository.findByEmail(email);
	}

	public void deleteResponse(Long id) {
		ThoughtDiary response = nRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Dairy Response", "id", id));
		nRepository.delete(response);
	}

	public void updateResponse(Long id, UpdatedThoughtDiaryDTO newDTO) {
		ThoughtDiary existingForm = nRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form", "id", id));
		existingForm.setEmail(newDTO.getEmail());
		existingForm.setThought(newDTO.getThought());
		nRepository.save(existingForm);
	}
}