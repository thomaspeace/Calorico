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

}
