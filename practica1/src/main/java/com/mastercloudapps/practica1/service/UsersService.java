package com.mastercloudapps.practica1.service;

import com.mastercloudapps.practica1.exception.NoUserException;
import com.mastercloudapps.practica1.exception.UserAlreadyExistsException;
import com.mastercloudapps.practica1.exception.UserWithCommentsException;
import com.mastercloudapps.practica1.model.User;
import com.mastercloudapps.practica1.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
public class UsersService {

    UsersRepository usersRepository;

    public UsersService (UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public Optional<User> findById(String nickname) {
        return usersRepository.findById(nickname);
    }

    public List<User> findAll() {
        return usersRepository.findAll();
    }

    public String save(User user) {
        Optional<User> findUser = usersRepository.findById(user.getNickname());
        if (findUser.isPresent())
            throw new UserAlreadyExistsException();
        return usersRepository.save(user).getNickname();
    }

    @Transactional
    public void updateEmail(User user) {
        usersRepository.findById(user.getNickname()).orElseThrow(NoUserException::new);
        usersRepository.updateEmail(user);
    }

    public void delete(String nickname) {
        User user = usersRepository.findById(nickname).orElseThrow(NoUserException::new);
        if (user.getComments().size() != 0){
            throw new UserWithCommentsException();
        }
        usersRepository.delete(user);
    }
}
