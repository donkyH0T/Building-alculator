package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Openings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpeningsRepository extends JpaRepository<Openings, Long> {
}
