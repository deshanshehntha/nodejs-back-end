package com.sliit.std_inf_system.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.std_inf_system.models.Submission;


public interface SubmissionRepo extends MongoRepository<Submission, String>{

}