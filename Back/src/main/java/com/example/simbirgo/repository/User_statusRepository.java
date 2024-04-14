package com.example.simbirgo.repository;

import com.example.simbirgo.entity.ERole;
import com.example.simbirgo.entity.EState;
import com.example.simbirgo.entity.Role;
import com.example.simbirgo.entity.User_status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface User_statusRepository extends JpaRepository<User_status, Long> {
    Optional<User_status> findByName(EState name);
}
