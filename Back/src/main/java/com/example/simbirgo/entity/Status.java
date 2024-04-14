package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ECalculationState name;
}
