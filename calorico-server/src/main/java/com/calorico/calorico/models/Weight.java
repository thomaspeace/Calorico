package com.calorico.calorico.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "weights")
public class Weight {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "date_weighed")
    private LocalDate dateWeighed;

    @Column(name = "weight_metric")
    private double weightMetric;

    public Weight(User user, LocalDate dateWeighed, double weightMetric) {
        this.user = user;
        this.dateWeighed = dateWeighed;
        this.weightMetric = weightMetric;
    }

    public Weight() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
