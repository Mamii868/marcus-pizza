package com.pluralsight.models;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Crust {
    REGULAR("Regular", 0),
    THIN("Thin", 0),
    PAN("Pan", 3),
    DEEP_DISH("Deep Dish", 4.00),
    STUFFED("Stuffed Crust", 6);

    private final String name;
    private final double price;

    Crust(String name, double price) {
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
