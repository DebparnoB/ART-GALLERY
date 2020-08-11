package com.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.application.entity.Product;
import com.application.entity.User;
import com.application.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Transactional
	public void addUser(User user) {
		userRepository.save(user);
	}
	
	@Transactional
	public List<User> getAllUsers(){
		return (List<User>) userRepository.findAll();
	}
	
	@Transactional
	public User getUserById(int id) {
		return userRepository.findOne(id);
	}

}
