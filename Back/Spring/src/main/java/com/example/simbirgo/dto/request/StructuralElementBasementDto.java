package com.example.simbirgo.dto.request;
import com.example.simbirgo.entity.Structural_element_basement;
import com.example.simbirgo.entity.Structural_element_frame;
import lombok.Data;

import javax.persistence.Column;
@Data
public class StructuralElementBasementDto {
    String concrete;
    String concrete_piles;
    Float internal_wall_length;
    Float perimeter_of_external_walls;
    public Structural_element_basement structuralElementBasement() {
        Structural_element_basement basement = new Structural_element_basement();
        basement.setConcrete(concrete);
        basement.setConcrete_piles(concrete_piles);
        basement.setInternal_wall_length(internal_wall_length);
        basement.setPerimeter_of_external_walls(perimeter_of_external_walls);
        return basement;
    }
}
