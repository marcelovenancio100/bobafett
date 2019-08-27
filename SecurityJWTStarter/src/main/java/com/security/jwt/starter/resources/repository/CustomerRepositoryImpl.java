package com.security.jwt.starter.resources.repository;

import com.security.jwt.starter.resources.model.Customer;
import com.security.jwt.starter.resources.model.dto.CustomerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerRepositoryImpl implements CustomerRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Long findCustomersCountByFilter(CustomerDto customerDto) {
        Query query = new Query();
        if(customerDto.getCodigo() != null) query.addCriteria(Criteria.where("codigo").regex(customerDto.getCodigo()));
        if(customerDto.getNome() != null) query.addCriteria(Criteria.where("nome").regex(customerDto.getNome()));
        if(customerDto.getNi() != null) query.addCriteria(Criteria.where("ni").regex(customerDto.getNi()));
        return mongoTemplate.count(query, Customer.class);
    }

    @Override
    public List<Customer> findCustomersByFilter(CustomerDto customerDto) {
        Pageable pageable = PageRequest.of(customerDto.getPageIndex(),
                customerDto.getPageSize(),
                customerDto.getSortDirection().equals("asc") ? Sort.by("codigo").ascending() : Sort.by("codigo").descending());

        Query query = new Query().with(pageable);
        if(customerDto.getCodigo() != null) query.addCriteria(Criteria.where("codigo").regex(customerDto.getCodigo()));
        if(customerDto.getNome() != null) query.addCriteria(Criteria.where("nome").regex(customerDto.getNome()));
        if(customerDto.getNi() != null) query.addCriteria(Criteria.where("ni").regex(customerDto.getNi()));
        return mongoTemplate.find(query, Customer.class);
    }
}
