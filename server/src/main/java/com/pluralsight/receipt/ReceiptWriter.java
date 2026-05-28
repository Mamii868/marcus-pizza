package com.pluralsight.receipt;

import com.pluralsight.models.Order;
import com.pluralsight.models.Pizza;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ReceiptWriter {

    private ReceiptWriter() {
    }

    public static String createReceipt(Order order) {
        String timeStamp = generateTimeStamp();
        try {
            FileWriter fileWriter = new FileWriter("server/src/main/resources/receipts/" + timeStamp + ".txt");
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            StringBuilder receiptToReturn = new StringBuilder();

//            Write the pizza and toppings for each one
            order.getPizzas().forEach(pizza -> {
                try {
                    bufferedWriter.write(pizza.getSize().getName() + " " + pizza.getCrust().getName() + " Pizza: " + String.format("$%.2f", pizza.getPrice()) + "\n");
                    receiptToReturn.append(pizza.getSize().getName() + " " + pizza.getCrust().getName() + " Pizza: " + String.format("$%.2f", pizza.getPrice()) + "\n");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }

                pizza.getToppings().forEach(topping -> {
                    try {
                        bufferedWriter.write("     - " + topping.getName() + "\n");
                        receiptToReturn.append("     - " + topping.getName() + "\n");
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });
            });

            bufferedWriter.write("\n");

            order.getItems().forEach(item -> {
//                Make sure not to rewrite pizzas to receipt
                if (!(item instanceof Pizza)) {
                    try {
                        bufferedWriter.write(item.getName() + ": $" + String.format("%.2f", item.getPrice()) + "\n");
                        receiptToReturn.append(item.getName() + ": $" + String.format("%.2f", item.getPrice()) + "\n");
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }
            });

            bufferedWriter.write("========\n");
            bufferedWriter.write("Total: $" + order.getOrderTotal() + "\n");
            bufferedWriter.write("========");
            receiptToReturn.append("========\n");
            receiptToReturn.append("Total: $" + order.getOrderTotal() + "\n");
            receiptToReturn.append("========");


            bufferedWriter.close();
            return receiptToReturn.toString();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Something went wrong writing to the file!");
            return "Error create receipt!";
        }
    }

    public static String generateTimeStamp() {
        LocalDateTime now = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss");

        return formatter.format(now);
    }
}
