package com.mastercloudapps.practica1.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String title;
    private String summary;
    private String author;
    private String publishingHouse;
    private int publicationYear;

    @OneToMany
    List<Comment> comments;
}
