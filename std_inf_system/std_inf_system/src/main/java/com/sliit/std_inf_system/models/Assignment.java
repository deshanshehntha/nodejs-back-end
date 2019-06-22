package com.sliit.std_inf_system.models;

import java.util.Arrays;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assignments")
public class Assignment {

	@Id
	private ObjectId _id;
	
	private byte[] file;
	private String fileName;
	private String subject;
	private String assignmentName;
	private String description;
	private String dueDate;
	private String startDate;
	
	public ObjectId get_id() {
		return _id;
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public byte[] getFile() {
		return file;
	}
	public void setFile(byte[] file) {
		this.file = file;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getAssignmentName() {
		return assignmentName;
	}
	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	
	@Override
	public String toString() {
		return "Assignment [_id=" + _id + ", file=" + Arrays.toString(file) + ", fileName=" + fileName + ", subject="
				+ subject + ", assignmentName=" + assignmentName + ", description=" + description + ", dueDate="
				+ dueDate + ", startDate=" + startDate + "]";
	}

	
}
