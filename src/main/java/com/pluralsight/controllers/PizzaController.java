package com.pluralsight.controllers;

import com.pluralsight.models.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//All endpoints return the pizza as confirmation
@RestController
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

    //    Send one api request for all the toppings then loop through and add them all
//    I believe this is the better option rather than calling this 100000x in the client
    @PostMapping("/pizza/toppings")
    Pizza addTopping(@RequestBody List<Topping> toppings) {
        toppings.forEach(topping -> this.pizza.addTopping(topping));

        return this.pizza;
    }
}
