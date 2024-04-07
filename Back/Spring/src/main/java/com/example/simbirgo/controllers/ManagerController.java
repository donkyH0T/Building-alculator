package com.example.simbirgo.controllers;

import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.dto.request.UserDto;
import com.example.simbirgo.services.CalculationService;
import com.example.simbirgo.services.CustomersService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Manager/Customers")
public class ManagerController {

    @Autowired
    CustomersService customersService;

    @Autowired
    CalculationService calculationService;

    @PostMapping
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    public ResponseEntity<?> addCustomers(@RequestBody CustomersRequest customersRequest) {
        return customersService.addCustomers(customersRequest);
    }

    @PutMapping("/{id}")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    public ResponseEntity<?> updateCustomers(@PathVariable Long id, @RequestBody CustomersRequest customersDto) {
        return customersService.updateCustomers(id, customersDto);
    }

    @DeleteMapping("/{id}")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    public ResponseEntity<?> deleteCustomers(@PathVariable Long id) {
        return customersService.deleteCustomers(id);
    }

    @GetMapping
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    public ResponseEntity<?> customers() {
        return customersService.getAllCustomers();
    }
}
