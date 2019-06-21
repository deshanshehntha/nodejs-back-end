package com.sliit.std_inf_system.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
			return null;
		}
		else {
			if(user.getPassword().equals(toValid.getPassword())){
				return toValid;
			}
			else {
				System.out.println("Invalid Password");
				return null;
			}
		}
	}
}
