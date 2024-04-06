package com.example.simbirgo.controllers;

import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.services.CalculationService;
import com.example.simbirgo.services.CustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> addCustomers(@RequestBody CustomersRequest customersRequest) {
        return customersService.addCustomers(customersRequest);
    }



}
