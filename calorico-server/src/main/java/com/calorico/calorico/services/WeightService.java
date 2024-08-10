package com.calorico.calorico.services;

import com.calorico.calorico.models.Weight;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    public List<Weight> getAllWeights() {
        return weightRepository.findAll();
    }

    public Optional<Weight> getWeightById(Long id) {
        return weightRepository.findById(id);
    }

}
