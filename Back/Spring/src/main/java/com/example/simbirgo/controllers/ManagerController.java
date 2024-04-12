package com.example.simbirgo.controllers;

import com.example.simbirgo.dto.request.CalculationDto;
import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.dto.request.OpeningsStructuralElementFrameDto;
import com.example.simbirgo.services.*;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Manager/Customers")
@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
public class ManagerController {

    @Autowired
    CustomersService customersService;

    @Autowired
    OpeningsInAStructuralElementFrameService openingsInAStructuralElementFrameService;

    @Autowired
    CalculationService calculationService;

    @Autowired
    ComputationService computationService;


    @PostMapping
    @SecurityRequirement(name = "JWT")
    @Transactional
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    public ResponseEntity<?> addCustomers(@RequestBody CustomersRequest customersRequest) {
        return customersService.addCustomers(customersRequest);
    }

    @PutMapping("/{id}")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    @Transactional
    public ResponseEntity<?> updateCustomers(@PathVariable Long id, @RequestBody CustomersRequest customersDto) {
        return customersService.updateCustomers(id, customersDto);
    }

    @DeleteMapping("/{id}")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    @Transactional
    public ResponseEntity<?> deleteCustomers(@PathVariable Long id) {
        return customersService.deleteCustomers(id);
    }

    @GetMapping
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    @Transactional
    public ResponseEntity<?> customers() {
        return customersService.getAllCustomers();
    }

    @PostMapping("/calculator")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    @Transactional
    public ResponseEntity<?> calculation(@RequestBody CalculationDto calculationDto) {
        return calculationService.calculation(calculationDto);
    }

    @GetMapping("/computation")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    @Transactional
    public ResponseEntity<?> computation(@RequestBody String address) {
        return computationService.computation(address);
    }
}
