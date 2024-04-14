package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Calculation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    private String address_object_constractions;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer number;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Date created_date;

    @OneToOne(fetch = FetchType.LAZY)
    private User manager = new User();

    @OneToMany(fetch = FetchType.LAZY)
    private List<Results> results = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "сalculation_state_id")
    private Status сalculation_state_id = new Status();
}
