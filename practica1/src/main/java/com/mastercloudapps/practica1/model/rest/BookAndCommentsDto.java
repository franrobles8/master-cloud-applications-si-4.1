package com.mastercloudapps.practica1.model.rest;

import java.util.Collection;

import com.mastercloudapps.practica1.model.Book;
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
	
    private Collection<CommentWithUserDto> comments;
}
