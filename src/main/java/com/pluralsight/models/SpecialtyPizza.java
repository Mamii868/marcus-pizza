package com.pluralsight.models;

import java.util.List;

public enum SpecialtyPizza {
    PEPPERONI_EXTREME("Pepperoni Extreme", List.of(Topping.PEPPERONI, Topping.PEPPERONI, Topping.PEPPERONI)),
    HAWAIIAN("Hawaiian", List.of(Topping.PINEAPPLE, Topping.HAM)),
    TRIPLE_MEAT("Triple Meat", List.of(Topping.PEPPERONI, Topping.HAM, Topping.SAUSAGE)),
    MARGARITA("Margarita", List.of(Topping.SUN_DRIED_TOMATOES, Topping.GRILLED_CHICKEN, Topping.SPINACH));

    private final String name;
    private final List<Topping> toppings;

    SpecialtyPizza(String name, List<Topping> toppings) {
        this.name = name;
        this.toppings = toppings;
    }

    public String getName() {
        return name;
    }

    public List<Topping> getToppings() {
        return toppings;
    }
}
