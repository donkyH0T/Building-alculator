package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.CalculationDto;
import com.example.simbirgo.dto.request.OpeningsStructuralElementFrameDto;
import com.example.simbirgo.entity.Calculation;
import com.example.simbirgo.entity.Openings_in_a_structural_element_frame;
import com.example.simbirgo.entity.User;
import com.example.simbirgo.repository.StatusRepository;
import com.example.simbirgo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class CalculationService {

    @Autowired
    OpeningsInAStructuralElementFrameService openingsInAStructuralElementFrameService;

    @Autowired
    StatusRepository statusRepository;

    @Autowired
    UserRepository userRepository;


    public ResponseEntity<?> calculation(CalculationDto calculationDto) {
        Calculation calculation = new Calculation();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        User user = userRepository.findByLogin(currentUserName).get();
        calculation.setManager(user);
        Openings_in_a_structural_element_frame openings = openingsInAStructuralElementFrameService.openingsInAStructuralElementFrame(calculationDto.getOpeningsStructuralElementFrameDtos());
        calculation.setResults(openings.getStructural_element_frame_id().getResults());
        calculation.setAddress_object_constractions(calculationDto.getAddress_object_constractions());
        calculation.setСalculation_state_id(statusRepository.findById(3L).get());
        return ResponseEntity.ok(calculation);
    }
}
