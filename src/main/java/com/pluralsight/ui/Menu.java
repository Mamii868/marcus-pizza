package com.pluralsight.ui;

import com.pluralsight.models.*;

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
                        
                        1. New Order
                        2. Exit
                        
                        """);

                System.out.print("Choose an option: ");

                int userChoice = scanner.nextInt();
                scanner.nextLine();

                switch (userChoice) {
                    case 1 -> deliveryTypeMenu();
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
                    case 1 -> pizzaMenu(order);
                    case 2 -> drinkMenu(order);
                    case 3 -> sideMenu(order);
                    case 4 -> System.out.println("Check Out");
                    case 5 -> menuRunning = false;
                    default -> System.out.println("Enter a valid option!");
                }
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void sideMenu(Order order) {
        Side[] allSides = Side.values();

        while (true) {
            try {
                System.out.println("Available Sides");
                for (Side side : Side.values()) {
                    System.out.println((side.ordinal() + 1) + ". " + side.getName() + " - " + side.getPrice());
                }
                System.out.println();
                System.out.print("Choose a side: ");
                int userChoice = scanner.nextInt();

                order.addItem(allSides[userChoice - 1]);
                break;
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void drinkMenu(Order order) {
        Drink[] allDrinks = Drink.values();

        while (true) {
            try {
                System.out.println("Available Drinks");
                for (Drink drink : Drink.values()) {
                    System.out.println((drink.ordinal() + 1) + ". " + drink.getName() + " - " + drink.getPrice());
                }
                System.out.println();
                System.out.print("Choose a drink: ");
                int userChoice = scanner.nextInt();

                order.addItem(allDrinks[userChoice - 1]);
                System.out.println("Added drink! Don't forget to pick up your choice at the store!");
                break;
            } catch (NumberFormatException e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void pizzaMenu(Order order) {
        Pizza pizza = new Pizza();

        boolean menuRunning = true;
        while (menuRunning) {

            try {
                System.out.println("== New Pizza ==");

                System.out.println("""
                        1. Specialty Pizzas
                        2. Custom Pizza
                        3. Back to Previous Menu
                        """);
                System.out.print("Choose an option: ");
                int userChoice = scanner.nextInt();
                scanner.nextLine();

                switch (userChoice) {
                    case 1 -> System.out.println("Specialty Pizzas");
                    case 2 -> customPizzaMenu(pizza);
                    case 3 -> menuRunning = false;
                    default -> System.out.println("Enter a valid option!");
                }
                order.addItem(pizza);
                menuRunning = false;
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void customPizzaMenu(Pizza pizza) {
        while (true) {
            try {
                System.out.println("== Custom Pizza ==");
                sizeMenu(pizza);
                crustMenu(pizza);
                toppingsMenu(pizza);

                System.out.println();
                System.out.println("Custom Pizza added to order!");
                System.out.println();

                break;
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void crustMenu(Pizza pizza) {
        Crust[] allCrusts = Crust.values();

        while (true) {
            try {
                System.out.println("= Available Crusts =");
                for (Crust crust : Crust.values()) {
                    System.out.println((crust.ordinal() + 1) + ". " + crust.getName() + (crust.getPrice() > 0 ? " - +$" + crust.getPrice() : ""));
                }
                System.out.println();
                System.out.print("Choose a crust: ");
                int userChoice = scanner.nextInt();

                pizza.setCrust(allCrusts[userChoice - 1]);
                break;
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void sizeMenu(Pizza pizza) {
        Size[] allSizes = Size.values();

        while (true) {
            try {
                System.out.println("= Available Sizes =");
                for (Size size : Size.values()) {
                    System.out.println((size.ordinal() + 1) + ". " + size.getName() + " - +$" + size.getPrice());
                }
                System.out.println();
                System.out.print("Choose a size: ");
                int userChoice = scanner.nextInt();

                pizza.setSize(allSizes[userChoice - 1]);
                break;
            } catch (Exception e) {
                System.out.println("Enter a valid number!");
            }
        }
    }

    public static void toppingsMenu(Pizza pizza) {
        Topping[] allToppings = Topping.values();

        while (true) {
            try {
                System.out.println("Available Toppings");
                for (Topping topping : Topping.values()) {
                    System.out.println((topping.ordinal() + 1) + ". " + topping.getName() + " - +$" + topping.getPrice());
                }

                System.out.println();
                System.out.print("Choose a topping (99 to continue): ");
                int userChoice = scanner.nextInt();

                if (userChoice == 99) {
                    break;
                }

                pizza.addTopping(allToppings[userChoice - 1]);
                System.out.println("Added " + allToppings[userChoice - 1].getName());
            } catch (NumberFormatException e) {
                e.printStackTrace();
                System.out.println("Enter a valid number!");
            }
        }
    }


}
