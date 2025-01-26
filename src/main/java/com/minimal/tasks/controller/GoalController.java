package com.minimal.tasks.controller;

import com.minimal.tasks.model.Goal;
import com.minimal.tasks.repository.GoalRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GoalController {
    private GoalRepository goalRepository;

    @PostMapping("/goal")
    public ResponseEntity<Goal> addGoal(@RequestBody Goal goal) {
        return ResponseEntity.ok(goalRepository.save(goal));
    }
}
