package com.calorico.calorico.components;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.models.enums.Gender;
import com.calorico.calorico.repositories.CalorieRepository;
import com.calorico.calorico.repositories.UserRepository;
import com.calorico.calorico.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WeightRepository weightRepository;

    @Autowired
    CalorieRepository calorieRepository;

    public void run(ApplicationArguments args) throws Exception{

        User user1 = new User("John", "john.doe@email.com", LocalDate.of(1970,1,1), Gender.MALE, 190);

        Weight weight1 = new Weight(user1, LocalDate.now().minusDays(9),70.2);
        Weight weight2 = new Weight(user1, LocalDate.now().minusDays(8),69.7);
        Weight weight3 = new Weight(user1, LocalDate.now().minusDays(7),70.4);
        Weight weight4 = new Weight(user1, LocalDate.now().minusDays(6),69.8);
        Weight weight5 = new Weight(user1, LocalDate.now().minusDays(5),70.1);
        Weight weight6 = new Weight(user1, LocalDate.now().minusDays(4),69.9);
        Weight weight7 = new Weight(user1, LocalDate.now().minusDays(3),70.4);
        Weight weight8 = new Weight(user1, LocalDate.now().minusDays(2),69.5);
        Weight weight9 = new Weight(user1, LocalDate.now().minusDays(1),69.7);
        Weight weight10 = new Weight(user1, LocalDate.now(),69.9);

        Calorie calorie1 = new Calorie(user1, LocalDate.now().minusDays(9),2240);
        Calorie calorie2 = new Calorie(user1, LocalDate.now().minusDays(8),2400);
        Calorie calorie3 = new Calorie(user1, LocalDate.now().minusDays(7),2000);
        Calorie calorie4 = new Calorie(user1, LocalDate.now().minusDays(6),2125);
        Calorie calorie5 = new Calorie(user1, LocalDate.now().minusDays(5),2175);
        Calorie calorie6 = new Calorie(user1, LocalDate.now().minusDays(4),2150);
        Calorie calorie7 = new Calorie(user1, LocalDate.now().minusDays(3),2300);
        Calorie calorie8 = new Calorie(user1, LocalDate.now().minusDays(2),2100);
        Calorie calorie9 = new Calorie(user1, LocalDate.now().minusDays(1),2250);
        Calorie calorie10 = new Calorie(user1, LocalDate.now(),2080);

        userRepository.save(user1);

        weightRepository.save(weight1);
        weightRepository.save(weight2);
        weightRepository.save(weight3);
        weightRepository.save(weight4);
        weightRepository.save(weight5);
        weightRepository.save(weight6);
        weightRepository.save(weight7);
        weightRepository.save(weight8);
        weightRepository.save(weight9);
        weightRepository.save(weight10);

        calorieRepository.save(calorie1);
        calorieRepository.save(calorie2);
        calorieRepository.save(calorie3);
        calorieRepository.save(calorie4);
        calorieRepository.save(calorie5);
        calorieRepository.save(calorie6);
        calorieRepository.save(calorie7);
        calorieRepository.save(calorie8);
        calorieRepository.save(calorie9);
        calorieRepository.save(calorie10);

    }

}
