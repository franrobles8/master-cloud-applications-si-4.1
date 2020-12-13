package com.mastercloudapps.practica1.model.rest;

import java.util.List;

import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookAndCommentsDto {

    private Book book;
	
    private List<Comment> comments;
}
