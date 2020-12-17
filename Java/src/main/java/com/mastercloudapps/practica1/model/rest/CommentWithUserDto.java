package com.mastercloudapps.practica1.model.rest;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentWithUserDto {
    @NotBlank
    private String nickname;

    private String text;

    private @Email String email;
}
