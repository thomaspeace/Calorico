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
            if(calorieRepository.existsByUserIdAndDateConsumed(calorieDTO.getUserId(), calorieDTO.getDateConsumed())) {
                throw new Error("Calorie reading already exists for " + calorieDTO.getDateConsumed());
            }
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

    public Calorie updateCalorie(Long calorieId, CalorieDTO calorieDTO) {
        Optional<Calorie> calorieOptional = calorieRepository.findById(calorieId);
        if (calorieOptional.isPresent()) {
            Calorie calorieToUpdate = calorieOptional.get();
            calorieToUpdate.setDateConsumed(calorieDTO.getDateConsumed());
            calorieToUpdate.setCaloriesConsumed(calorieDTO.getCaloriesConsumed());
            return calorieRepository.save(calorieToUpdate);
        } else {
            throw new Error("Calorie not found with ID: " + calorieDTO);
        }
    }
}
