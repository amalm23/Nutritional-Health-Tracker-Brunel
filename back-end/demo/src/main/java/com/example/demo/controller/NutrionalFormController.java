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
import com.example.demo.dto.UpdatedNutrionalFormDTO;
import com.example.demo.dto.UserPostDTO;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.model.NutrionalUserInput;
//import com.example.demo.model.NutrionalUserInput;
import com.example.demo.model.User;
import com.example.demo.repository.NutrionalFormRepository;
//import com.example.demo.repository.NutrionalUserInputRepository;
import com.example.demo.repository.UserRepository;
//import com.example.demo.repository.NutrionalUserInputRepository;
import com.example.demo.service.NutrionalFormService;
import com.example.demo.service.NutrionalUserInputService;
import com.example.demo.service.UserService;

@RestController
public class NutrionalFormController {

	@Autowired
	NutrionalFormService nService;

	@Autowired
	NutrionalUserInputService n2Service;

	@Autowired
	UserService userService;

	@PostMapping("/nutrionalForm")
	public ResponseEntity<Optional<NutrionalHealthForm>> addResponse(HttpServletResponse response,
			@RequestBody NutrionalHealthFormPostDTO nutrionPostDTO) {

		if (nutrionPostDTO.getDateOfConsumption() == "" || nutrionPostDTO.getDateOfConsumption() == null
				|| nutrionPostDTO.getFoodName() == "" || nutrionPostDTO.getFoodName() == null
				|| nutrionPostDTO.getCalories() == null || nutrionPostDTO.getCalories() == 0
				|| nutrionPostDTO.getConsumption() == null || nutrionPostDTO.getConsumption() == 0
				|| nutrionPostDTO.getDrinkName() == "" || nutrionPostDTO.getDrinkName() == null
				|| nutrionPostDTO.getDrinkCalories() == null || nutrionPostDTO.getDrinkCalories() == 0
				|| nutrionPostDTO.getDrinkConsumption() == null || nutrionPostDTO.getDrinkConsumption() == 0
				|| nutrionPostDTO.getTimeOfConsumption() == "" || nutrionPostDTO.getTimeOfConsumption() == null) {
			return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
		} else {
			String regexfoodName = "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*{2,30}";

			String regexdrinkName = "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*{2,30}";

			Pattern patternfoodName = Pattern.compile(regexfoodName);

			Pattern patterndrinkName = Pattern.compile(regexdrinkName);

			String foodNameCheck = nutrionPostDTO.getFoodName();

			String drinkNameCheck = nutrionPostDTO.getDrinkName();

			Matcher foodNameChecker = patternfoodName.matcher(foodNameCheck);

			Matcher drinkNameChecker = patterndrinkName.matcher(drinkNameCheck);

			if (foodNameChecker.matches() == false) {
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			} else if (drinkNameChecker.matches() == false) {
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			} else {
				response.setStatus(HttpServletResponse.SC_CREATED);
				NutrionalHealthForm newForm = new NutrionalHealthForm(nutrionPostDTO.getEmail(),
						nutrionPostDTO.getDateOfConsumption(), nutrionPostDTO.getFoodName(),
						nutrionPostDTO.getCalories(), nutrionPostDTO.getConsumption(), nutrionPostDTO.getDrinkName(),
						nutrionPostDTO.getDrinkCalories(), nutrionPostDTO.getDrinkConsumption(),
						nutrionPostDTO.getTimeOfDay(), nutrionPostDTO.getTimeOfConsumption());
				nService.addFormEntity(newForm);
				String email = nutrionPostDTO.getEmail();
				System.out.println(email);
				User emailCompare = userService.findByEmail(email);
				System.out.println(emailCompare);
				NutrionalUserInput input = new NutrionalUserInput();
				input.setNutrionalResponse(newForm);
				input.setUser(emailCompare);
				n2Service.addFormEntity(input);
				return new ResponseEntity<>(Optional.ofNullable(newForm), HttpStatus.CREATED);
			}
		}
		return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
		
	}

	@PutMapping("/nutrionalF/editData")
	public String updateFormResponse(HttpServletResponse response, @RequestParam String id2,
			@RequestBody UpdatedNutrionalFormDTO newDTO) {
		long id = Long.parseLong(id2);

		String regexfoodName = "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*{2,30}";

		String regexdrinkName = "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*{2,30}";

		Pattern patternfoodName = Pattern.compile(regexfoodName);

		Pattern patterndrinkName = Pattern.compile(regexdrinkName);

		String foodNameCheck = newDTO.getFoodName();

		String drinkNameCheck = newDTO.getDrinkName();

		Matcher foodNameChecker = patternfoodName.matcher(foodNameCheck);

		Matcher drinkNameChecker = patterndrinkName.matcher(drinkNameCheck);

		if (foodNameChecker.matches() == false) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return "False";
		} else if (drinkNameChecker.matches() == false) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return "False";
		} else {
			response.setStatus(HttpServletResponse.SC_CREATED);
			nService.updateResponse(id, newDTO);
			return "Saved";
		}
	}

	@DeleteMapping("nutrionalForm/delete/id")
	public String deleteFormResponse(@RequestParam String id2, String email) {
		long id = Long.parseLong(id2);
		System.out.println(id);
		n2Service.deleteResponse();
		nService.deleteResponse(id);
		return "Response Deleted";
	}

	@GetMapping("/nutrionalF/findByEmail")
	public Optional<List<NutrionalHealthForm>> getInputByEmail(@RequestParam String email) {
		return Optional.ofNullable(nService.findByEmail(email));
	}

}