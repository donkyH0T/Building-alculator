package com.example.simbirgo.dto.request;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CalculationDto {
    private String address_object_constractions;
    private OpeningsStructuralElementFrameDto openingsStructuralElementFrameDtos = new OpeningsStructuralElementFrameDto();
}
