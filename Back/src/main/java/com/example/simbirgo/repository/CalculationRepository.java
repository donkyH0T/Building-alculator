package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Calculation;
import com.example.simbirgo.entity.Results;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CalculationRepository extends JpaRepository<Calculation, Long> {

    @Query("SELECT c FROM Calculation c WHERE c.manager.id = :id")
    List<Calculation> findAllByManagerId(@Param("id") Long id);


}
