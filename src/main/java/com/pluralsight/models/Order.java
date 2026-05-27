package com.pluralsight.models;

import java.util.List;

public class Order {
    private String deliveryMethod;
    private List<MenuItem> items;
    private double orderTotal;
    private String address;

    public Order() {
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public void setAddress(String address) {
        this.address = address;
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
