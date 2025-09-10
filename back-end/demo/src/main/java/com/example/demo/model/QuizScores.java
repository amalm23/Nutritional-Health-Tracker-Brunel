package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "QuizScores")
@EntityListeners(AuditingEntityListener.class)
public class QuizScores implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column(name = "email")
	String email;
	
	@Column(name = "score")
	int score;
	
	public QuizScores() {
		super();
	}
	
	public QuizScores(String email, int score) {
		this.email = email;
		this.score = score;
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
	
	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}
	
	 @Override
	    public String toString() {
	        return "QuizScores [id=" + id + ", email =" + email + ", score=" + score + "]";
	    }
	}