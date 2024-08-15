package com.calorico.calorico.services;

import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.repositories.UserRepository;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WeightRepository weightRepository;

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

}
