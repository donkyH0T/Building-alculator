package com.example.simbirgo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Openings_in_a_structural_element_frame {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(name = "amount")
    private Integer amount;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "structural_element_frame_id")
    private Structural_element_frame structural_element_frame_id = new Structural_element_frame();

    @OneToMany(fetch = FetchType.LAZY)
    private List<Openings> openings = new ArrayList<>();
}
