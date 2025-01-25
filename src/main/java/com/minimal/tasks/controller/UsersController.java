package com.minimal.tasks.controller;

import com.minimal.tasks.model.Users;
import com.minimal.tasks.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/users")
    public ResponseEntity<Users> createUser(@RequestBody Users users) {
        return ResponseEntity.ok(usersRepository.save(users));
    }

}
