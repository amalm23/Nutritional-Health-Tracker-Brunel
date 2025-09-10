package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import java.math.BigDecimal;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ThoughtDiaryInput")
@EntityListeners(AuditingEntityListener.class)

public class ThoughtDiaryInput implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@ManyToOne
	@JoinColumn(name = "userID")
	public User user;

	@ManyToOne
	@JoinColumn(name = "thoughtID")
	public ThoughtDiary thoughtDiary;

	public ThoughtDiaryInput() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ThoughtDiaryInput(User user, ThoughtDiary thoughtDiary) {
		this.user = user;
		this.thoughtDiary = thoughtDiary;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ThoughtDiary getThoughtDiaryResponse() {
		return thoughtDiary;
	}

	public void setThoughtDiaryResponse(ThoughtDiary thoughtDiary) {
		this.thoughtDiary = thoughtDiary;
	}

	@Override
	public String toString() {
		return "NutrionalResponse [id=" + id + ", User=" + user + ", ThoughtResponse=" + thoughtDiary + "]";
	}

}