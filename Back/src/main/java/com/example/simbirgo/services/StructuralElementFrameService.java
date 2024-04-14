package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.entity.Structural_element_frame;
import com.example.simbirgo.repository.Structural_element_frameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StructuralElementFrameService {

    @Autowired
    Structural_element_frameRepository structural_element_frameRepository;

    @Autowired
    ResultsService resultsService;

    public Structural_element_frame addElementFrame(ElementFrameDto elementFrameDto, Float Number_of_boards_for_openings, Float deducting_the_area_of_openings) {
        Structural_element_frame structuralElementFrame = elementFrameDto.toStructural_element_frame();
        structuralElementFrame.setResults(resultsService.getResultsElementFrame(elementFrameDto, Number_of_boards_for_openings, deducting_the_area_of_openings));
        return structural_element_frameRepository.save(structuralElementFrame);
    }
}
