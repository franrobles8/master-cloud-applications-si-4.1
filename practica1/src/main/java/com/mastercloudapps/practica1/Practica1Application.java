package com.mastercloudapps.practica1;

import com.mastercloudapps.practica1.model.Book;
import com.mastercloudapps.practica1.model.Comment;
import com.mastercloudapps.practica1.model.User;
import com.mastercloudapps.practica1.repository.BooksRepository;
import com.mastercloudapps.practica1.repository.CommentsRepository;
import com.mastercloudapps.practica1.repository.UsersRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Practica1Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica1Application.class, args);
	}

	@Bean
	public CommandLineRunner demo(BooksRepository booksRepository, UsersRepository usersRepository, CommentsRepository commentsRepository) {
		
		return (args) -> {

			Book book = booksRepository.save(new Book( null, "title", "summary", "author", "publishingHouse", 2019, null));
			User user = usersRepository.save(new User("pdparla", "pd.parla@alumnos.urjc.es", null));
			commentsRepository.save(new Comment(null, "Texto comentario", 0.2, user, book));
		};
	}

}
