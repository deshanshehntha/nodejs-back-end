package com.sliit.std_inf_system.models;

import java.util.Arrays;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Course {

	@Id
	private ObjectId _id;
	
	private String course_name;
	private String course_code;
	private User [] instructors;
	private User [] students;
	public ObjectId get_id() {
		return _id;
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public String getCourse_code() {
		return course_code;
	}
	public void setCourse_code(String course_code) {
		this.course_code = course_code;
	}
	public User[] getInstructors() {
		return instructors;
	}
	public void setInstructors(User[] instructors) {
		this.instructors = instructors;
	}
	public User[] getStudents() {
		return students;
	}
	public void setStudents(User[] students) {
		this.students = students;
	}
	@Override
	public String toString() {
		return "Course [_id=" + _id + ", course_name=" + course_name + ", course_code=" + course_code + ", instructors="
				+ Arrays.toString(instructors) + ", students=" + Arrays.toString(students) + "]";
	}

	
}

