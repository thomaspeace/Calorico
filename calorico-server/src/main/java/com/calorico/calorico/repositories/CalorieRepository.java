package com.calorico.calorico.repositories;

import com.calorico.calorico.models.Calorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CalorieRepository extends JpaRepository<Calorie, Long> {

    List<Calorie> findByUserId (long userId);

}
