package com.pluralsight.models;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Drink implements MenuItem {
    ONE_LITER("One Liter", 2.99),
    TWO_LITER("Two Liter", 3.99);

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