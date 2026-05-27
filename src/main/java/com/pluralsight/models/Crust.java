package com.pluralsight.models;

public enum Crust {
    REGULAR("Regular", 0),
    THIN("Thin", 0),
    PAN("Pan", 3),
    DEEP_DISH("Deep Dish", 4.00),
    STUFFED("Stuffed Crust", 6);

    private String name;
    private double price;

    Crust(String name, double price) {
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
