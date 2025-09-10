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

//Let's create a simple User class
@Entity
@Table(name = "NutrionalUserInput")
@EntityListeners(AuditingEntityListener.class)

public class NutrionalUserInput implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@ManyToOne
	@JoinColumn(name = "userID")
	public User user;

	@ManyToOne
	@JoinColumn(name = "formID")
	public NutrionalHealthForm nHForm;
	
	 public NutrionalUserInput() {
			super();
			// TODO Auto-generated constructor stub
	}

	public NutrionalUserInput (User user, NutrionalHealthForm nHForm) {
		this.user = user;
		this.nHForm = nHForm;
	}
	
	public Long getID() {
		return id;
	}

	public void setID(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public NutrionalHealthForm getNutrionalResponse() {
		return nHForm;
	}

	public void setNutrionalResponse(NutrionalHealthForm nHForm) {
		this.nHForm = nHForm;
	}

	@Override
	public String toString() {
		return "NutrionalResponse [id=" + id + ", User=" + user + ", Response=" + nHForm + "]";
	}

}