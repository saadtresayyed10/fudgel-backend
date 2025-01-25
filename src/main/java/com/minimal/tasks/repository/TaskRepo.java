package com.minimal.tasks.repository;

import com.minimal.tasks.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo extends JpaRepository<Task, String> {
}
