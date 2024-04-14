package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Openings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "type")
    private String type;
    @Column(name = "width")
    private Float width;
    @Column(name = "height")
    private Float height;
    @Column(name = "amount")
    private Integer amount;
}
