package com.mastercloudapps.practica1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="Book not found")
public class NoBookException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = -3218930697143095269L;
}
