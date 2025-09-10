package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ContactusDTO;
import com.example.demo.model.Queries;
import com.example.demo.service.QueriesService;

@RestController
public class QueriesController {

	@Autowired
	QueriesService queriesService;

	// Get All Queries
//    @GetMapping("/Queries")
//    public List<Queries> getQueries() {
//        return queriesService.getQueries();
//    }
    
    @PostMapping("/Queries")
    public ResponseEntity<Optional<Queries>> addQueries(@RequestBody ContactusDTO newQueriesDTO) {
    	
    	if (newQueriesDTO.getfirstname()==null ||
    		newQueriesDTO.getqueryemail()==null ||
    		newQueriesDTO.gettext()==null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	Queries newQuery = new Queries(newQueriesDTO.getfirstname(), newQueriesDTO.getqueryemail(), newQueriesDTO.gettext()
               );
    	queriesService.addQuery(newQuery);
    	return new ResponseEntity<>(Optional.ofNullable(newQuery),HttpStatus.CREATED);
    }

}
