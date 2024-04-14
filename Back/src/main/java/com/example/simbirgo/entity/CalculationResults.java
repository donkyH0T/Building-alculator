package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class CalculationResults {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @ManyToOne
    private Calculation calculation;

    @ManyToOne
    private Results result;
}
