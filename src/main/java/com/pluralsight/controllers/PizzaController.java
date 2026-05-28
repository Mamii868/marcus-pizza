package com.pluralsight.controllers;

import com.pluralsight.models.Crust;
import com.pluralsight.models.Pizza;
import com.pluralsight.models.Size;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class PizzaController {
    private Pizza pizza;

    @GetMapping("/pizza/get")
    Pizza getPizza() {
        if (this.pizza != null) {
            return this.pizza;
        }
        this.pizza = new Pizza();
        return this.pizza;
    }

    @PostMapping("/pizza/crust")
    Pizza setCrust(@RequestBody Crust crust) {
        this.pizza.setCrust(crust);
        return this.pizza;
    }

    @PostMapping("/pizza/size")
    Pizza setSize(@RequestBody Size size) {
        this.pizza.setSize(size);
        return this.pizza;
    }


}
