package com.mastercloudapps.practica1.service;

import com.mastercloudapps.practica1.exception.NoBookException;
import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.repository.BooksRepository;
import com.mastercloudapps.practica1.repository.CommentsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsService {

    private CommentsRepository commentsRepository;
    private BooksRepository booksRepository;

    public CommentsService(CommentsRepository commentsRepository, BooksRepository booksRepository) {
        this.commentsRepository = commentsRepository;
        this.booksRepository = booksRepository;
    }

    public List<Comment> findAllComments(Long bookId) {
        Book book = booksRepository.findById(bookId).orElseThrow(NoBookException::new);
        return commentsRepository.findByBook(book);
    }

    public Long save(Comment comment) {
        return commentsRepository.save(comment).getId();
    }

    public void delete(Long commentId) {
        commentsRepository.deleteById(commentId);
    }
}
