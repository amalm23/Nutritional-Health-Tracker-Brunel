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
@Table(name = "Queries")
@EntityListeners(AuditingEntityListener.class)
public class Queries implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	//@NotBlank
	//String queryfirstname;
	
    
    @NotBlank
    private String firstname;

    @NotBlank
    @Column(unique=true)
    private String email;

    @NotBlank
    private String text;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

    public Queries() {}

    public Queries(String firstname, String email, String text) {
        this.firstname = firstname;
        this.email = email;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public String getfirstname() {
        return firstname;
    }

    public void setfirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getqueryemail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    //public Date getCreatedAt() {
        //return createdAt;
    //}

    // public void setCreatedAt(Date createdAt) {
    //     this.createdAt = createdAt;
    // }

    // public Date getUpdatedAt() {
    //     return updatedAt;
    // }

    // public void setUpdatedAt(Date updatedAt) {
    //     this.updatedAt = updatedAt;
    // }

    @Override
    public String toString() {
        return "Queries [id=" + id + ", queryfirstname=" + firstname + ", queryemail=" + email + ", text=" + text + "]";
    }
}