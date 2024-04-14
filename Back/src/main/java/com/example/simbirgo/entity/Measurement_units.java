package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Measurement_units {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "measurement_units_name", nullable = false, length = 20)
    private String measurement_units_name;
}
