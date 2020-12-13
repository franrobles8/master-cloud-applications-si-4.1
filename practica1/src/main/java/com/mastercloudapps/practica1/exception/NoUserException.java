package com.mastercloudapps.practica1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="User has comments")
public class NoUserException extends RuntimeException {
}
