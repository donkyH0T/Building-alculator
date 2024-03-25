package com.example.simbirgo.controllers;

import com.example.simbirgo.dto.request.CustomersRequest;
import com.example.simbirgo.dto.request.LoginRequest;
import com.example.simbirgo.security.services.CustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Manager")
public class ManagerController {

    @Autowired
    CustomersService customersService;

    @PostMapping("/AddCustomers")
    public ResponseEntity<?> addCustomers(@RequestBody CustomersRequest customersRequest) {
        return customersService.addCustomers(customersRequest);
    }
}
