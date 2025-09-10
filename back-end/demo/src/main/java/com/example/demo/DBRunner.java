package com.example.demo;

import com.example.demo.model.*;
import com.example.demo.repository.*;
import java.math.BigDecimal;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DBRunner implements CommandLineRunner {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private NutrionalFormRepository nFormRepository;

	@Autowired
	private NutrionalUserInputRepository nFormInputRepository;
	
	@Autowired
	private ContactusRepository contactRepository;
	
	@Autowired
	private ThoughtDiaryRespository thoughtRepository;
	
	@Autowired
	private ThoughtDiaryInputRepository thoughtDRepository;
	
	

	@Override
	public void run(String... args) throws Exception {
		nFormInputRepository.deleteAll();
		thoughtDRepository.deleteAll();
		thoughtRepository.deleteAll();
		userRepository.deleteAll();
		nFormRepository.deleteAll();
		contactRepository.deleteAll();

		User newUser = new User("alex", "smith", "2001-01-01", "alex@sample.com", "alex_user", "alex_pass");
		userRepository.save(newUser);

		NutrionalHealthForm formform = new NutrionalHealthForm("alex@sample.com", "2001-01-01", "Apple", 23.00, 23.00, "Water", 23.00, 23.23, "Breakfast", "12:00");
		nFormRepository.save(formform);
		
		ThoughtDiary diaryResponse = new ThoughtDiary("alex@sample.com", "I am nervous.");
		thoughtRepository.save(diaryResponse);
		
		NutrionalUserInput input = new NutrionalUserInput();
		input.setNutrionalResponse(formform);
		input.setUser(newUser);
		nFormInputRepository.save(input);
		
		ThoughtDiaryInput thoughtinput = new ThoughtDiaryInput();
		thoughtinput.setThoughtDiaryResponse(diaryResponse);
		thoughtinput.setUser(newUser);
		thoughtDRepository.save(thoughtinput);
		
		Queries newQuery = new Queries("luke", "luke@gmail.com", "Health and Fitness");
		contactRepository.save(newQuery);
		
	}
}