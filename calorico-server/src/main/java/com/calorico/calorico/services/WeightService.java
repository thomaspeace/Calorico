package com.calorico.calorico.services;

import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.models.WeightDTO;
import com.calorico.calorico.repositories.UserRepository;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Weight> getAllWeights() {
        return weightRepository.findAll();
    }

    public Optional<Weight> getWeightById(Long id) {
        return weightRepository.findById(id);
    }

    public List<Weight> getWeightsByUserId (Long userId) {
        return weightRepository.findByUserId(userId);
    }

    public Weight createWeight(WeightDTO weightDTO) {
        Optional<User> userOptional = userRepository.findById(weightDTO.getUserId());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Weight newWeight = new Weight();
            newWeight.setUser(user);
            newWeight.setDateWeighed(weightDTO.getDateWeighed());
            newWeight.setWeightMetric(weightDTO.getWeightMetric());
            return weightRepository.save(newWeight);
        } else {
            throw new Error("User not found with ID: " + weightDTO.getUserId());
        }
    }

}
