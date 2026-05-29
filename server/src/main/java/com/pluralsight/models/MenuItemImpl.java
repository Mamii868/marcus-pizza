package com.pluralsight.models;

// This circumvents the issue of MenuItems not properly being deserialized
public class MenuItemImpl implements MenuItem {
    private String name;
    private double price;

    public MenuItemImpl() {
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}