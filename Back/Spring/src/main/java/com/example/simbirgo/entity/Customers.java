package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "last_name",nullable = false)
    private String last_name;
    @Column(name = "first_name",nullable = false)
    private String first_name;
    @Column(name = "second_name",nullable = false)
    private String second_name;
    @Column(name = "phone",nullable = false)
    private Integer phone;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "address",nullable = false)
    private String address;
}
