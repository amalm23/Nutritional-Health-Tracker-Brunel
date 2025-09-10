package com.example.demo.model;


import lombok.Data;

import javax.persistence.*;


@Entity
@Data
@Table
public class ExerciseUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String date;

  private String email;
  
  private String exerciseTime;
  
  private String exerciseName;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getExerciseTime() {
	return exerciseTime;
}

public void setExerciseTime(String exerciseTime) {
	this.exerciseTime = exerciseTime;
}

public String getExerciseName() {
	return exerciseName;
}

public void setExerciseName(String exerciseName) {
	this.exerciseName = exerciseName;
}

//public ExerciseUser(Long id, String date, String email, String exerciseTime, String exerciseName) {
//	super();
//	this.id = id;
//	this.date = date;
//	this.email = email;
//	this.exerciseTime = exerciseTime;
//	this.exerciseName = exerciseName;
//}
//
//@Override
//public String toString() {
//	return "ExerciseUser [id=" + id + ", date=" + date + ", email=" + email + ", exerciseTime=" + exerciseTime
//			+ ", exerciseName=" + exerciseName + "]";
//}

}
