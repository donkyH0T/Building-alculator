package com.example.simbirgo.controllers;


import com.example.simbirgo.payload.request.LoginRequest;
import com.example.simbirgo.payload.request.SignupRequest;
import com.example.simbirgo.payload.request.UpdateRequest;
import com.example.simbirgo.security.services.AccountService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Account")
public class AccountController {

   @Autowired
    AccountService accountService;



    @GetMapping("/Me")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') hasRole('ADMIN')")
    public ResponseEntity<?> me(){
        return accountService.me();
    }

    @PostMapping("/SignIn")
    public ResponseEntity<?> signIn(@RequestBody LoginRequest loginRequest){
        return accountService.signIn(loginRequest);
    }

    @PostMapping("/SignUp")
    public ResponseEntity<?> signUp(@RequestBody SignupRequest signUpRequest){
        return accountService.signUp(signUpRequest);
    }

//    @PostMapping("/SignOut")
//    @SecurityRequirement(name = "JWT")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//    public ResponseEntity<?> signOut(HttpServletRequest request, HttpServletResponse response){
//        return accountService.signOut(request,response);
//    }

    @PutMapping("/Update")
    @SecurityRequirement(name = "JWT")
    @PreAuthorize("hasRole('MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<?> update(@RequestBody UpdateRequest updateRequest){
        return accountService.update(updateRequest);
    }
}
