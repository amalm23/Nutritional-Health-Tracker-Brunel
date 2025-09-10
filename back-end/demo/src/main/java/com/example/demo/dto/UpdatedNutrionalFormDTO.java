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

public class UpdatedNutrionalFormDTO {

	Long formResponseID; 
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
	
	public UpdatedNutrionalFormDTO(Long formResponseID, 
	String email, 
	String dateOfConsumption, 
    String foodName,
    Double calories,
    Double consumption,
    String drinkName,
    Double drinkCalories,
    Double drinkConsumption,
	String timeOfDay, 
	String timeOfConsumption
	) {
		super();
		this.formResponseID = formResponseID; 
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
	
	public Long getFormID() {
		return formResponseID;
	}

	public void setFormID(Long formResponseID) {
		this.formResponseID = formResponseID;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setDateOfConsumption(String dateOfConsumption) {
		this.dateOfConsumption = dateOfConsumption;
	}
	
	public String getDateOfConsumption() {
		return dateOfConsumption;
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

	public void setConsumption(Double consumption) {
		this.consumption = consumption;
	}

	public void setTimeOfDay(String timeOfDay) {
		this.timeOfDay = timeOfDay;
	}
	
	public String getTimeOfDay() {
		return timeOfDay;
	}

	public void setTimeOfConsumption(String timeOfConsumption) {
		this.timeOfConsumption = timeOfConsumption;
	}
	
	public String getTimeOfConsumption() {
		return timeOfConsumption;
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

	@Override
	public String toString() {
		return "NutrionResponse [id=" + formResponseID + ", email=" + email + ", foodName=" + foodName + ", calories=" + calories + ", consumption=" + consumption + ", drinkName=" + drinkName + ", drinkCalories" + drinkCalories + ", drinkConsumption" + drinkConsumption + "]";
	}
}