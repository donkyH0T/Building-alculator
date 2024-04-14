package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Calculation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    private String address_object_constractions;
    private Integer number;
    private LocalDateTime created_date = LocalDateTime.now();

    @OneToOne(fetch = FetchType.LAZY)
    private User manager;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "calculation_id")
    private List<Results> resultsList = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calculation_state_id")
    private Status calculationState = new Status();
}


