package com.calorico.calorico.controllers;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.services.CalorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/calories")
public class CalorieController {

    @Autowired
    private CalorieService calorieService;

    @GetMapping
    public ResponseEntity<List<Calorie>> getAllCalories() {
        List<Calorie> calories = calorieService.getAllCalories();
        return ResponseEntity.ok(calories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Calorie> getCalorieById(Long id) {
        Optional<Calorie> calorie = calorieService.getCalorieById(id);
        if (calorie.isPresent()) {
            return ResponseEntity.ok(calorie.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
