package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Material_characteristics {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "name",nullable = false)
    private String name;
    @Column(name = "length")
    private Float length;
    @Column(name = "width")
    private Float width;
    @Column(name = "thickness")
    private Float thickness;
    @Column(name = "volume")
    private Float volume;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "measurement_unit_id")
    private List<Measurement_units> measurement_unit_id = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "materials_id")
    private List<Material_characteristics> materials_id = new ArrayList<>();

}
