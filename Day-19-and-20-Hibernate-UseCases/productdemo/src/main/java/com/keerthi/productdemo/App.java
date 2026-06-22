package com.keerthi.productdemo;
import java.util.List;
public class App {
    public static void main(String[] args) {
        System.out.println("Initializing Database Connection System...");

        try {
            ProductDAO dao = new ProductDAO();

            //1. Test SAVE
            Product p1 = new Product(101, "Wireless Mouse", 25.99);
            Product p2 = new Product(102, "Mechanical Keyboard", 89.92);
            System.out.println("\nTesting Data Insertion");
            dao.save(p1);
            dao.save(p2);

            //  2. Test READ (Single Record)
            System.out.println("\nTesting Fetch By ID");
            Product fetched = dao.getById(101);
            if(fetched != null) {
                System.out.println("Found: " + fetched.getName() + " ($" + fetched.getPrice() + ")");
            }

            // 3. Test UPDATE 
            System.out.println("\nTesting Data Update");
            if(fetched != null) {
                fetched.setPrice(19.99); 
                dao.update(fetched);
            }

            // 4. Test READ ALL
            System.out.println("\n--- Testing Fetch All Records ---");
            List<Product> allProducts = dao.getAll();
            if(allProducts != null) {
                for(Product p : allProducts) {
                    System.out.println("ID: " + p.getId() + " | Name: " + p.getName() + " | Price: $" + p.getPrice());
                }
            }

            // 5. Test DELETE 
            System.out.println("\n--- Testing Data Deletion ---");
            dao.delete(102); // Remove the keyboard

        }

     catch (Exception e) {
            System.err.println("An unexpected error occurred during execution:");
            e.printStackTrace();
        } finally {
         
            if (Utility.getSessionFactory() != null) {
                Utility.getSessionFactory().close();
                System.out.println("Database connection pool closed safely.");
            }
        }
    }
}
