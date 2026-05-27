package com.pluralsight.models;

import java.util.List;

public class Order {
    private String deliveryMethod;
    private List<MenuItem> items;
    private double orderTotal;

    public Order() {
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
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
