package com.example.simbirgo.controllers;

import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.services.CalculationService;
import com.example.simbirgo.services.CustomersService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Manager")
public class ManagerController {

    @Autowired
    CustomersService customersService;

    @Autowired
    CalculationService calculationService;

    @PostMapping("/AddCustomers")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN') or hasRole('HEAD') ")
    public ResponseEntity<?> addCustomers(@RequestBody CustomersRequest customersRequest) {
        return customersService.addCustomers(customersRequest);
    }



}
