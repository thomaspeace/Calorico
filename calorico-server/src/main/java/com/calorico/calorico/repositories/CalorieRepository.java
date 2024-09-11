package com.calorico.calorico.repositories;

import com.calorico.calorico.models.Calorie;
import org.springframework.cglib.core.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CalorieRepository extends JpaRepository<Calorie, Long> {

    List<Calorie> findByUserId (long userId);
    List<Calorie> findByUserIdOrderByDateConsumedDesc(long userId);
    Calorie findByUserIdAndDateConsumed(long userId, LocalDate date);
    boolean existsByUserIdAndDateConsumed(Long userId, LocalDate dateConsumed);
    Page<Calorie> findByUserIdOrderByDateConsumedDesc(Long userId, Pageable pageable);


}
