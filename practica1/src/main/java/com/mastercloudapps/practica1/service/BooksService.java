package com.mastercloudapps.practica1.service;


import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.repository.BooksRepository;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.Optional;

@Service
public class BooksService {

    BooksRepository booksRepository;

    public BooksService(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    public String save(Book book) {
        return this.booksRepository.save(book).getId();
    }

    public Collection<Book> findAll() {
        return this.booksRepository.findAll();
    }

    public Optional<Book> findById(String id) {
        return this.booksRepository.findById(id);
    }

    public void delete(String id) {
            this.booksRepository.deleteById(id);
    }
    
}
