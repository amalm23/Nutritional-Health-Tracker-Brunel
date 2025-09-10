package com.example.demo.dto;

public class ThoughtDiaryDTO {
	String email;
	String thought;

	public ThoughtDiaryDTO(String email, String thought) {
		super();
		this.email = email;
		this.thought = thought;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getThought() {
		return thought;
	}

	public void setThought(String thought) {
		this.thought = thought;
	}
}