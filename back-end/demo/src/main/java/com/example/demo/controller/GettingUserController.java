package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UpdatedUserPostDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.service.GettingUserService;
import com.example.demo.service.NutrionalUserInputService;
import com.example.demo.service.ThoughtDiaryInputService;

@RestController
public class GettingUserController {

	@Autowired
	UserService userService;

	@Autowired
	GettingUserService getUserService;

	@Autowired
	ThoughtDiaryInputService getThoughtDiaryService;

	@Autowired
	NutrionalUserInputService getInputService;

//
//	// Get All Users
//    @GetMapping("/user")
//    public List<User> getUsers() {
//        return userService.getUsers();
//    }
//    
//    @PostMapping("/user")
//    public ResponseEntity<Optional<User>> addUser(@RequestBody UserPostDTO newUserDTO) {
//    	
//    	if (newUserDTO.getFirstName()==null ||
//    		newUserDTO.getLastName()==null ||
//    		newUserDTO.getBirthday()==null ||
//    		newUserDTO.getEmail()==null ||
//    		newUserDTO.getUsername()==null ||
//    		newUserDTO.getPassword()==null) {
//            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
//        }
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//    	User newUser = new User(newUserDTO.getFirstName(), newUserDTO.getLastName(), 
//    			newUserDTO.getBirthday(), newUserDTO.getEmail(), newUserDTO.getUsername(),
//                encoder.encode(newUserDTO.getPassword()));
//    	userService.addUser(newUser);
//    	return new ResponseEntity<>(Optional.ofNullable(newUser),HttpStatus.CREATED);
//
//    }

	@PutMapping("/user/editUserProfile")
	public String updateFormResponse(HttpServletResponse response, @RequestParam String id2, @RequestBody UpdatedUserPostDTO newDTO) {
		long id = Long.parseLong(id2);
		String regexFirstName = "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*{2,30}";

		String regexLastName = "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*{2,30}";
		
		String regexuserName = "^[a-zA-Z0-9](_(?!(\\.|_))|\\.(?!(_|\\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$";

		Pattern patternFirstName = Pattern.compile(regexFirstName);

		Pattern patternLastName = Pattern.compile(regexLastName);
		
		Pattern patternUserName = Pattern.compile(regexuserName);

		String firstNameCheck = newDTO.getFirstName();

		Matcher firstNameMatcher = patternFirstName.matcher(firstNameCheck);

		String lastNameCheck = newDTO.getFirstName();

		Matcher lastNameChecker = patternLastName.matcher(lastNameCheck);
		
		String userNameCheck = newDTO.getUsername();
		
		Matcher userNameChecker = patternUserName.matcher(userNameCheck);

		if (firstNameMatcher.matches() == false) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return "False";
		} else if (lastNameChecker.matches() == false) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return "False";
		} else if (userNameChecker.matches() == false) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return "False";
		} 
		else {
			response.setStatus(HttpServletResponse.SC_CREATED);
			getUserService.updateUser(id, newDTO);
			return "Saved";
		}
	}

	@DeleteMapping("/user/deleteUser")
	public String deleteFormResponse(@RequestParam String id2) {
		long id = Long.parseLong(id2);
		getInputService.deleteResponse();
		getThoughtDiaryService.deleteResponse();
		getUserService.deleteUser(id);
		return "Response Deleted";
	}

	@GetMapping("/user/getUserByEmail")
	public List<User> getUserByEmail(@RequestParam String email) {
		return getUserService.findByEmail(email);
	}

}