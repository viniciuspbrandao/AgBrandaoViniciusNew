package com.agvpb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agvpb.model.Principal;

@Repository
public interface PrincipalRepository extends MongoRepository<Principal, String> {
	
}
