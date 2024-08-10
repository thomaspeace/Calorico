package com.calorico.calorico.services;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.repositories.CalorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalorieService {

    @Autowired
    private CalorieRepository calorieRepository;

    public List<Calorie> getAllCalories() {
        return calorieRepository.findAll();
    }

    public Optional<Calorie> getCalorieById(Long id) {
        return calorieRepository.findById(id);
    }

}
