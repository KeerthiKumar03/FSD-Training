package com.keerthi.food;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import java.time.LocalDate;

@Entity
@Table(name = "customer_orders") // Avoids SQL syntax errors with the reserved keyword 'ORDER'
public class Order {

    @Id
    @Column(name = "order_id")
    private int orderId;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "food_item")
    private String foodItem;

    private int quantity;

    @Column(name = "total_amount")
    private double totalAmount;

    @Column(name = "order_date")
    private LocalDate orderDate;

    @Column(name = "order_status")
    private String orderStatus;

    // Constructors
    public Order() {}

    public Order(int orderId, String customerName, String foodItem, int quantity, double totalAmount, LocalDate orderDate, String orderStatus) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.foodItem = foodItem;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
    }

    // Getters and Setters
    public int getOrderId() { return orderId; }
    public void setOrderId(int orderId) { this.orderId = orderId; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getFoodItem() { return foodItem; }
    public void setFoodItem(String foodItem) { this.foodItem = foodItem; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }

    public LocalDate getOrderDate() { return orderDate; }
    public void setOrderDate(LocalDate orderDate) { this.orderDate = orderDate; }

    public String getOrderStatus() { return orderStatus; }
    public void setOrderStatus(String orderStatus) { this.orderStatus = orderStatus; }

    @Override
    public String toString() {
        return "Order [ID=" + orderId + ", Customer=" + customerName + ", Item=" + foodItem + 
               ", Qty=" + quantity + ", Total=" + totalAmount + ", Date=" + orderDate + ", Status=" + orderStatus + "]";
    }
}
