package com.example.simbirgo.controllers;


import com.example.simbirgo.exception.TokenRevokedException;
import com.example.simbirgo.dto.request.LoginRequest;
import com.example.simbirgo.dto.request.SignupRequest;
import com.example.simbirgo.dto.request.UpdateRequest;
import com.example.simbirgo.services.AccountService;
import com.example.simbirgo.security.token.TokenService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/Account")
@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    TokenService tokenService;

    @GetMapping("/Me")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN')")
    @Transactional
    public ResponseEntity<?> me(@RequestHeader("Authorization") String authorizationHeader) {
        String token = extractTokenFromHeader(authorizationHeader);
        if (tokenService.isTokenRevoked(token)) {
            throw new TokenRevokedException("Token has been revoked");
        }
        return accountService.me();
    }

    @PostMapping("/SignIn")
    @Transactional
    public ResponseEntity<?> signIn(@RequestBody LoginRequest loginRequest) {
        return accountService.signIn(loginRequest);
    }

    @PostMapping("/SignUp")
    @Transactional
    public ResponseEntity<?> signUp(@RequestBody SignupRequest signUpRequest) {
        return accountService.signUp(signUpRequest);
    }

    @PostMapping("/SignOut")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN')")
    @Transactional
    public ResponseEntity<?> signOut(HttpServletRequest request, HttpServletResponse response, @RequestHeader("Authorization") String authorizationHeader) {
        String token = extractTokenFromHeader(authorizationHeader);
        if (tokenService.isTokenRevoked(token)) {
            throw new TokenRevokedException("Token has been revoked");
        }
        return accountService.signOut(request, response);
    }

    @PutMapping("/Update")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('ADMIN')")
    @Transactional
    public ResponseEntity<?> update(@RequestBody UpdateRequest updateRequest, @RequestHeader("Authorization") String authorizationHeader) {
        String token = extractTokenFromHeader(authorizationHeader);
        if (tokenService.isTokenRevoked(token)) {
            throw new TokenRevokedException("Token has been revoked");
        }
        return accountService.update(updateRequest);
    }

    private String extractTokenFromHeader(String authorizationHeader) {
        String[] parts = authorizationHeader.split(" ");
        if (parts.length == 2) {
            return parts[1];
        } else {
            throw new IllegalArgumentException("Invalid Authorization header format");
        }
    }
}
