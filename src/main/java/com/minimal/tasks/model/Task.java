package com.minimal.tasks.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode
@Table(name = "tasks")
public class Task {
    @Id
    private String taskid;

    private String taskTitle;
    private String taskDesc;

    @ManyToOne()
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
