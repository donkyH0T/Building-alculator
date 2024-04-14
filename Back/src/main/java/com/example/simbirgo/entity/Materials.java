package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

}
