package com.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.application.entity.Product;
import com.application.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	@Transactional
	public void addProduct(Product product) {
		productRepository.save(product);
	}
	
	@Transactional
	public List<Product> getAllProducts(){
		return (List<Product>) productRepository.findAll();
	}
	
	@Transactional
	public Product getProductById(int id) {
		return productRepository.findOne(id);
	}

}
