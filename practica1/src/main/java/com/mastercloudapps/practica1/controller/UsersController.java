package com.mastercloudapps.practica1.controller;


import com.mastercloudapps.practica1.exception.UserWithCommentsException;
import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.model.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "user")
public interface UsersController {

    @Operation(
            summary = "Find all users in the system",
            description = "Find all users in the system",
            tags = { "user" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = User.class)))),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @GetMapping(value="/")
    public ResponseEntity<List<User>> getUsers();

    @Operation(
            summary = "Find a user in the system",
            description = "Find a user in the system",
            tags = { "user" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = User.class)))),
            @ApiResponse(responseCode = "404", description = "User not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @GetMapping(value="/{nickname}")
    public ResponseEntity<User> getUser(@PathVariable(value="nickname") String nickname);

    @Operation(
            summary = "Add a new user",
            description = "Add a new user",
            tags = { "user" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "User successfully created",
                    content = @Content(schema = @Schema(implementation = String.class))),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @PostMapping(value="/")
    public ResponseEntity<String> postUser(@RequestBody User user);

    @Operation(
            summary = "Update a user Email",
            description = "Update a user Email",
            tags = { "user" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User successfully updated",
                    content = @Content(schema = @Schema(implementation = String.class))),
            @ApiResponse(responseCode = "404", description = "User not exists"),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @PatchMapping(value="/")
    public ResponseEntity<String> updateEmail(@RequestBody User user);

    @Operation(
            summary = "Delete a user",
            description = "Delete a user",
            tags = { "user" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "User successfully deleted",
                    content = @Content(schema = @Schema(implementation = User.class))),
            @ApiResponse(responseCode = "400", description = "User has comments"),
            @ApiResponse(responseCode = "404", description = "User not exists"),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @DeleteMapping(value="/{nickname}")
    public ResponseEntity<User> deleteEmail(@PathVariable(value="nickname") String nickname) throws UserWithCommentsException;

    @Operation(
            summary = "Query for user comments",
            description = "Query for user comments",
            tags = { "user" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comments successfully retrieved",
                    content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "User not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @GetMapping(value="/{nickname}/comments")
    public ResponseEntity<List<Comment>> queryComments(@PathVariable(value="nickname") String nickname);
}
