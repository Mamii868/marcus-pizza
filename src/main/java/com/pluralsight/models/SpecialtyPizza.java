package com.pluralsight.models;

import java.util.List;

public enum SpecialtyPizza implements MenuItem {
    ;

    private final String name;
    private final List<Topping> toppings;
    private final double price;

    SpecialtyPizza(String name, List<Topping> toppings, double price) {
        this.name = name;
        this.toppings = toppings;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public List<Topping> getToppings() {
        return toppings;
    }

    public double getPrice() {
        return price;
    }
}
