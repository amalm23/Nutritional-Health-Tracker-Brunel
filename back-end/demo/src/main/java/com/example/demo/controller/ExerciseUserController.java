package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.ExerciseUser;
import com.example.demo.model.NutrionalHealthForm;
import com.example.demo.repository.ExerciseUserRepository;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
public class ExerciseUserController {

  @Autowired
  private ExerciseUserRepository exerciseUserRepository;

//  @GetMapping("/exusers")
//  public List<ExerciseUser> getExerciseUser() {
//    return exerciseUserRepository.findAll();
//  }
  @GetMapping("/{email}")
  public List<ExerciseUser> getExerciseUser(@PathVariable("email") String email) {
      return exerciseUserRepository.findByEmail(email);
  }


  @PostMapping("/excreate")
  public void createExerciseUser(@RequestBody ExerciseUser exerciseUser) {
    ExerciseUser exerciseUser1 = new ExerciseUser();
    exerciseUser1.setDate(exerciseUser.getDate());
    exerciseUser1.setEmail(exerciseUser.getEmail());
    exerciseUser1.setExerciseName(exerciseUser.getExerciseName());
    exerciseUser1.setExerciseTime(exerciseUser.getExerciseTime());
    exerciseUserRepository.save(exerciseUser1);
  }

  @PutMapping("exupdate/{id}/{date}")
  public void updateExerciseUser(@PathVariable("date") String date, @PathVariable("id") Long id) {
    ExerciseUser exerciseUser1 = exerciseUserRepository.findById(id).get();
    exerciseUser1.setDate(date);
    exerciseUserRepository.save(exerciseUser1);
  }

  @DeleteMapping("exdelete/{id}")
  public void deleteExerciseUser(@PathVariable("id") Long id) {
     exerciseUserRepository.deleteById(id);
  }
  

}
