package com.pluralsight.controllers;

import com.pluralsight.models.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    @GetMapping("/menu/sizes")
    Size[] getSizes() {
        return Size.values();
    }

    @GetMapping("/menu/crusts")
    Crust[] getCrusts() {
        return Crust.values();
    }

    @GetMapping("/menu/toppings")
    Topping[] getToppings() {
        return Topping.values();
    }

    @GetMapping("/menu/sides")
    Side[] getSides() {
        return Side.values();
    }

    @GetMapping("/menu/drinks")
    Drink[] getDrinks() {
        return Drink.values();
    }

    @GetMapping("/menu/specialties")
    SpecialtyPizza[] getSpecialties() {
        return SpecialtyPizza.values();
    }


}
