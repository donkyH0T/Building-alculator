package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.entity.Customers;
import com.example.simbirgo.entity.ERole;
import com.example.simbirgo.entity.Role;
import com.example.simbirgo.entity.User;
import com.example.simbirgo.repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CustomersService {

    @Autowired
    CustomersRepository customersRepository;

    @Autowired
    private MailSenderService mailSenderService;

    public ResponseEntity<?> addCustomers(CustomersRequest customersRequest) {
        Customers customers = customersRequest.toCustomers();
        String message = String.format("Dear customers %s, congratulations on your successful registration", customers.getFirst_name());
        mailSenderService.send(customers.getEmail(), "Successful registration", message);
        return ResponseEntity.ok(customersRepository.saveAndFlush(customers));
    }
}
