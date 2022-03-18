package com.agvpb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.agvpb.model.Promo;
import com.agvpb.repository.PromoRepository;

@RestController
public class PromoController {

	@Autowired
	private PromoRepository promoRepository;
	
	@PostMapping("/promo/create")
	public void createPromo(@RequestBody Promo promo) {
		
		promoRepository.insert(promo);
	}
	
	@PostMapping("/promo/delete/{id}")
	public void deletePromo(@PathVariable String id) {
		promoRepository.deleteById(id);
		}
	
	@GetMapping("/promo/list")
	public List <Promo> listPasseios() {
		return promoRepository.findAll();
		
	}

}
