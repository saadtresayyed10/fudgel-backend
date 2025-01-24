package com.minimal.tasks.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "users")
public class Users {
    @Id
    private String userid;

    private String firstname;
    private String lastname;
    private String email;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private List<Tasks> tasks;
}
