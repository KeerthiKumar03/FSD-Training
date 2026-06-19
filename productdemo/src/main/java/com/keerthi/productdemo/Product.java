package com.keerthi.productdemo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Product {
    @Id
    private int id;
    private String name;
    private double price;
    
    public Product() {}
    
    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    public String getName() { 
        return name;
    }
    public double getPrice() {
        return price;
    }
    public int getId() {
	return id;
    }

    public void setId(int id) {
	this.id = id;
    }

	public void setName(String name) {
        this.name = name;
    }
    public void setPrice(double price) {
        this.price = price;
    }
}
