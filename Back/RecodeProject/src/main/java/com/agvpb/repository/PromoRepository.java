package com.agvpb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agvpb.model.Promo;

@Repository
public interface PromoRepository extends MongoRepository<Promo, String> {
	
}
