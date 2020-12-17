package com.mastercloudapps.practica1.repository;

import com.mastercloudapps.practica1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<User, String> {
    
    @Modifying
    @Query("update User u set u.email = :#{#user.email} where u.nickname = :#{#user.nickname}")
    public void updateEmail(@Param("user") User user);
}
