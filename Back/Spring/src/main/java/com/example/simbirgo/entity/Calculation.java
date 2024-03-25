package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

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
    @JoinColumn(name = "customer_id")
    private Customers customer_id = new Customers();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "results_id")
    private Results results_id = new Results();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "сalculation_state_id")
    private Status сalculation_state_id = new Status();
}
