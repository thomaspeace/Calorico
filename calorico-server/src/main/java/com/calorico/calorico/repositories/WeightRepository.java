package com.calorico.calorico.repositories;

import com.calorico.calorico.models.Weight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeightRepository extends JpaRepository<Weight, Long> {

    List<Weight> findByUserId (long userId);

}
