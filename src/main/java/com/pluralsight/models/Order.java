package com.pluralsight.models;

import com.pluralsight.ui.Menu;

import java.util.ArrayList;
import java.util.List;

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
}
