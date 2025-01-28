package com.minimal.tasks.controller;

import com.minimal.tasks.model.User;
import com.minimal.tasks.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public ResponseEntity<User> addUserToDB(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping("/user")
    public String checkingRoute() {
        return "Route is working";
    }
}
