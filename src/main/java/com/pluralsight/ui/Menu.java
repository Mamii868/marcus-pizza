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
                    default -> System.out.println("Enter a valid option!");
                }
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number!");
            }
        }

    }

    public static void deliveryTypeMenu() {
        Order order = new Order();
        while (true) {
            try {
                System.out.println("""
                        1. Pick up
                        2. Delivery
                        3. Exit
                        """);
                int userChoice = scanner.nextInt();
                scanner.nextLine();

                switch (userChoice) {
                    case 1 -> {
                        order.setDeliveryMethod("Pick Up");
                        orderMenu(order);
                    }
                    case 2 -> {
                        order.setDeliveryMethod("Delivery");
                        userInfoMenu(order);
                        orderMenu(order);
                    }
                    case 3 -> {
                        System.out.println("Goodbye!");
                        System.exit(0);
                    }
                    default -> System.out.println("Enter a valid option!");
                }

            } catch (NumberFormatException e) {
                System.out.println("Enter a valid number!");
            }
        }

    }

    public static void userInfoMenu(Order order) {
        System.out.print("Enter your full address: ");
        String userAddress = scanner.nextLine();
        order.setAddress(userAddress);
    }

    public static void orderMenu(Order order) {
        boolean menuRunning = true;

        while (menuRunning) {
            try {
                System.out.println("""
                        Choose a menu item:
                        
                        1. Add Pizza
                        2. Add Drink
                        3. Add Side
                        4. Check Out
                        5. Back to Main Menu (Will Reset Order)
                        """);

                int userChoice = scanner.nextInt();
                scanner.nextLine();

                switch (userChoice) {
                    case 1 -> System.out.println("Pizza Menu");
                    case 2 -> System.out.println("Drink Menu");
                    case 3 -> System.out.println("Side Menu");
                    case 4 -> System.out.println("Check Out");
                    case 5 -> menuRunning = false;
                    default -> System.out.println("Enter a valid option!");
                }
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

}
