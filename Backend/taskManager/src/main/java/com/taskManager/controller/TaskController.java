package com.taskManager.controller;

import com.taskManager.entity.*;
import com.taskManager.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
@CrossOrigin
public class TaskController {

    private final TaskService service;

    // Add
    @PostMapping
    public Task add(@Valid @RequestBody Task task) {
        return service.add(task);
    }

    // Get All
    @GetMapping
    public Page<Task> getAll(Pageable pageable) {
        return service.getAll(pageable);
    }

    // Update Status
    @PutMapping("/{id}/status")
    public Task updateStatus(@PathVariable Long id,
                             @RequestParam Status status) {
        return service.updateStatus(id, status);
    }

    // Delete
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    // Filter
    @GetMapping("/filter")
    public Page<Task> filter(@RequestParam Status status,
                             Pageable pageable) {
        return service.filter(status, pageable);
    }

    // Search
    @GetMapping("/search")
    public Page<Task> search(@RequestParam String title,
                             Pageable pageable) {
        return service.search(title, pageable);
    }
}