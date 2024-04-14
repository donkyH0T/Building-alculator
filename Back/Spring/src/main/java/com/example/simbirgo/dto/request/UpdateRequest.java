package com.example.simbirgo.dto.request;

import lombok.Data;

@Data
public class UpdateRequest {
    private String login;

    public UpdateRequest() {
    }

    public UpdateRequest(String login, String password) {
        this.login = login;
        this.password = password;
    }

    private String password;
}
