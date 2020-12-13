package com.mastercloudapps.practica1.model;

import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private @Id String nickname;
    private @Email String email;

    @OneToMany(mappedBy="user", cascade= CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;
}
