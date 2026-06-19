package com.keerthi.food;

import java.util.List;

public class FoodManagement {
    private FoodDAO foodDAO;

    public FoodManagement() {
        this.foodDAO = new FoodDAO();
    }

    public void placeNewOrder(Order order) {
        foodDAO.saveOrder(order);
    }

    public Order trackOrder(int id) {
        return foodDAO.getOrderById(id);
    }

    public List<Order> viewAllOrders() {
        return foodDAO.getAllOrders();
    }

    public void updateOrderStatus(int id, String newStatus) {
        Order order = foodDAO.getOrderById(id);
        if (order != null) {
            order.setOrderStatus(newStatus);
            foodDAO.updateOrder(order);
        } else {
            System.out.println("Cannot update status. Order not found.");
        }
    }

    public void cancelOrder(int id) {
        foodDAO.deleteOrder(id);
    }
}
