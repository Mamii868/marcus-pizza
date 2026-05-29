package com.pluralsight.models;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Side implements MenuItem {
    GARLIC_BREAD("Garlic Bread", 4.50),
    CHEESE_BREAD("Cheese Bread", 6.99),
    BUFFALO_WINGS("Buffalo Wings", 8.99),
    RANCH_CUP("Ranch Cup", 0.50);

    private final String name;
    private final double price;


    Side(String name, double price) {
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
