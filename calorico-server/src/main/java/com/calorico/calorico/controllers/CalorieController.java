package com.calorico.calorico.controllers;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.services.CalorieService;
import com.calorico.calorico.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/calories")
public class CalorieController {

    @Autowired
    private CalorieService calorieService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Calorie>> getAllCalories() {
        List<Calorie> calories = calorieService.getAllCalories();
        return ResponseEntity.ok(calories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Calorie> getCalorieById(@PathVariable Long id) {
        Optional<Calorie> calorie = calorieService.getCalorieById(id);
        if (calorie.isPresent()) {
            return ResponseEntity.ok(calorie.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Calorie>> getCaloriesByUserId(@PathVariable Long userId) {
        if (userService.getUserById(userId).isPresent()) {
            List<Calorie> calories = calorieService.getCaloriesByUserId(userId);
            return ResponseEntity.ok(calories);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
