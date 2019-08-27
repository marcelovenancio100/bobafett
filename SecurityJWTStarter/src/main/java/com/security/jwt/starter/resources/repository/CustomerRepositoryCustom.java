package com.security.jwt.starter.resources.repository;

import com.security.jwt.starter.resources.model.Customer;
import com.security.jwt.starter.resources.model.dto.CustomerDto;

import java.util.List;

public interface CustomerRepositoryCustom {

    public Long findCustomersCountByFilter(CustomerDto clienteDto);

    public List<Customer> findCustomersByFilter(CustomerDto clienteDto);
}
