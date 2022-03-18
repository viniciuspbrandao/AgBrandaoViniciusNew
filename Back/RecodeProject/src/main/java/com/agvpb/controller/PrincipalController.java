package com.agvpb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.agvpb.model.Principal;
import com.agvpb.repository.PrincipalRepository;

@RestController
public class PrincipalController {

	@Autowired	
	private PrincipalRepository principalRepository;
	
	@PostMapping("/passeio/create")
	public void createPrincipal(@RequestBody Principal principal) {
		
		principalRepository.insert(principal);
	}
	
	@PostMapping("/passeio/delete/{id}")
	public void deletePrincipal(@PathVariable String id) {
		principalRepository.deleteById(id);
		}
	
	@GetMapping("/passeio/list")
	public List <Principal> listPasseios() {
		return principalRepository.findAll();
		
	}

}
