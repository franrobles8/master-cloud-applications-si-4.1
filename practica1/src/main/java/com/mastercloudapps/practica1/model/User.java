package com.mastercloudapps.practica1.model;

import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Collection;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 8569034302475351170L;
    private @Id String nickname;
    private @Email String email;

    @OneToMany(mappedBy="user", cascade= CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Collection<Comment> comments;
}
