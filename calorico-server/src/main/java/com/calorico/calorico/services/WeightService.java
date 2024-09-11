package com.calorico.calorico.services;

import com.calorico.calorico.models.*;
import com.calorico.calorico.repositories.UserRepository;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
            if(weightRepository.existsByUserIdAndDateWeighed(weightDTO.getUserId(), weightDTO.getDateWeighed())) {
                throw new Error("Calorie reading already exists for " + weightDTO.getDateWeighed());
            }
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

    public Weight updateWeight(Long weightId, WeightDTO weightDTO) {
        Optional<Weight> weightOptional = weightRepository.findById(weightId);
        if (weightOptional.isPresent()) {
            Weight weightToUpdate = weightOptional.get();
            weightToUpdate.setDateWeighed(weightDTO.getDateWeighed());
            weightToUpdate.setWeightMetric(weightDTO.getWeightMetric());
            return weightRepository.save(weightToUpdate);
        } else {
            throw new Error("Calorie not found with ID: " + weightId);
        }
    }

    public Page<Weight> getPaginatedWeightsByUserId(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return weightRepository.findByUserIdOrderByDateWeighedDesc(userId, pageable);
    }

}
