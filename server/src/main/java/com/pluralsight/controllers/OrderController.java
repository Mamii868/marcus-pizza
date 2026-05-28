package com.pluralsight.controllers;

import com.pluralsight.models.MenuItem;
import com.pluralsight.models.Order;
import com.pluralsight.models.Pizza;
import com.pluralsight.receipt.ReceiptWriter;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
//Please let me through cors
@CrossOrigin
public class OrderController {

    private Order order;

    OrderController() {
    }

    //    All endpoints return the order as a confirmation to the client.
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
        return this.order;
    }

    @PostMapping("/order/add/item")
    Order addItem(@RequestBody MenuItem item) {
        this.order.addItem(item);
        return this.order;
    }

    @PostMapping("/order/add/pizza")
    Order addItem(@RequestBody Pizza pizza) {
        this.order.addItem(pizza);
        return this.order;
    }

    @PostMapping("/order/delivery")
    Order setDeliveryMethod(@RequestBody boolean method) {
        if (method) {
            this.order.setDeliveryMethod("delivery");
        } else {
            this.order.setDeliveryMethod("pickUp");
        }
        return this.order;
    }

    @PostMapping("/order/address")
    Order setAddress(@RequestBody String address) {
        this.order.setAddress(address);
        return this.order;
    }

    //    Map workaround for sending json instead of a string which the client cannot handle
    @GetMapping("/order/checkout")
    Map<String, String> checkoutOrder() {
        String receipt = ReceiptWriter.createReceipt(this.order);
//       Reset the order for the next one
        this.order = null;

        return Collections.singletonMap("response", receipt);

    }
}
