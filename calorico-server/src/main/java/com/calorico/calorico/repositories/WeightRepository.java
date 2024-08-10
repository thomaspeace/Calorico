package com.calorico.calorico.repositories;

import com.calorico.calorico.models.Weight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeightRepository extends JpaRepository<Weight, Long> {
}
