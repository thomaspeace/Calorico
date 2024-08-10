package com.calorico.calorico.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "calories")
public class Calorie {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "date_consumed")
    private LocalDate dateConsumed;

    @Column(name = "calories_consumed")
    private int caloriesConsumed;

    public Calorie(User user, LocalDate dateConsumed, int caloriesConsumed) {
        this.user = user;
        this.dateConsumed = dateConsumed;
        this.caloriesConsumed = caloriesConsumed;
    }

    public Calorie() {
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
