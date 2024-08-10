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

    @Column(name = "height_centimetres")
    private int heightCentimetres;

}
