package com.sliit.std_inf_system.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.std_inf_system.models.User;

public interface UserRepository extends MongoRepository<User, String> {

	User findByEmail(String email);
	
}
