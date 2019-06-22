package com.sliit.std_inf_system;

import static org.junit.Assert.*;

import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.sliit.std_inf_system.controller.UserController;
import com.sliit.std_inf_system.models.User;
import com.sliit.std_inf_system.repository.UserRepository;

public class logintest {

	@Test
	public void test() {
		User validateuser =new User();
		validateuser.setEmail("chamikaravinda@gmail.com");
		validateuser.setPassword("chamika22");
		
		UserController controller = new UserController(new UserRepository() {
			@Override
			public <S extends User> Optional<S> findOne(Example<S> arg0) {
				return null;
			}
			
			@Override
			public <S extends User> Page<S> findAll(Example<S> arg0, Pageable arg1) {
				return null;
			}
			
			@Override
			public <S extends User> boolean exists(Example<S> arg0) {
				return false;
			}
			
			@Override
			public <S extends User> long count(Example<S> arg0) {
				return 0;
			}
			
			@Override
			public <S extends User> S save(S arg0) {
				return null;
			}
			
			@Override
			public Optional<User> findById(String arg0) {
				return null;
			}
			
			@Override
			public Iterable<User> findAllById(Iterable<String> arg0) {
				return null;
			}
			
			@Override
			public boolean existsById(String arg0) {
				return false;
			}
			
			@Override
			public void deleteById(String arg0) {
				
			}
			
			@Override
			public void deleteAll(Iterable<? extends User> arg0) {				
			}
			
			@Override
			public void deleteAll() {
				
			}
			
			@Override
			public void delete(User arg0) {
				
			}
			
			@Override
			public long count() {
				return 0;
			}
			
			@Override
			public Page<User> findAll(Pageable arg0) {
				return null;
			}
			
			@Override
			public <S extends User> List<S> saveAll(Iterable<S> arg0) {
				return null;
			}
			
			@Override
			public <S extends User> List<S> insert(Iterable<S> arg0) {
				return null;
			}
			
			@Override
			public <S extends User> S insert(S arg0) {
				return null;
			}
			
			@Override
			public <S extends User> List<S> findAll(Example<S> arg0, Sort arg1) {
				return null;
			}
			
			@Override
			public <S extends User> List<S> findAll(Example<S> arg0) {
				return null;
			}
			
			@Override
			public List<User> findAll(Sort arg0) {
				return null;
			}
			
			@Override
			public List<User> findAll() {
				return null;
			}
			
			@Override
			public User findByEmail(String email) {
				return null;
			}
		});
		assertNotNull(controller.ValidateUser(validateuser));
	}

}
