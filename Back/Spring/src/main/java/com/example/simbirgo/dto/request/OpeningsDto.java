package com.example.simbirgo.dto.request;

import lombok.Data;

import javax.persistence.Column;

@Data
public class OpeningsDto {
    private String type;
    private Float width;
    private Float height;
    private Integer amount;
}
