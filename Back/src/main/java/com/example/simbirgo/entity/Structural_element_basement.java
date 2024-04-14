package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Structural_element_basement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "perimeter_of_external_walls",nullable = false)
    private Float perimeter_of_external_walls;
    @Column(name = "internal_wall_length",nullable = false)
    private Float internal_wall_length;
    @Column(name = "concrete_piles",nullable = false)
    private String concrete_piles;
    @Column(name = "concrete",nullable = false)
    private String concrete;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "results_id")
    private Results results_id = new Results();
}
