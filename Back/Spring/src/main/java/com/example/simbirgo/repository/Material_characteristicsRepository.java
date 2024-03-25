package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Material_characteristics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Material_characteristicsRepository extends JpaRepository<Material_characteristics, Long> {
}
