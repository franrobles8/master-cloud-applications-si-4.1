package com.mastercloudapps.practica1.controller;

import com.mastercloudapps.practica1.exception.NoUserException;
import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.model.User;
import com.mastercloudapps.practica1.model.rest.UserDto;
import com.mastercloudapps.practica1.service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users/")
public class UsersControllerImpl implements UsersController {

    private final UsersService usersService;

    public UsersControllerImpl(UsersService usersService) {
        this.usersService = usersService;
    }

    @Override
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok().body(usersService.findAll());
    }

    @Override
    public ResponseEntity<User> getUser(String nickname) {
        return ResponseEntity.ok().body(usersService.findById(nickname).orElseThrow(NoUserException::new));
    }

    @Override
    public ResponseEntity<String> postUser(User user) {
        return ResponseEntity.ok().body(usersService.save(user));
    }

    @Override
    public ResponseEntity<String> updateEmail(User user) {
        return ResponseEntity.ok().body(usersService.update(user));
    }

    @Override
    public ResponseEntity<User> deleteEmail(String nickname) {
        usersService.delete(nickname);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<List<Comment>> queryComments(String nickname) {
        return ResponseEntity.ok().body(usersService.findById(nickname).orElseThrow(NoUserException::new).getComments());
    }
}
