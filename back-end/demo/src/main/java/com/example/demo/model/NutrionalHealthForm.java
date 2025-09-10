package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.stereotype.Service;

@Entity
@Table(name = "NutritionalHealthFormResponses")
@EntityListeners(AuditingEntityListener.class)
public class NutrionalHealthForm implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column(name = "email")
	String email;

	@Column(name = "date_of_consumption")
	String dateOfConsumption;

	@Column(name = "food_name")
	String foodName;

	@Column(name = "food_calories")
	Double calories;

	@Column(name = "food_consumption")
	Double consumption;

	@Column(name = "drink_name")
	String drinkName;

	@Column(name = "drink_calories")
	Double drinkCalories;

	@Column(name = "drink_consumption")
	Double drinkConsumption;
	
	@Column(name = "time_of_day")
	String timeOfDay;

	@Column(name = "time_of_consumption")
	String timeOfConsumption;

	public NutrionalHealthForm() {
		super();

	}

	public NutrionalHealthForm(String email, String dateOfConsumption, String foodName, Double calories,
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

	public Long getFormID() {
		return id;
	}

	public void setFormID(Long id) {
		this.id = id;
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
	
	public void setConsumption(Double consumption) {
		this.consumption = consumption;
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
		return "NutrionResponse [id=" + id + ", email=" + email + ", Date of Consumption=" + dateOfConsumption + ", foodName=" + foodName + ", calories=" + calories
				+ ", consumption=" + consumption + ", drinkName=" + drinkName + ", drinkCalories" + drinkCalories
				+ ", drinkConsumption" + drinkConsumption + ", Time of Day=" + timeOfDay + ", Time of Consumption=" + timeOfConsumption + "]";
	}
}