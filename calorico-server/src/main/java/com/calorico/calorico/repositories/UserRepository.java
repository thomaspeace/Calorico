package com.calorico.calorico.repositories;

import com.calorico.calorico.models.Calorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Calorie, Long> {
}
