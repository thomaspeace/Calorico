package com.calorico.calorico.models;

import java.time.LocalDate;

public class WeightDTO {

    private long userId;
    private LocalDate dateWeighed;
    private double weightMetric;

    public WeightDTO(long userId, LocalDate dateWeighed, double weightMetric) {
        this.userId = userId;
        this.dateWeighed = dateWeighed;
        this.weightMetric = weightMetric;
    }

    public WeightDTO() {
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public LocalDate getDateWeighed() {
        return dateWeighed;
    }

    public void setDateWeighed(LocalDate dateWeighed) {
        this.dateWeighed = dateWeighed;
    }

    public double getWeightMetric() {
        return weightMetric;
    }

    public void setWeightMetric(double weightMetric) {
        this.weightMetric = weightMetric;
    }
}