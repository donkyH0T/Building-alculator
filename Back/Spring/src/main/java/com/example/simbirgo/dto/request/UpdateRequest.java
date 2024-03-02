package com.example.simbirgo.dto.request;

import lombok.Data;

@Data
public class UpdateRequest {
    private String username;

    public UpdateRequest() {
    }

    public UpdateRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    private String password;
}
