package com.mastercloudapps.practica1.model.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
public class CommentsDto {

    @NotBlank
    private String nickname;

    private String text;

    @Min(value = 0L, message = "The score should be positive")
    @Max(value = 5L, message = "The score should be five or less")
	private double score;

}
