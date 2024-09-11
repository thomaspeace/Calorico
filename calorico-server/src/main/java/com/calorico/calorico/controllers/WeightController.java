package com.calorico.calorico.controllers;

import com.calorico.calorico.models.*;
import com.calorico.calorico.services.UserService;
import com.calorico.calorico.services.WeightService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/weights")
public class WeightController {

    @Autowired
    private WeightService weightService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Weight>> getAllUsers() {
        List<Weight> weights = weightService.getAllWeights();
        return ResponseEntity.ok(weights);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Weight>> getWeightById(@PathVariable Long id) {
        Optional<Weight> weight = weightService.getWeightById(id);
        if (weight.isPresent()) {
            return ResponseEntity.ok(weight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Weight>> getWeightsByUserId(@PathVariable Long userId) {
        if (userService.getUserById(userId).isPresent()) {
            List<Weight> weights = weightService.getWeightsByUserId(userId);
            return ResponseEntity.ok(weights);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Weight> createWeight(@RequestBody WeightDTO weightDTO) {
        try {
            Weight newWeight = weightService.createWeight(weightDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(newWeight);
        } catch (Error e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/update/{weightId}")
    public ResponseEntity<Weight> updateWeight(@PathVariable Long weightId, @RequestBody WeightDTO weightDTO) {
        try {
            Weight updatedWeight = weightService.updateWeight(weightId, weightDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(updatedWeight);
        } catch (Error e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/paginated/user/{userId}")
    public ResponseEntity<Page<Weight>> getPaginatedWeightsByUserId(@PathVariable Long userId, @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {

        if (userService.getUserById(userId).isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // User not found
        }

        Page<Weight> paginatedWeights = weightService.getPaginatedWeightsByUserId(userId, page, size);
        return ResponseEntity.ok(paginatedWeights);
    }
}
