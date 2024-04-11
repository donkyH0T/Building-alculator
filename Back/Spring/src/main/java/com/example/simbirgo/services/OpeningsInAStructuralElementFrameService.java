package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.dto.request.OpeningsStructuralElementFrameDto;
import com.example.simbirgo.entity.Openings;
import com.example.simbirgo.entity.Openings_in_a_structural_element_frame;
import com.example.simbirgo.entity.Structural_element_frame;
import com.example.simbirgo.repository.OpeningsRepository;
import com.example.simbirgo.repository.Openings_in_a_structural_element_frameRepository;
import com.example.simbirgo.repository.Structural_element_frameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OpeningsInAStructuralElementFrameService {

    @Autowired
    Openings_in_a_structural_element_frameRepository openingsInAStructuralElementFrameRepository;

    @Autowired
    Structural_element_frameRepository structuralElementFrameRepository;

    @Autowired
    OpeningsRepository openingsRepository;

    @Autowired
    StructuralElementFrameService structuralElementFrameService;

    public  Openings_in_a_structural_element_frame openingsInAStructuralElementFrame(OpeningsStructuralElementFrameDto structuralElementFrameDto) {
        List<Openings> openingsList = new ArrayList<>();
        structuralElementFrameDto.getOpeningsDtos().forEach(openings -> {
            Openings openings1 = new Openings();
            openings1.setHeight(openings.getHeight());
            openings1.setWidth(openings.getWidth());
            openings1.setType(openings.getType());
            openingsRepository.saveAndFlush(openings1);
            openingsList.add(openings1);
        });
        Openings_in_a_structural_element_frame openingsInAStructuralElementFrame = new Openings_in_a_structural_element_frame();
        Structural_element_frame structuralElementFrame = structuralElementFrameService.addElementFrame(structuralElementFrameDto.getElementFrame());
        openingsInAStructuralElementFrame.setOpenings(openingsList);
        structuralElementFrameRepository.saveAndFlush(structuralElementFrame);
        return openingsInAStructuralElementFrameRepository.saveAndFlush(openingsInAStructuralElementFrame);
    }
}
