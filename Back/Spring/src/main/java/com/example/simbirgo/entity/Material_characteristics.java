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

    @ManyToOne
    @JoinColumn(name = "measurement_unit_id", referencedColumnName = "id")
    private Measurement_units measurementUnit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mаterials_id")
    private Materials mаterials_id = new Materials();
}
