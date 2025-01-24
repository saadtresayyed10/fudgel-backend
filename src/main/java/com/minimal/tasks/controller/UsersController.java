package com.minimal.tasks.controller;

import com.minimal.tasks.model.Users;
import com.minimal.tasks.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/user")
    public ResponseEntity<Users> saveUsers(@RequestBody Users users) {
        return ResponseEntity.ok(usersRepository.save(users));
    }

}
