package com.minimal.tasks.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;


@Entity
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Table(name = "tasks")
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID taskid;

    private String tasktitle;
    private String taskdesc;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;

}
