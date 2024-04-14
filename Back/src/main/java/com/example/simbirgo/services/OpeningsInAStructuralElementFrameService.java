package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.dto.request.OpeningsDto;
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
        float Number_of_boards_for_openings = 0.0f;
        float deducting_the_area_of_openings = 0.0f;
        List<OpeningsDto> openingsDtos = structuralElementFrameDto.getOpeningsDtos();
        for (OpeningsDto openings : openingsDtos) {
            Openings openings1 = new Openings();
            openings1.setHeight(openings.getHeight());
            openings1.setWidth(openings.getWidth());
            openings1.setType(openings.getType());
            if (deducting_the_area_of_openings == 0.0) {
                deducting_the_area_of_openings = openings.getHeight() + openings.getWidth();
            } else {
                deducting_the_area_of_openings -= openings.getHeight() + openings.getWidth();
            }
            Number_of_boards_for_openings += (openings.getHeight() + openings.getWidth()) * openings.getAmount();
            openingsRepository.save(openings1);
            openingsList.add(openings1);
        }
        Openings_in_a_structural_element_frame openingsInAStructuralElementFrame = new Openings_in_a_structural_element_frame();
        Structural_element_frame structuralElementFrame = structuralElementFrameService.addElementFrame(structuralElementFrameDto.getElementFrame(), Number_of_boards_for_openings, deducting_the_area_of_openings);
        openingsInAStructuralElementFrame.setStructural_element_frame_id(structuralElementFrame);
        openingsInAStructuralElementFrame.setOpenings(openingsList);
        return openingsInAStructuralElementFrameRepository.save(openingsInAStructuralElementFrame);
    }
}
