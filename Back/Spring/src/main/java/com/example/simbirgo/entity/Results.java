package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Results {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "material",nullable = false)
    private String material;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "price")
    private Double price;
    @Column(name = "measurement_unit")
    private String measurement_unit;
    @Column(name = "full_price")
    private Double full_price;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "material_characteristics_id")
    private Material_characteristics material_characteristics_id = new Material_characteristics();
}
