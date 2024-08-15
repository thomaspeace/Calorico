package com.calorico.calorico.controllers;

import com.calorico.calorico.models.Calorie;
import com.calorico.calorico.models.User;
import com.calorico.calorico.models.Weight;
import com.calorico.calorico.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/bmi")
    public ResponseEntity<Object> getUserBMI(@PathVariable Long id) {
        Object bmi = userService.calculateBmi(id);
        if (bmi == null){
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(bmi);
        }
    }

}
