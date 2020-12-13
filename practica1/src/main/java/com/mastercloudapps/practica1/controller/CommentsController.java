package com.mastercloudapps.practica1.controller;

import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.model.rest.CommentsDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Tag(name="comment")
public interface CommentsController {

    @Operation(
            summary = "Add a new comment to a book",
            description = "Add a new comment to a book",
            tags = { "book" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Comment successfully created",
                    content = @Content(schema = @Schema(implementation = Comment.class))),
            @ApiResponse(responseCode = "400", description = "Bad request"),
            @ApiResponse(responseCode = "404", description = "Book not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error") })
    @PostMapping(value="/{id}")
    ResponseEntity<String> postComment(@PathVariable(value = "id") String bookId,
                                       @RequestBody CommentsDto commentDto);

    @Operation(
            summary = "Deletes a comment for a specific book",
            description = "Deletes a comment for a specific book",
            tags = { "book" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Comment successfully deleted",
                    content = @Content(schema = @Schema(implementation = Void.class))),
            @ApiResponse(responseCode = "404", description = "Comment not found") })
    @DeleteMapping(value="/{commentId}")
    public ResponseEntity<Void> deleteComment(
            @PathVariable(value="commentId") String commentId);


}
