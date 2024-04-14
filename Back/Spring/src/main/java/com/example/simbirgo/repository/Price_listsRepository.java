package com.example.simbirgo.repository;

import com.example.simbirgo.entity.Price_lists;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Price_listsRepository extends JpaRepository<Price_lists, Long> {
}
