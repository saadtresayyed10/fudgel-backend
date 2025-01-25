package com.minimal.tasks.controller;

import com.minimal.tasks.model.User;
import com.minimal.tasks.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepo userRepo;

    @GetMapping("/users")
    public String getUser() {
        return "Hello User";
    }

    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return ResponseEntity.ok(userRepo.save(user));
    }
}
