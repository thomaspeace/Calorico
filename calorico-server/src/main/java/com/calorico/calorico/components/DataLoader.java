package com.calorico.calorico.components;

import com.calorico.calorico.repositories.CalorieRepository;
import com.calorico.calorico.repositories.UserRepository;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WeightRepository weightRepository;

    @Autowired
    CalorieRepository calorieRepository;

    public void run(ApplicationArguments args) throws Exception{



    }

}
