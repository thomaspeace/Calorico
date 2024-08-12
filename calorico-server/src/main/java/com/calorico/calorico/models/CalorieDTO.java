package com.calorico.calorico.models;

import java.time.LocalDate;

public class CalorieDTO {

    public Long userId;
    public LocalDate dateConsumed;
    public int caloriesConsumed;

    public CalorieDTO(Long userId, LocalDate dateConsumed, int caloriesConsumed) {
        this.userId = userId;
        this.dateConsumed = dateConsumed;
        this.caloriesConsumed = caloriesConsumed;
    }

    public CalorieDTO() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDate getDateConsumed() {
        return dateConsumed;
    }

    public void setDateConsumed(LocalDate dateConsumed) {
        this.dateConsumed = dateConsumed;
    }

    public int getCaloriesConsumed() {
        return caloriesConsumed;
    }

    public void setCaloriesConsumed(int caloriesConsumed) {
        this.caloriesConsumed = caloriesConsumed;
    }
}
