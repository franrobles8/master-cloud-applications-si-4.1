package com.mastercloudapps.practica1.service;

import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.repository.CommentsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsService {

    private CommentsRepository commentsRepository;

    public CommentsService(CommentsRepository commentsRepository) {
        this.commentsRepository = commentsRepository;
    }

    public List<Comment> findAllComments(String book_id) {
        return commentsRepository.findByBook(book_id);
    }

    public String save(Comment comment) {
        return commentsRepository.save(comment).getId();
    }

    public void delete(String commentId) {
        commentsRepository.deleteById(commentId);
    }
}
