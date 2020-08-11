package com.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.User;

public interface UserRepository extends CrudRepository<User,Integer> {

}
