package com.calorico.calorico.controllers;

import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.services.WeightService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/weights")
public class WeightController {

    @Autowired
    private WeightService weightService;

    @GetMapping
    public ResponseEntity<List<Weight>> getAllUsers(){
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
        List<Weight> weights = weightService.getWeightsByUserId(userId);
        return ResponseEntity.ok(weights);
    }
}
