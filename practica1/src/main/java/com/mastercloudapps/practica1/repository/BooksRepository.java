package com.mastercloudapps.practica1.repository;

import com.mastercloudapps.practica1.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Book, String> {
}
