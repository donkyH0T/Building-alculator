package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.dto.request.OpeningsDto;
import com.example.simbirgo.dto.request.OpeningsStructuralElementFrameDto;
import com.example.simbirgo.dto.request.StructuralElementBasementDto;
import com.example.simbirgo.entity.Openings;
import com.example.simbirgo.entity.Openings_in_a_structural_element_frame;
import com.example.simbirgo.entity.Structural_element_basement;
import com.example.simbirgo.entity.Structural_element_frame;
import com.example.simbirgo.repository.OpeningsRepository;
import com.example.simbirgo.repository.Openings_in_a_structural_element_frameRepository;
import com.example.simbirgo.repository.Structural_element_basementRepository;
import com.example.simbirgo.repository.Structural_element_frameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StructuralElementBasementService {
    @Autowired
    Structural_element_basementRepository structural_element_basementRepository;
    @Autowired
    ResultsService resultsService;


    public Structural_element_basement structuralElementBasement(StructuralElementBasementDto structuralElementBasementDto) {

        Structural_element_basement structural_element_basement= structuralElementBasementDto.structuralElementBasement();

        structural_element_basement.setResults(resultsService.getResultsElementBasement(structuralElementBasementDto));

        return structural_element_basementRepository.save(structural_element_basement);
    }
}

