package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Measurement_units;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Measurement_unitsRepository extends JpaRepository<Measurement_units, Long> {
}
