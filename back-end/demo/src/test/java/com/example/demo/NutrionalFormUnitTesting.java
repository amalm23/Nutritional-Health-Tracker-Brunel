//package com.example.demo;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.util.Assert;
//
//import com.example.demo.model.NutrionalHealthForm;
//import com.example.demo.model.NutrionalUserInput;
//import com.example.demo.model.User;
//import com.example.demo.repository.UserRepository;
//import com.example.demo.service.NutrionalFormService;
////import com.example.demo.service.NutrionalUserInputService;
//import com.example.demo.service.UserService;
//
//import static org.junit.Assert.*;
//
//import org.junit.BeforeClass;
//
//@SpringBootTest
//class NutrionalFormUnitTesting {
//	
//	@Autowired
//	UserRepository userRepository;
//
//	@Autowired
//	NutrionalFormService n2Service;
//	
////	@Autowired
////	NutrionalUserInputService nI2Service;
//	
//	@Autowired
//	UserService userService;
//
//
//	@Test
//	void contextLoads() {
//	}
//	
//	@Test
//	public void testNutrionalForm() {
//		User newUser = new User("alex", "smith", "2001-01-01", "alex@sample.com", "alex_user", "alex_pass");
//		userRepository.save(newUser);
//		
//		String email = newUser.getEmail();
//		User emailCompare = userService.findByEmail(email);
//		System.out.println(emailCompare);
//
//		NutrionalHealthForm form = new NutrionalHealthForm();
//		form.setDateOfConsumption("2012/12/21");
//		form.setFoodName("Apple");
//		form.setCalories(232.000);
//		double calories = form.getCalories();
//		form.setConsumption(232);
//		int consumption = form.getConsumption();
//		form.setDrinkName("Water");
//		form.setDrinkCalories(23.23);
//		double drinkCalories = form.getDrinkCalories();
//		form.setDrinkConsumption(23);
//		int drinkConsumption = form.getDrinkConsumption();
//		form.setTimeOfConsumption("12:02");
//		assertEquals("2012/12/21", form.getDateOfConsumption());	
//		assertEquals("Apple", form.getFoodName());	
//		assertEquals(232.000, calories, 0.001);	
//		assertEquals(232, consumption, 0.001);
//		assertEquals("Water", form.getDrinkName());
//		assertEquals(23.23, drinkCalories, 0.001);
//		assertEquals(23, drinkConsumption, 0.001);
//		assertNotNull(form);
//		n2Service.addFormEntity(form);
//		System.out.println(form);
//		
//		
////		NutrionalUserInput input = new NutrionalUserInput();
////		input.setNutrionalResponse(form);
////		input.setUser(emailCompare);
////		nI2Service.addFormEntity(input);
//		
//	}
//
//	
//}
