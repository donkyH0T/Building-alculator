package com.example.simbirgo.dto.request;

import com.example.simbirgo.entity.User;
import lombok.Data;

import javax.persistence.Column;


@Data
public class SignupRequest {
    private String login;
    private String email;
    private String password;
    private String last_name;
    private String first_name;
    private String second_name;
    private Integer phone;

    public User toUser(){
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setLast_name(last_name);
        user.setFirst_name(first_name);
        user.setSecond_name(second_name);
        user.setPhone(phone);
        user.setLogin(login);
        return user;
    }
}
