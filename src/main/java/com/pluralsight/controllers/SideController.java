package com.pluralsight.controllers;

import com.pluralsight.models.Drink;
import com.pluralsight.models.Side;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class SideController {

    SideController() {
    }

    @GetMapping("/sides")
    Map<String, Double> getSides() {
        Map<String, Double> sideMap = new HashMap<>();
        for (Side side : Side.values()) {
            sideMap.put(side.getName(), side.getPrice());
        }
        return sideMap;
    }

    @GetMapping("/drinks")
    Map<String, Double> getDrinks() {
        Map<String, Double> sideMap = new HashMap<>();
        for (Drink drink : Drink.values()) {
            sideMap.put(drink.getName(), drink.getPrice());
        }
        return sideMap;
    }
}
