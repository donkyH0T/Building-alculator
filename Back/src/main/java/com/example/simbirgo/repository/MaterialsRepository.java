package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Materials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialsRepository extends JpaRepository<Materials, Long> {
}
