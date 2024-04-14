package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Structural_element_frame {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "amount_floor",nullable = false)
    private Integer amount_floor;
    @Column(name = "floor_number",nullable = false)
    private Integer floor_number;
    @Column(name = "floor_height",nullable = false)
    private Integer floor_height;
    @Column(name = "perimeter_of_external_walls",nullable = false)
    private Float perimeter_of_external_walls;
    @Column(name = "base_area",nullable = false)
    private Float base_area;
    @Column(name = "external_wall_thickness",nullable = false)
    private Float external_wall_thickness;
    @Column(name = "internal_wall_length",nullable = false)
    private Float internal_wall_length;
    @Column(name = "internal_wall_thickness",nullable = false)
    private Float internal_wall_thickness;
    @Column(name = "OSB_external_wall",nullable = false)
    private String OSB_external_wall;
    @Column(name = "steam_waterproofing_external_wall",nullable = false)
    private String steam_waterproofing_external_wall;
    @Column(name = "windscreen_external_wall",nullable = false)
    private String windscreen_external_wall;
    @Column(name = "insulation_external_wall",nullable = false)
    private String insulation_external_wall;
    @Column(name = "overlap_thickness",nullable = false)
    private String overlap_thickness;
    @Column(name = "OSB_thickness",nullable = false)
    private String OSB_thickness;
    @Column(name = "steam_waterproofing_thickness",nullable = false)
    private String steam_waterproofing_thickness;
    @Column(name = "windscreen_thickness",nullable = false)
    private String windscreen_thickness;
    @Column(name = "insulation_thickness",nullable = false)
    private String insulation_thickness;
    @Column(name = "OSB_internal_wal",nullable = false)
    private String OSB_internal_wal;

    @OneToMany(mappedBy = "structuralElementFrame", cascade = CascadeType.ALL)
    private List<Results> results = new ArrayList<>();
}
