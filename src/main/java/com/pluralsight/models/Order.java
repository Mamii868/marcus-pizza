package com.pluralsight.models;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Order {
    private String deliveryMethod;
    private List<MenuItem> items;
    private double orderTotal;
    private String address;

    public Order() {
        this.items = new ArrayList<>();
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void addItem(MenuItem item) {
        this.items.add(item);
    }

    public String getDeliveryMethod() {
        return deliveryMethod;
    }

    public List<MenuItem> getItems() {
        return items;
    }

    public double getOrderTotal() {
        return orderTotal;
    }

    public List<Pizza> getPizzas() {
        return this.items.stream().filter(item -> item instanceof Pizza).map(item -> (Pizza) item).collect(Collectors.toList());
    }
}
