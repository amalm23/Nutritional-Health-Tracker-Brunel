package com.example.demo.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;

public class NutrionalHealthFormPostDTO {

    String email;
	String dateOfConsumption;
    String foodName;
    Double calories;
    Double consumption;
    String drinkName;
    Double drinkCalories;
    Double drinkConsumption;
    String timeOfDay;
	String timeOfConsumption;
	
	public NutrionalHealthFormPostDTO(String email, String dateOfConsumption, String foodName, Double calories,
			Double consumption, String drinkName, Double drinkCalories, Double drinkConsumption, String timeOfDay, String timeOfConsumption) {
		this.email = email;
		this.dateOfConsumption = dateOfConsumption;
		this.foodName = foodName;
		this.calories = calories;
		this.consumption = consumption;
		this.drinkName = drinkName;
		this.drinkCalories = drinkCalories;
		this.drinkConsumption = drinkConsumption;
		this.timeOfDay = timeOfDay;
		this.timeOfConsumption = timeOfConsumption;
	}

	public String getEmail() {
		return email;
	}

	public void setUsername(String email) {
		this.email = email;
	}

	public String getDateOfConsumption() {
		return dateOfConsumption;
	}

	public void setDateOfConsumption(String dateOfConsumption) {
		this.dateOfConsumption = dateOfConsumption;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public Double getCalories() {
		return calories;
	}

	public void setCalories(Double calories) {
		this.calories = calories;
	}

	public Double getConsumption() {
		return consumption;
	}

	public void setTimeOfConsumption(String timeOfConsumption) {
		this.timeOfConsumption = timeOfConsumption;
	}

	public String getTimeOfConsumption() {
		return timeOfConsumption;
	}

	public void setConsumption(Double consumption) {
		this.consumption = consumption;
	}

	public String getDrinkName() {
		return drinkName;
	}

	public void setDrinkName(String drinkName) {
		this.drinkName = drinkName;
	}

	public Double getDrinkCalories() {
		return drinkCalories;
	}

	public void setDrinkCalories(Double drinkCalories) {
		this.drinkCalories = drinkCalories;
	}

	public Double getDrinkConsumption() {
		return drinkConsumption;
	}

	public void setDrinkConsumption(Double drinkConsumption) {
		this.drinkConsumption = drinkConsumption;
	}
	
	public String getTimeOfDay() {
		return timeOfDay;
	}

	public void setTimeOfDay(String timeOfDay) {
		this.timeOfDay = timeOfDay;
	}


	@Override
	public String toString() {
		return "NutrionResponse [email=" + email + ", foodName=" + foodName + ", calories=" + calories + ", consumption=" + consumption + ", drinkName=" + drinkName + ", drinkCalories" + drinkCalories + ", drinkConsumption" + drinkConsumption + 
				 ", Time Of Day=" + timeOfDay + "]";
	}
}