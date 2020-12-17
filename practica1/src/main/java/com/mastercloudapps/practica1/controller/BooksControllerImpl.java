package com.mastercloudapps.practica1.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static org.springframework.web.servlet.support.ServletUriComponentsBuilder.fromCurrentRequest;

import com.mastercloudapps.practica1.exception.NoBookException;
import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.rest.BookAndCommentsDto;
import com.mastercloudapps.practica1.model.rest.BookSummaryDto;
import com.mastercloudapps.practica1.model.rest.CommentWithUserDto;
import com.mastercloudapps.practica1.service.BooksService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/books/")
public class BooksControllerImpl implements BooksController {

    private final Logger log = LoggerFactory.getLogger(BooksControllerImpl.class);

    private final BooksService booksService;

    public BooksControllerImpl(BooksService booksService) {
        this.booksService = booksService;
    }

    @Override
    public ResponseEntity<List<BookSummaryDto>> getBooks() {
        log.info("getBooks method called");
        List<BookSummaryDto> books = new ArrayList<>();
        this.booksService.findAll().forEach(book -> books.add(new BookSummaryDto(book.getId(), book.getTitle())));
        return ResponseEntity.status(HttpStatus.OK).body(books);
    }

    @Override
    public ResponseEntity<BookAndCommentsDto> getBook(String id) {
        log.info("getBook method called");
        Book book = this.booksService.findById(Long.parseLong(id)).orElseThrow(NoBookException::new);
        Collection<CommentWithUserDto> commentsDto = new ArrayList<>();
        book.getComments().forEach(comment -> commentsDto.add(new CommentWithUserDto(comment.getUser().getNickname(), comment.getText(), comment.getUser().getEmail())));
        return ResponseEntity.status(HttpStatus.OK).body(new BookAndCommentsDto(book,commentsDto));
    }

    @Override
    public ResponseEntity<Long> postBook(Book book) {
        log.info("postBook method called");
        Long id = booksService.save(book);
        URI location = fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(location).body(id);
    }


    
}
