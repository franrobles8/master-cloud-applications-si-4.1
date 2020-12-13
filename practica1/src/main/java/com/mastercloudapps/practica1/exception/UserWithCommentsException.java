package com.mastercloudapps.practica1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.BAD_REQUEST, reason="User has comments")
public class UserWithCommentsException extends RuntimeException{
}
