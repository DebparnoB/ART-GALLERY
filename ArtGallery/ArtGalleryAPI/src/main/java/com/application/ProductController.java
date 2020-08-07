package com.application;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Product;
import com.application.service.ProductService;

@RestController
@RequestMapping(value = "/api/product")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@RequestMapping(value = "/getAllProducts", method = RequestMethod.GET)
	public List<Product> getAllProducts() {
		/*
		 * Product p1 = new Product(); p1.setName("Monalisa"); p1.setPrice(20000000);
		 * p1.setSeller("Leo");
		 * 
		 * Product p2 = new Product(); p2.setName("Grand Canyon"); p2.setPrice(800000);
		 * p2.setSeller("Mac");
		 * 
		 * Product p3 = new Product(); p3.setName("House by the river");
		 * p3.setPrice(1000000); p3.setSeller("Alice"); productService.addProduct(p1);
		 * productService.addProduct(p2); productService.addProduct(p3);
		 */
		return productService.getAllProducts();
	}
	
	@RequestMapping(value = "/getProductById", method = RequestMethod.GET)
	public Product getProductById(@RequestParam("productId") Integer productId) {
		return productService.getProductById(productId);
	}
}
