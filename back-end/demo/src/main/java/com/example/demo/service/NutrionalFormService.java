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
import com.example.demo.dto.UpdatedNutrionalFormDTO;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.User;
import com.example.demo.exception.ResourceNotFoundException;

@Service
public class NutrionalFormService {
	@Autowired
	NutrionalFormRepository nRepository;

	public NutrionalFormService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void addFormEntity(NutrionalHealthForm newForm) {
		nRepository.save(newForm);
	}

	public List<NutrionalHealthForm> findByEmail(String queryemail) {
		return nRepository.findByEmail(queryemail);
	}

	public void deleteResponse(Long id) {
		NutrionalHealthForm response = nRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form", "id", id));
		nRepository.delete(response);
	}

	public void updateResponse(Long id, UpdatedNutrionalFormDTO newDTO) {
		NutrionalHealthForm existingForm = nRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form", "id", id));
		existingForm.setDateOfConsumption(newDTO.getDateOfConsumption());
		existingForm.setFoodName(newDTO.getFoodName());
		existingForm.setCalories(newDTO.getCalories());
		existingForm.setConsumption(newDTO.getConsumption());
		existingForm.setDrinkName(newDTO.getDrinkName());
		existingForm.setDrinkCalories(newDTO.getDrinkCalories());
		existingForm.setDrinkConsumption(newDTO.getDrinkConsumption());
		existingForm.setTimeOfDay(newDTO.getTimeOfDay());
		existingForm.setTimeOfConsumption(newDTO.getTimeOfConsumption());
		nRepository.save(existingForm);
	}
}