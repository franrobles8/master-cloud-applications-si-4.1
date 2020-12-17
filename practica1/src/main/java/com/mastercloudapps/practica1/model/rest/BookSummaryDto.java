package com.mastercloudapps.practica1.model.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BookSummaryDto {
    
    private Long id;
    private String title;
}
