package com.calorico.calorico.services;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.repositories.CalorieRepository;
import com.calorico.calorico.repositories.UserRepository;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WeightRepository weightRepository;

    @Autowired
    private CalorieRepository calorieRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Object calculateBmi (Long userId) {
        if (getUserById(userId).isPresent()) {
            Weight mostRecentWeight = weightRepository.findTopByUserIdOrderByDateWeighedDesc(userId);
            double height = getUserById(userId).get().getHeightMetric();
            return (mostRecentWeight.getWeightMetric() / (height * height))*10000;
        }
        return null;
    }


    public Object calculateMaintenanceCalories (Long userId) {

        if (getUserById(userId).isPresent()) {

            List<Weight> listOfUsersWeights = weightRepository.findByUserIdOrderByDateWeighedDesc(userId);
            List<Calorie> listOfUsersCalories = calorieRepository.findByUserIdOrderByDateConsumedDesc(userId);

            LocalDate cutoffDate = LocalDate.now().minusDays(8);

            List<Weight> workingWeights = new ArrayList<>();
            List<Calorie> workingCalories = new ArrayList<>();


            for (Calorie calorie : listOfUsersCalories) {
                for (Weight weight : listOfUsersWeights) {
                    if (calorie.getDateConsumed().equals(weight.getDateWeighed())) {
                        if (calorie.getDateConsumed().isAfter(cutoffDate)) {
                            workingCalories.add(calorie);
                            workingWeights.add(weight);
                        }
                    }
                }
            }

            if (workingWeights.size() < 2) {
                return null;  // not enough data to calculate maintenance calories
            }

            double totalCalories = 0;

            for (Calorie calorie : workingCalories) {
                totalCalories = totalCalories + calorie.getCaloriesConsumed();
            }

            double startWeight;
            double endWeight;

            if (workingWeights.size() >= 4) {
                startWeight = (workingWeights.get(workingWeights.size() - 1).getWeightMetric() +
                        workingWeights.get(workingWeights.size() - 2).getWeightMetric()) / 2;
                endWeight = (workingWeights.get(0).getWeightMetric() +
                        workingWeights.get(1).getWeightMetric()) / 2;
            } else {
                startWeight = workingWeights.get(workingWeights.size() - 1).getWeightMetric();
                endWeight = workingWeights.get(0).getWeightMetric();
            }


            double changeInWeight = endWeight - startWeight;
            double calorieDifference = changeInWeight * 7700 ;

            double maintenanceCalories = (totalCalories - calorieDifference) / workingCalories.size();

            return maintenanceCalories;
        }
        return null;
    }
}
