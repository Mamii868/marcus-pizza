package com.pluralsight.models;

import java.util.ArrayList;

public class Pizza implements MenuItem {
    private Crust crust;
    private Size size;
    private final ArrayList<Topping> toppings;
    private double price;

    public Pizza() {
        this.price = 6.00;
        this.toppings = new ArrayList<>();
    }

    public void setCrust(Crust crust) {
        this.crust = crust;
    }

    public void addTopping(Topping topping) {
        this.toppings.add(topping);
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public double getPrice() {

//        Resets price so prices aren't incorrectly added
        this.price = 6.00;

        this.price += size.getPrice();
        this.price += crust.getPrice();
//        Loop through toppings to get all the prices
        for (Topping topping : toppings) {
            this.price += topping.getPrice();
        }

        return this.price;
    }
}
