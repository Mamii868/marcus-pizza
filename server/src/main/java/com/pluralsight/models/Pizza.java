package com.pluralsight.models;

import java.util.ArrayList;

public class Pizza implements MenuItem {
    private Crust crust;
    private Size size;
    private ArrayList<Topping> toppings;
    private double price;
    private String name;

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

    public void setToppings(ArrayList<Topping> toppings) {
        this.toppings = toppings;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public String getName() {
        return this.name;
    }

    public Crust getCrust() {
        return this.crust;
    }

    public Size getSize() {
        return this.size;
    }

    public ArrayList<Topping> getToppings() {
        return this.toppings;
    }

    public double getPrice() {

//        Resets price so prices aren't incorrectly added
        this.price = 6.00;

//        Null checks for api
        if (this.size != null) {
            this.price += size.getPrice();
        }
        if (this.crust != null) {
            this.price += crust.getPrice();
        }

//        Loop through toppings to get all the prices
        for (Topping topping : toppings) {
            this.price += topping.getPrice();
        }

        return this.price;
    }
}
