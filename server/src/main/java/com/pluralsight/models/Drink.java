package com.pluralsight.models;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Drink implements MenuItem {
    PEPSI("Pepsi", 2.99),
    DIET_PEPSI("Diet Pepsi", 2.99),
    DR_PEPPER("Dr. Pepper", 2.99),
    DIET_DR_PEPPER("Diet Dr. Pepper", 2.99),
    SEVEN_UP("7-Up", 2.99),
    MUG_ROOT_BEER("Mug Root Beer", 2.99),
    MOUNTAIN_DEW("Mountain Dew", 2.99);

    private final String name;
    private final double price;

    Drink(String name, double price) {
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