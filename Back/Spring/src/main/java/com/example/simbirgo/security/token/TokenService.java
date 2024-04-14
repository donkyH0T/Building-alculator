package com.example.simbirgo.security.token;

public interface TokenService {
    void revokeToken(String token);
    boolean isTokenRevoked(String token);
}

