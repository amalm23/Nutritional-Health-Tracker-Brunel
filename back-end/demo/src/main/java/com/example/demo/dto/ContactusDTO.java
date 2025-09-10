package com.example.demo.dto;

public class ContactusDTO {
	String firstname;
	String text;
	String email;
	
	
	public ContactusDTO(String firstname, String text, String email) {
		super();
		this.firstname = firstname;
		this.text = text;
		this.email = email;
		
	}
	
	public String getfirstname() {
		return firstname;
	}

	public void setfirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String gettext() {
		return text;
	}

	public void settext(String text) {
		this.text = text;
	}
	

	public String getqueryemail() {
		return email;
	}

	public void setqueryemail(String email) {
		this.email = email;
	}
	

}
