package com.minimal.tasks.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tasks")
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskid;

    private String taskname;
    private String taskdesc;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;
}
