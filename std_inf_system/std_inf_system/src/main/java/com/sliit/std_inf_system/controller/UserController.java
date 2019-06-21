package com.sliit.std_inf_system.controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.sliit.std_inf_system.models.User;
import com.sliit.std_inf_system.repository.UserRepository;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins="*",allowedHeaders="*")
public class UserController {

	private UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@PostMapping("/validate")
	public User ValidateUser(@RequestBody User user) {
		
		System.out.println(user.getEmail());
		User toValid = this.userRepository.findByEmail(user.getEmail());
		if (toValid == null) {
			System.out.println("No user found");
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, "User Not Found");
		}
		else {
			if(user.getPassword().equals(toValid.getPassword())){
				return toValid;
			}
			else {
				throw new ResponseStatusException(
				          HttpStatus.NOT_FOUND, "Invalid Password");
			}
		}
	}
}
