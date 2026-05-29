package com.pluralsight.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Topping {
    //    All the meats
    PEPPERONI("Pepperoni", 1.50),
    SAUSAGE("Sausage", 1.75),
    BACON("Bacon", 2.00),
    GRILLED_CHICKEN("Grilled Chicken", 2.25),
    HAM("Ham", 1.50),
    ANCHOVIES("Anchovies", 2.25),

    //    Veggies
    MUSHROOMS("Mushrooms", 0.75),
    ONIONS("Onions", 0.75),
    EXTRA_CHEESE("Extra Cheese", 1.00),
    GREEN_PEPPERS("Green Peppers", 0.75),
    BLACK_OLIVES("Black Olives", 1.00),
    JALAPENOS("Jalapeños", 0.75),
    PINEAPPLE("Pineapple", 1.25),
    SPINACH("Spinach", 1.00),
    SUN_DRIED_TOMATOES("Sun-Dried Tomatoes", 1.50);


    private final String name;
    private final double price;

    Topping(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}