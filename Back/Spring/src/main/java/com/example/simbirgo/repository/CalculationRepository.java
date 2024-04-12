package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Calculation;
import com.example.simbirgo.entity.Results;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CalculationRepository extends JpaRepository<Calculation, Long> {
    List<Calculation> findAllByManager_Id(Long id);
}
