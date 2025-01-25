package com.minimal.tasks.repository;

import com.minimal.tasks.model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TasksRepository extends JpaRepository<Tasks, UUID> {
}
