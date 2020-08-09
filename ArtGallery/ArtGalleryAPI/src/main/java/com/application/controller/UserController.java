package com.application.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Product;
import com.application.entity.User;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
	
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public boolean addUser(@RequestBody User user) {
		System.out.println("Recieved >>>>>>>>>>>>>>> First Name: "+user.getFirst_name()+"  Password: "+ user.getPassword());
		return true;
	}

}
