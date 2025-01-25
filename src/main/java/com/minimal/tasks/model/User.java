package com.minimal.tasks.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@EqualsAndHashCode
@Table(name = "users")
public class User {
    @Id
    private String userid;

    private String firstName;
    private String lastName;
    private String email;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private List<Task> tasks;

}
