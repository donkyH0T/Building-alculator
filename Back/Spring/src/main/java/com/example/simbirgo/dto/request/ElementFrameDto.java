package com.example.simbirgo.dto.request;

import com.example.simbirgo.entity.Structural_element_frame;
import lombok.Data;

import javax.persistence.Column;

@Data
public class ElementFrameDto {
    Integer amountFloor;
    Integer floorNumber;
    Float perimeterOfExternalWalls;
    Float baseArea;
    Float externalWallThickness;
    Float internalWallLength;
    Float internalWallThickness;
    String osbExternalWall;
    String steamWaterproofingExternalWall;
    String windscreenExternalWall;
    String overlapThickness;
    String insulationExternalWall;
    String osbThickness;
    String steamWaterproofingThickness;
    String windscreenThickness;
    String insulationThickness;
    String osbInternalWal;
    
    Integer openingsAmount;

    public Structural_element_frame toStructural_element_frame(){
        Structural_element_frame frame = new Structural_element_frame();
        frame.setAmount_floor(amountFloor);
        frame.setFloor_number(floorNumber);
        frame.setPerimeter_of_external_walls(perimeterOfExternalWalls);
        frame.setBase_area(baseArea);
        frame.setExternal_wall_thickness(externalWallThickness);
        frame.setInternal_wall_length(internalWallLength);
        frame.setInternal_wall_thickness(internalWallThickness);
        frame.setOSB_external_wall(osbExternalWall);
        frame.setSteam_waterproofing_external_wall(steamWaterproofingExternalWall);
        frame.setWindscreen_external_wall(windscreenExternalWall);
        frame.setInsulation_external_wall(insulationExternalWall);
        frame.setOverlap_thickness(overlapThickness);
        frame.setOSB_thickness(osbThickness);
        frame.setSteam_waterproofing_thickness(steamWaterproofingThickness);
        frame.setWindscreen_thickness(windscreenThickness);
        frame.setInsulation_thickness(insulationThickness);
        frame.setOSB_internal_wal(osbInternalWal);
        return frame;
    }
}
