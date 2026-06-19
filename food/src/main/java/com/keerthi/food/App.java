package com.keerthi.food;

import java.time.LocalDate;
import java.util.List;

public class App {
    public static void main(String[] args) {
        FoodManagement system = new FoodManagement();

        System.out.println("=== 1. PLACING ORDERS ===");
        Order order1 = new Order(5001, "Alice", "Chicken Biryani", 2, 540.00, LocalDate.now(), "Placed");
        Order order2 = new Order(5002, "Bob", "Margherita Pizza", 1, 299.00, LocalDate.now(), "Preparing");
        Order order3 = new Order(5003, "Charlie", "Veg Burger Meal", 3, 450.00, LocalDate.now(), "Placed");

        system.placeNewOrder(order1);
        system.placeNewOrder(order2);
        system.placeNewOrder(order3);

        System.out.println("\n=== 2. TRACKING AN ORDER (READ BY ID) ===");
        Order trackedOrder = system.trackOrder(5002);
        System.out.println(trackedOrder);

        System.out.println("\n=== 3. UPDATING ORDER STATUS (UPDATE) ===");
        system.updateOrderStatus(5002, "Out for Delivery");

        System.out.println("\n=== 4. LISTING ALL ACTIVE ORDERS (READ ALL) ===");
        List<Order> activeOrders = system.viewAllOrders();
        if (activeOrders != null) {
            for (Order o : activeOrders) {
                System.out.println(o);
            }
        }

        System.out.println("\n=== 5. CANCELLING AN ORDER (DELETE) ===");
        system.cancelOrder(5003);

        System.out.println("\n=== 6. FINAL ORDER REVIEW ===");
        List<Order> finalOrders = system.viewAllOrders();
        if (finalOrders != null) {
            for (Order o : finalOrders) {
                System.out.println(o);
            }
        }
    }
}
