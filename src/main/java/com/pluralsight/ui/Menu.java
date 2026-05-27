package com.pluralsight.ui;

import com.pluralsight.models.Order;

import java.util.Scanner;

public class Menu {
    static boolean appRunning = true;
    static Scanner scanner = new Scanner(System.in);

    private Menu() {
    }

    public static void mainMenu() {

        while (appRunning) {
            try {
                System.out.println("""
                        === Marcus Pizza ===
                        
                        Choose an option below:
                        
                        1. New Order
                        2. Exit
                        """);

                int userChoice = scanner.nextInt();
                scanner.nextLine();

                switch (userChoice) {
                    case 1 -> System.out.println("Add Later");
                    case 2 -> {
                        System.out.println("Goodbye!");
                        System.exit(0);
                    }
                }
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number!");
            }
        }

    }

    public static void orderMenu() {
        Order order = new Order();
        boolean menuRunning = true;

        while (menuRunning) {
            try {
                System.out.println("""
                        1. Pick up
                        2. Delivery
                        3. Exit
                        """);
                int userChoice = scanner.nextInt();
                scanner.nextLine();

                switch (userChoice) {
                    case 1 -> order.setDeliveryMethod("Pick Up");
                    case 2 -> {
                        order.setDeliveryMethod("Delivery");
//                        TODO: Add menu for customer info
                    }
                    case 3 -> {
                        System.out.println("Goodbye!");
                        System.exit(0);
                    }
                }

            } catch (NumberFormatException e) {
                System.out.println("Enter a valid numer!");
            }

        }

    }

}
