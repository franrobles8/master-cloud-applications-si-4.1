package com.mastercloudapps.practica1.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Comment implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = -5476831841312009177L;

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private @Setter(AccessLevel.PROTECTED) Long id;
    private String text;

    @Min(value = 0L, message = "The score should be positive")
    @Max(value = 5L, message = "The score should be five or less")
    private double score;

    @ManyToOne
    @JoinColumn(name = "nickname")
    @JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name = "book_id")
    @JsonIgnore
    private Book book;
}
