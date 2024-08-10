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
    private int weightMetric;



}
