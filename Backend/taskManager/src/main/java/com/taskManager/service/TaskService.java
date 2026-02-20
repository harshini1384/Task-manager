package com.taskManager.service;

import com.taskManager.entity.*;
import com.taskManager.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repo;

    public Task add(Task task) {
        return repo.save(task);
    }

    public Page<Task> getAll(Pageable pageable) {
        return repo.findAll(pageable);
    }

    public Task updateStatus(Long id, Status status) {
        Task task = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setStatus(status);
        return repo.save(task);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Page<Task> filter(Status status, Pageable pageable) {
        return repo.findByStatus(status, pageable);
    }

    public Page<Task> search(String title, Pageable pageable) {
        return repo.findByTitleContainingIgnoreCase(title, pageable);
    }
}