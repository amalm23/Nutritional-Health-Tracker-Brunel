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

public class QuizScoresDTO {
	String email;
	Integer score;
	
	public QuizScoresDTO(String email, Integer score) {
		super();
		this.email = email;
		this.score = score;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public int getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}
	@Override
    public String toString() {
        return "QuizScores [email =" + email + ", score=" + score + "]";
    }
}