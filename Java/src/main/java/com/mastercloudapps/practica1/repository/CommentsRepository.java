package com.mastercloudapps.practica1.repository;

import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepository extends JpaRepository<Comment, Long> {

    public List<Comment> findByBook(Book book);
    public List<Comment> findByUser(String user);
}
