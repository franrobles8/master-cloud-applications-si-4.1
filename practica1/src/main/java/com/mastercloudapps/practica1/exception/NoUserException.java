package com.mastercloudapps.practica1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="User not found")
public class NoUserException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = -4111802484216075450L;
}
