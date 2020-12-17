package com.mastercloudapps.practica1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.FORBIDDEN, reason="User already exists")
public class UserAlreadyExistsException extends RuntimeException{

    /**
     *
     */
    private static final long serialVersionUID = 1249909602906970137L;
    
}
