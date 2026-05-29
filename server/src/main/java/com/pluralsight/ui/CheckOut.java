package com.pluralsight.ui;

import com.pluralsight.models.Order;
import com.pluralsight.models.Pizza;
import com.pluralsight.receipt.ReceiptWriter;

import java.util.ArrayList;
import java.util.Scanner;

public class CheckOut {

    private CheckOut() {
    }

    public static void checkoutMenu(Order order) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Your order:");

//        FOREACH IS ACTUALLY A THING THIS IS GOING TO BE SO MUCH EASIER
        order.getPizzas().forEach(pizza -> {
            System.out.println(pizza.getSize().getName() + " " + pizza.getCrust().getName() + " Pizza: " + String.format("$%.2f", pizza.getPrice()));
            pizza.getToppings().forEach(topping -> System.out.println("     - " + topping.getName()));
            System.out.println();
        });

//        Make sure not to rewrite pizzas to summary
        order.getItems().forEach(item -> {
            if (!(item instanceof Pizza)) {
                System.out.println(item.getName() + ": $" + String.format("%.2f", item.getPrice()));
            }
        });

        System.out.println();
        System.out.println("========");
        System.out.println("Order Total: $" + String.format("%.2f", order.getOrderTotal()));
        System.out.println("========");

        System.out.println();
        System.out.print("Check Out? (Y/N): ");
        String userChoice = scanner.nextLine();

        if (userChoice.equalsIgnoreCase("y")) {
            ReceiptWriter.createReceipt(order);
            System.out.println("Receipt printed!");

            System.out.println("You are checked out! We will let you know when your order is " + (order.getDeliveryMethod().equalsIgnoreCase("delivery") ? "on its way" : "ready to pick up!"));
            System.exit(1);
        }

    }
}
