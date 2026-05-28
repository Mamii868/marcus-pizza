package com.pluralsight.controllers;

import com.pluralsight.models.MenuItem;
import com.pluralsight.models.Order;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    private Order order;

    OrderController() {
    }

    @GetMapping("/order/get")
    Order getCurrentOrder() {
        if (this.order == null) {
            this.order = new Order();
        }
        return this.order;
    }

    @PostMapping("/order/edit")
    Order editOrder(@RequestBody Order order) {
        this.order = order;
//        Return order to confirm changes to client
        return this.order;
    }

    @PostMapping("/order/add")
    Order addItem(@RequestBody MenuItem item) {
        this.order.addItem(item);
        return this.order;
    }

    @PostMapping("/order/delivery")
    Order setDeliveryMethod(@RequestBody boolean method) {
        if(method) {
            this.order.setDeliveryMethod("delivery");
        } else {
            this.order.setDeliveryMethod("pickUp");
        }
        return this.order;
    }
}
