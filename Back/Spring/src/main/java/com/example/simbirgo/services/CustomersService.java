package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.entity.Customers;
import com.example.simbirgo.entity.ERole;
import com.example.simbirgo.entity.Role;
import com.example.simbirgo.entity.User;
import com.example.simbirgo.repository.CustomersRepository;
import com.example.simbirgo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CustomersService {

    @Autowired
    CustomersRepository customersRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private MailSenderService mailSenderService;

    public ResponseEntity<?> addCustomers(CustomersRequest customersDto) {
        Customers customers = customersDto.toCustomers();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        User user = userRepository.findByLogin(currentUserName).get();
        List<Customers> customersList = user.getCustomers();
        if (customersList == null || customersList.isEmpty()){
            customersList = new ArrayList<>();
        }
        customersList.add(customers);
        user.setCustomers(customersList);
        Customers saveCustomers = customersRepository.saveAndFlush(customers);
        userRepository.save(user);
//        String message = String.format("Dear customers %s, congratulations on your successful registration", customers.getFirst_name());
//        mailSenderService.send(customers.getEmail(), "Successful registration", message);
        return ResponseEntity.ok(saveCustomers);
    }

    public ResponseEntity<?> updateCustomers(Long id, CustomersRequest customersDto) {
        if (customersRepository.findById(id).orElse(null) == null){
            return ResponseEntity.badRequest().body("not found customers by id");
        }
        Customers customers = customersDto.toCustomers();
        customers.setId(customersRepository.findById(id).get().getId());
//        String message = String.format("Dear customers %s, congratulations on your successful registration", customers.getFirst_name());
//        mailSenderService.send(customers.getEmail(), "Successful registration", message);
        return ResponseEntity.ok(customersRepository.saveAndFlush(customers));
    }

    public ResponseEntity<?> deleteCustomers(Long id) {
        Customers customers = customersRepository.findById(id).orElse(null);
        if (customers == null){
            return ResponseEntity.badRequest().body("not found customers by id");
        }
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        User user = userRepository.findByLogin(currentUserName).get();
        List<Customers> customersList = user.getCustomers();
        if (customersList != null || !customersList.isEmpty()){
            customersList.remove(customers);
        }
        user.setCustomers(customersList);
        userRepository.save(user);
        customersRepository.deleteById(id);
        return ResponseEntity.ok("delete customers with id: "+id);
    }

    public ResponseEntity<?> getAllCustomers() {
        return ResponseEntity.ok(customersRepository.findAll());
    }
}
