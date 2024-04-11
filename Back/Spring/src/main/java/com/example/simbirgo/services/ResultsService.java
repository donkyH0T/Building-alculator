package com.example.simbirgo.services;

import com.example.simbirgo.dto.request.ElementFrameDto;
import com.example.simbirgo.entity.Material_characteristics;
import com.example.simbirgo.entity.Results;
import com.example.simbirgo.repository.Material_characteristicsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.List;

@Service
public class ResultsService {


    @Autowired
    Material_characteristicsRepository materialCharacteristicsRepository;

    public List<Results> getResultsElementFrame(ElementFrameDto elementFrameDto) {
        Results results = new Results();
        results.setMaterial("Доска");
        results.setAmount(1);
        results.setPrice(1.23f);
        results.setMeasurement_unit("2");
        results.setFull_price(21.f);
        results.setMaterial_characteristics_id(null);
        return null;
    }
}
