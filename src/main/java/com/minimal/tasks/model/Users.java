package com.minimal.tasks.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class Users {
    @Id
    private String userid;

    private String firstname;
    private String lastname;
    private String email;
}