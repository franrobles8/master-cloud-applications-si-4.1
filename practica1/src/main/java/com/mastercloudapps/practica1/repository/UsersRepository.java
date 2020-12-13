package com.mastercloudapps.practica1.repository;

import com.mastercloudapps.practica1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<User, String> {
}
