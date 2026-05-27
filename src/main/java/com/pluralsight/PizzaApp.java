package com.pluralsight;

import com.pluralsight.models.Crust;
import com.pluralsight.models.Pizza;
import com.pluralsight.models.Topping;

public class PizzaApp {
    public static void main(String[] args) {


        Pizza pizza = new Pizza();

        pizza.setCrust(Crust.DEEP_DISH);
        pizza.addTopping(Topping.PEPPERONI);
    }
}
