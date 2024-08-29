package com.calorico.calorico.services;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.models.CalorieDTO;
import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.repositories.CalorieRepository;
import com.calorico.calorico.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalorieService {

    @Autowired
    private CalorieRepository calorieRepository;

    @Autowired
    private UserService userService;

    public List<Calorie> getAllCalories(){
        return calorieRepository.findAll();
    }

    public Optional<Calorie> getCalorieById(Long id){
        return calorieRepository.findById(id);
    }

    public List<Calorie> getCaloriesByUserId (Long userId) {
        return calorieRepository.findByUserId(userId);
    }

    public Calorie createCalorie(CalorieDTO calorieDTO) {
        Optional<User> userOptional = userService.getUserById(calorieDTO.getUserId());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Calorie newCalorie = new Calorie();
            newCalorie.setUser(user);
            newCalorie.setDateConsumed(calorieDTO.getDateConsumed());
            newCalorie.setCaloriesConsumed(calorieDTO.getCaloriesConsumed());
            return calorieRepository.save(newCalorie);
        } else {
            throw new Error("User not found with ID: " + calorieDTO.getUserId());
        }
    }
}
