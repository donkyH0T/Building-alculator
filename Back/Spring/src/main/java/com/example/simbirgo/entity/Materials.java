package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Materials {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "name",nullable = false)
    private String name;
    @Column(name = "material_type")
    private String material_type;
    @Column(name = "structural_element_type")
    private String structural_element_type;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mаterial_caracteristics_id")
    private Material_characteristics mаterial_caracteristics_id = new Material_characteristics();
}
