package com.security.jwt.starter.resources.repository;

import com.security.jwt.starter.resources.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String>, CustomerRepositoryCustom {}
