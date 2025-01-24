package com.minimal.tasks.repository;

import com.minimal.tasks.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, String> {
}
