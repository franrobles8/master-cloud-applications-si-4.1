package com.mastercloudapps.practica1.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.web.servlet.support.ServletUriComponentsBuilder.fromCurrentRequest;

import com.mastercloudapps.practica1.exception.NoBookException;
import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.rest.BookAndCommentsDto;
import com.mastercloudapps.practica1.model.rest.BookSummaryDto;
import com.mastercloudapps.practica1.service.BooksService;

import com.mastercloudapps.practica1.service.CommentsService;
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
    private final CommentsService commentsService;

    public BooksControllerImpl(BooksService booksService, CommentsService commentsService) {
        this.booksService = booksService;
        this.commentsService = commentsService;
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
        BookAndCommentsDto bookAndComments = new BookAndCommentsDto();
            bookAndComments.setBook(this.booksService.findById(id).orElseThrow(NoBookException::new));
            bookAndComments.setComments(this.commentsService.findAllComments(id));
            return ResponseEntity.status(HttpStatus.OK).body(bookAndComments);
    }

    @Override
    public ResponseEntity<String> postBook(Book book) {
        log.info("postBook method called");
        String id = booksService.save(book);
        URI location = fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
        return ResponseEntity.created(location).body(id);
    }


    
}
