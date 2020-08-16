package com.application.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Product;
import com.application.entity.User;
import com.application.service.UserService;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public boolean addUser(@RequestBody User user, HttpSession session) {
		try {
			User saving_user = new User();
			saving_user.setFirst_name(user.getFirst_name());
			saving_user.setMiddle_name(user.getMiddle_name());
			saving_user.setLast_name(user.getLast_name());
			saving_user.setCountry(user.getCountry());
			saving_user.setState(user.getState());
			saving_user.setAddress(user.getAddress());
			saving_user.setPin_code(user.getPin_code());
			saving_user.setCity(user.getCity());
			saving_user.setEmail(user.getEmail());
			saving_user.setCont_number(user.getCont_number());
			saving_user.setPassword(user.getPassword());
			userService.addUser(saving_user);
			return true;
		}catch(Exception e) {
			System.out.println("Error in addUser: " + e);
			return false;
		}
	}

}