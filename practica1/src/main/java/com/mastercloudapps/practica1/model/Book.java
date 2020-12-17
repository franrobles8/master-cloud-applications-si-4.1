package com.mastercloudapps.practica1.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Collection;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = -8021402023258668664L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String summary;
    private String author;
    private String publishingHouse;
    private int publicationYear;

    @OneToMany(mappedBy="book", cascade= CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    Collection<Comment> comments;
}
