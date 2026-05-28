package com.pluralsight.controllers;

import com.pluralsight.models.Drink;
import com.pluralsight.models.Side;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SideController {

    SideController() {
    }

    @GetMapping("/sides")
    Side[] getSides() {
        return Side.values();
    }

    @GetMapping("/drinks")
    Drink[] getDrinks() {
        return Drink.values();
    }
}
