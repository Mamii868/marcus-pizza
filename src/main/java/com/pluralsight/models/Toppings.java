package com.pluralsight.models;

public enum Toppings {
    PEPPERONI("Pepperoni", 1.50),
    MUSHROOMS("Mushrooms", 1.00),
    ONIONS("Onions", 0.75),
    EXTRA_CHEESE("Extra Cheese", 2.00);


    private final String name;
    private final double price;

    Toppings(String name, double price) {
        this.name = name;
        this.price = price;
    }


    public String getDisplayName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}