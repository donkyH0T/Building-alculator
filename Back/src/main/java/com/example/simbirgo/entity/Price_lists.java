package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Price_lists {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "date")
    private Date date;
    @Column(name = "purchase_price",nullable = false)
    private Float purchase_price;
    @Column(name = "selling_price")
    private Float selling_price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "material_characteristics_id")
    private Material_characteristics material_characteristics_id = new Material_characteristics();
}
