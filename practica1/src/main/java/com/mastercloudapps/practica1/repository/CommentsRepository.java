package com.mastercloudapps.practica1.repository;

import com.mastercloudapps.practica1.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepository extends JpaRepository<Comment, String> {

    public List<Comment> findByBook(String book);
    public List<Comment> findByUser(String user);
}
