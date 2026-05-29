package com.pluralsight.models;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Size {
    SMALL("Small - 8in", 0),
    MEDIUM("Medium - 12in", 2.00),
    LARGE("Large - 16in", 3.50),
    X_LARGE("X-Large - 20in", 4.99);

    private final String name;
    private final double price;

    Size(String name, double price) {
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
