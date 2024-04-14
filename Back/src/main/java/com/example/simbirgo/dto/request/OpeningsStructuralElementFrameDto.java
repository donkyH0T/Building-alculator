package com.example.simbirgo.dto.request;

import com.example.simbirgo.entity.Openings;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
public class OpeningsStructuralElementFrameDto {
    private ElementFrameDto elementFrame;
    private List<OpeningsDto> openingsDtos = new ArrayList<>();
}
