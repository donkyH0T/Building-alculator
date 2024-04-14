package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Structural_element_basement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Structural_element_basementRepository extends JpaRepository<Structural_element_basement, Long> {
}
