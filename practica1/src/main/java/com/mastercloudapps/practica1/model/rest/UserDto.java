package com.mastercloudapps.practica1.model.rest;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;

@Getter
@Setter
@AllArgsConstructor
public class UserDto {

    private String nick;
    private @Email String email;
}
