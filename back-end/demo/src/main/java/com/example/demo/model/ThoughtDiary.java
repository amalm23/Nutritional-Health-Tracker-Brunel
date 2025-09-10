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
@Table(name = "ThoughtDiaryResponses")
@EntityListeners(AuditingEntityListener.class)
public class ThoughtDiary implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column(name = "email")
	String email;

	@Column(name = "thought")
	String thought;

	public ThoughtDiary() {
		super();

	}

	public ThoughtDiary(String email, String thought) {
		this.email = email;
		this.thought = thought;
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
	
	public void setEmail(String email) {
		this.email = email;
	}

	public void setThought(String thought) {
		this.thought = thought;
	}

	public String getThought() {
		return thought;
	}

	@Override
	public String toString() {
		return "NutrionResponse [id=" + id + ", email=" + email + ", thought=" + thought + "]";
	}
}