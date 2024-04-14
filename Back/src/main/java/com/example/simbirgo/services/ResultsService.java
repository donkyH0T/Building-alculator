package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.entity.Material_characteristics;
import com.example.simbirgo.entity.Results;
import com.example.simbirgo.repository.Material_characteristicsRepository;
import com.example.simbirgo.repository.Measurement_unitsRepository;
import com.example.simbirgo.repository.Price_listsRepository;
import com.example.simbirgo.repository.ResultsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;

@Service
public class ResultsService {


    @Autowired
    Material_characteristicsRepository materialCharacteristicsRepository;

    @Autowired
    Measurement_unitsRepository measurementUnitsRepository;

    @Autowired
    Price_listsRepository priceListsRepository;

    @Autowired
    ResultsRepository resultsRepository;

    public List<Results> getResultsElementFrame(ElementFrameDto elementFrameDto, Float Number_of_boards_for_openings, Float deducting_the_area_of_openings) {
        Float Exterior_Wall_Area = elementFrameDto.getAmountFloor() * elementFrameDto.getPerimeterOfExternalWalls() * elementFrameDto.getFloor_height();
        Float Interior_Wall_Area = elementFrameDto.getAmountFloor() * elementFrameDto.getFloor_height() * elementFrameDto.getInternalWallLength();
        Long Number_of_boards_for_external_posts = Math.round (elementFrameDto.getPerimeterOfExternalWalls() / 0.6 + 1);
        Float Number_of_boards_for_the_base = elementFrameDto.getPerimeterOfExternalWalls() * 2 / 3;
        Float Total_number_of_boards_for_exterior_walls = Number_of_boards_for_external_posts + Number_of_boards_for_the_base + Math.round(Number_of_boards_for_openings);
        Float Width_of_the_board_on_the_exterior_walls = elementFrameDto.getExternalWallThickness();
        Double Volume_of_boards_on_exterior_walls = Total_number_of_boards_for_exterior_walls * (Width_of_the_board_on_the_exterior_walls / 1000) * 0.05 * 3;
        Double OSB_Area = Exterior_Wall_Area * 2 * 1.15;
        Double Vapor_barrier_area = Exterior_Wall_Area * 1.15;
        Double Windbreak_area = Vapor_barrier_area;
        Double Area_of_insulation_on_external_walls = Exterior_Wall_Area * 1.1 - (deducting_the_area_of_openings);
        Float Insulation_thickness = elementFrameDto.getExternalWallThickness();
        Double Insulation_volume = Area_of_insulation_on_external_walls * Insulation_thickness / 1000;
        Double Number_of_boards_for_internal_racks = elementFrameDto.getInternalWallLength() / 0.6;
        Double Total_number_of_boards_for_interior_walls = Insulation_volume + Number_of_boards_for_openings;
        Float Width_of_board_to_internal_posts = elementFrameDto.getInternalWallThickness();
        Double Volume_of_boards_on_internal_posts = Total_number_of_boards_for_interior_walls + Width_of_board_to_internal_posts;
        Double OSB_Inner_Area = Interior_Wall_Area * 2 * 1.15;
        Double Number_of_floor_joists = Total_number_of_boards_for_exterior_walls * 0.7;
        Double Width_of_board_on_floor_joists = Double.parseDouble(elementFrameDto.getOverlapThickness());
        Double Volume_of_boards_for_floors = Number_of_floor_joists * 0.05 * Width_of_board_on_floor_joists / 1000 * 6;
        Double OSB_Overlap_Area = elementFrameDto.getBaseArea() * 1.15 * 2 * 2;
        Double Vapor_Waterproofing_Area_Overlap = elementFrameDto.getBaseArea() * 1.15;
        Double Windbreak_Area_Overlap = elementFrameDto.getBaseArea() * 1.15;
        Double Floor_insulation_area =  elementFrameDto.getBaseArea() *2*1.1;
        Double Thickness_of_floor_insulation = Double.parseDouble(elementFrameDto.getOverlapThickness());
        Double Volume_of_floor_insulation = (Floor_insulation_area * Thickness_of_floor_insulation)/1000;
        List<Results> resultsList = new ArrayList<>();
        result(Volume_of_boards_on_exterior_walls, resultsList, materialCharacteristicsRepository.findById(3L).get());
        result(Insulation_volume, resultsList, materialCharacteristicsRepository.findById(20L).get());
        result(OSB_Area, resultsList, materialCharacteristicsRepository.findById(12L).get());
        result(Vapor_barrier_area, resultsList, materialCharacteristicsRepository.findById(22L).get());
        result(Vapor_barrier_area, resultsList, materialCharacteristicsRepository.findById(26L).get());
        result(Volume_of_boards_on_exterior_walls, resultsList, materialCharacteristicsRepository.findById(1L).get());
        result(OSB_Area, resultsList, materialCharacteristicsRepository.findById(12L).get());
        result(Volume_of_boards_for_floors, resultsList, materialCharacteristicsRepository.findById(8L).get());
        result(Volume_of_floor_insulation, resultsList, materialCharacteristicsRepository.findById(19L).get());
        result(OSB_Overlap_Area, resultsList, materialCharacteristicsRepository.findById(12L).get());
        result(Vapor_Waterproofing_Area_Overlap, resultsList, materialCharacteristicsRepository.findById(22L).get());
        result(Windbreak_Area_Overlap, resultsList, materialCharacteristicsRepository.findById(26L).get());
        return resultsList;
    }

    private void result(Double amount, List<Results> resultsList, Material_characteristics material_characteristics) {
        Results results = new Results();
        results.setMaterial(material_characteristics.getName());
        results.setAmount(amount);
        Double price = amount * priceListsRepository.findById(material_characteristics.getId()).get().getPurchase_price();
        results.setPrice(price);
        results.setFull_price(price);
        results.setMeasurement_unit(material_characteristics.getMeasurementUnit().getMeasurement_units_name());
        results.setMaterial_characteristics_id(material_characteristics);
        resultsList.add(resultsRepository.save(results));
    }
}
