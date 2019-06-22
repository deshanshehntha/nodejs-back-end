package com.sliit.std_inf_system.controller;

import java.io.IOException;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sliit.std_inf_system.models.Assignment;
import com.sliit.std_inf_system.repository.AssignmentRepo;
import com.sliit.std_inf_system.util.CommonConstants;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(CommonConstants.API_PATH)
public class AssignmentController {
	
	@Autowired
	AssignmentRepo repo;
	
	/*
	 * This method will submit the assignment with respective data
	 */
	@RequestMapping(value = CommonConstants.ADD_NEW_ASSIGNMENT, method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Object> submitAssignment(@RequestParam("file") MultipartFile file,
			@RequestParam("subject") String subject,
			@RequestParam("assignmentName") String assignmentName,
			@RequestParam("description") String description,
			@RequestParam("dueDate") String dueDate,
			@RequestParam("startDate") String startDate) 
			throws IOException {
		
		Assignment assgnment = new Assignment();
		assgnment.set_id(new ObjectId());
		assgnment.setFile(file.getBytes());
		assgnment.setSubject(subject);
		assgnment.setAssignmentName(assignmentName);
		assgnment.setDescription(description);
		assgnment.setDueDate(dueDate);
		assgnment.setStartDate(startDate);
		repo.save(assgnment);

		
		return new ResponseEntity<>(assgnment, HttpStatus.OK);
		}
	
	@RequestMapping(value = CommonConstants.UPDATE_ASSIGNMENT, method = RequestMethod.PUT, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Object> editSubmission(@RequestParam("file") byte file[],
			@RequestParam("subject") String subject,
			@RequestParam("assignmentName") String assignmentName,
			@RequestParam("description") String description,
			@RequestParam("dueDate") String dueDate,
			@RequestParam("startDate") String startDate) 
			throws IOException {
		
		Assignment assgnment = new Assignment();
		assgnment.set_id(new ObjectId());
		assgnment.setFile(file);
		assgnment.setSubject(subject);
		assgnment.setAssignmentName(assignmentName);
		assgnment.setDescription(description);
		assgnment.setDueDate(dueDate);
		assgnment.setStartDate(startDate);
		repo.save(assgnment);


		repo.save(assgnment);

		
		return new ResponseEntity<>(assgnment, HttpStatus.OK);
		
	
	}
	
	

}
