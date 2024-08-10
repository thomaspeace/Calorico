package com.calorico.calorico.models;

import com.calorico.calorico.models.enums.Gender;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "email")
    private Gender gender;

    @Column(name = "height_metric")
    private int height_metric;

    public User(String name, LocalDate dateOfBirth, Gender gender, int height_metric) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.height_metric = height_metric;
    }

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public int getHeight_metric() {
        return height_metric;
    }

    public void setHeight_metric(int height_metric) {
        this.height_metric = height_metric;
    }

}
