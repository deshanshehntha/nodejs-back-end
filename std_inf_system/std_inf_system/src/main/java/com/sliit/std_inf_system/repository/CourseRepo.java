package com.sliit.std_inf_system.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.std_inf_system.models.Course;



public interface CourseRepo extends MongoRepository <Course, String> {

}
