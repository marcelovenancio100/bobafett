package com.security.jwt.starter.resources.controllers;

import com.security.jwt.starter.resources.model.Customer;
import com.security.jwt.starter.resources.model.dto.CustomerDto;
import com.security.jwt.starter.resources.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/customer/v1", produces= MediaType.APPLICATION_JSON_VALUE)
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    public CustomerController() {}

    @GetMapping("/getCustomer/{id}")
    public Optional<Customer> getCustomer(@PathVariable String id) {
        return customerRepository.findById(id);
    }

    @PostMapping("/getCustomersCount")
    public Long getCustomersCount(@Valid @RequestBody CustomerDto customerDto) {
        return customerRepository.findCustomersCountByFilter(customerDto);
    }

    @PostMapping("/getCustomers")
    public List<Customer> getCustomers(@Valid @RequestBody CustomerDto customerDto) {
        return customerRepository.findCustomersByFilter(customerDto);
    }

    @PostMapping(value="/saveCustomer", consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> saveCustomer(@Valid @RequestBody Customer customer) {
        customerRepository.save(customer);
        return new ResponseEntity<Customer>(HttpStatus.OK);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable String id) {
        customerRepository.deleteById(id);
        return new ResponseEntity<Customer>(HttpStatus.OK);
    }
}