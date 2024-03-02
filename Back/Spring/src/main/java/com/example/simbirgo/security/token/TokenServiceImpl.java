package com.example.simbirgo.security.token;
import org.springframework.stereotype.Service;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TokenServiceImpl implements TokenService {

    private final Set<String> revokedTokens = ConcurrentHashMap.newKeySet();

    @Override
    public void revokeToken(String token) {
        revokedTokens.add(token);
    }

    @Override
    public boolean isTokenRevoked(String token) {
        return revokedTokens.contains(token);
    }
}

