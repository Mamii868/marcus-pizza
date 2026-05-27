package com.pluralsight.models;

import java.util.ArrayList;

public class Pizza {
    private Crust crust;
    private int size;
    private ArrayList<Toppings> toppings;
    private double price;

    public Pizza() {
        this.price = 8.00;
    }

    public void setCrust(Crust crust) {
        this.crust = crust;
    }

    public void addTopping(Toppings topping) {
        this.toppings.add(topping);
    }
}
