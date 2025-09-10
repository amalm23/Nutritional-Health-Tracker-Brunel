package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GettingUserRepository extends CrudRepository<User,Long>{
	List<User> findByEmail(String email);
}