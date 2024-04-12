package com.example.simbirgo.controllers;


import com.example.simbirgo.entity.User;
import com.example.simbirgo.dto.request.UserDto;
import com.example.simbirgo.services.AdminAccountService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/Admin/Account")
@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
public class AdminAccountController {

    @Autowired
    private AdminAccountService adminAccountService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "JWT")
    @Transactional
    public List<UserDto> getAllAccounts(@RequestParam int start, @RequestParam int count) {
        return adminAccountService.getAllAccounts(start, count);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "JWT")
    @Transactional
    public User getAccountById(@PathVariable Long id) {
        return adminAccountService.getAccountById(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "JWT")
    @Transactional
    public ResponseEntity<?> createAccount(@RequestBody UserDto accountDto) {
        if (!StringUtils.isEmpty(accountDto.getEmail())) {
            return adminAccountService.createAccount(accountDto);
        }
        return ResponseEntity.badRequest().body("Error registration");
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "JWT")
    @Transactional
    public ResponseEntity<?> updateAccount(@PathVariable Long id, @RequestBody UserDto accountDto) {
       return adminAccountService.updateAccount(id, accountDto);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "JWT")
    @Transactional
    public ResponseEntity<?> deleteAccount(@PathVariable Long id) {
       return adminAccountService.deleteAccount(id);
    }
}
