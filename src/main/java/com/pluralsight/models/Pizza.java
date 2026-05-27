package com.pluralsight.models;

import java.util.ArrayList;

public class Pizza implements MenuItem {
    private Crust crust;
    private int size;
    private ArrayList<Topping> toppings;
    private double price;

    public Pizza() {
        this.price = 8.00;
    }

    public void setCrust(Crust crust) {
        this.crust = crust;
    }

    public void addTopping(Topping topping) {
        this.toppings.add(topping);
    }

    public double getPrice() {
        double total = 0;

        total += crust.getPrice();
//        Loop through toppings to get all the prices
        for (Topping topping : toppings) {
            total += topping.getPrice();
        }

        return total;
    }
}
