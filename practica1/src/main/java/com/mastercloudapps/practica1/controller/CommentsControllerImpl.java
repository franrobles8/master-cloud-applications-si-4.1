package com.mastercloudapps.practica1.controller;

import com.mastercloudapps.practica1.exception.NoBookException;
import com.mastercloudapps.practica1.exception.NoUserException;
import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.model.User;
import com.mastercloudapps.practica1.model.rest.CommentsDto;
import com.mastercloudapps.practica1.service.BooksService;
import com.mastercloudapps.practica1.service.CommentsService;
import com.mastercloudapps.practica1.service.UsersService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

import static org.springframework.web.servlet.support.ServletUriComponentsBuilder.fromCurrentRequest;

@RestController
@RequestMapping(value = "/api/comments/")
public class CommentsControllerImpl implements CommentsController {

    private final Logger log = LoggerFactory.getLogger(CommentsControllerImpl.class);

    private final BooksService booksService;
    private final CommentsService commentsService;
    private final UsersService usersService;

    public CommentsControllerImpl(BooksService booksService, CommentsService commentsService, UsersService usersService) {
        this.booksService = booksService;
        this.commentsService = commentsService;
        this.usersService = usersService;
    }

    @Override
    public ResponseEntity<Long> postComment(String id, CommentsDto commentDto) {
        log.info("postComment method called");
        Book book = this.booksService.findById(Long.parseLong(id)).orElseThrow(NoBookException::new);
        Comment comment = new Comment();
        comment.setBook(book);
        comment.setText(commentDto.getText());
        comment.setScore(commentDto.getScore());
        User user = this.usersService.findById(commentDto.getNickname()).orElseThrow(NoUserException::new);
        comment.setUser(user);

        Long commentId = this.commentsService.save(comment);

        URI location = fromCurrentRequest().path("/{id}")
                .buildAndExpand(commentId).toUri();
        return ResponseEntity.created(location).body(commentId);
    }

    @Override
    public ResponseEntity<Void> deleteComment(String commentId) {
        log.info("deleteComment method called");
        commentsService.delete(Long.parseLong(commentId));
        return ResponseEntity.noContent().build();
    }
}
