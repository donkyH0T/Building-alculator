package com.example.simbirgo.services;

import com.example.simbirgo.entity.Calculation;
import com.example.simbirgo.entity.Customers;
import com.example.simbirgo.entity.User;
import com.example.simbirgo.repository.CalculationRepository;
import com.example.simbirgo.repository.CustomersRepository;
import com.example.simbirgo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ComputationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomersRepository customersRepository;

    @Autowired
    CalculationRepository calculationRepository;

    public ResponseEntity<?> computation(String address) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        User user = userRepository.findByLogin(currentUserName).get();
        List<Calculation> calculationList = calculationRepository.findAllByManager_Id(user.getId());
        List<Calculation> calculations = calculationList.stream()
                .filter(calculation -> address.equals(calculation.getAddress_object_constractions()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(calculations);
    }
}
