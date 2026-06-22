package com.keerthi.library;

import java.util.List;

public class App {
    public static void main(String[] args) {
        // Initialize DAO
        BookDAO bookDAO = new BookDAO();

        System.out.println("===1. PERFORMING CREATE OPERATIONS ===");
        Book book1 = new Book(101, "Effective Java", "Joshua Bloch", "Programming", 45.50, 10);
        Book book2 = new Book(102, "Clean Code", "Robert C. Martin", "Programming", 40.00, 5);
        Book book3 = new Book(103, "The Hobbit", "J.R.R. Tolkien", "Fantasy", 15.99, 12);

        bookDAO.save(book1);
        bookDAO.save(book2);
        bookDAO.save(book3);

        System.out.println("\n=== 2. PERFORMING READ (GET BY ID) OPERATION ===");
        Book foundBook = bookDAO.getById(101);
        if (foundBook != null) {
            System.out.println("Found Book: " + foundBook);
        } else {
            System.out.println("Book with ID 101 not found.");
        }

        System.out.println("\n=== 3. PERFORMING UPDATE OPERATION ===");
        if (foundBook != null) {
            // Update price and available copies
            foundBook.setPrice(49.99);
            foundBook.setAvailableCopies(8);
            bookDAO.update(foundBook);
        }

        System.out.println("\n=== 4. PERFORMING READ (GET ALL) OPERATION ===");
        List<Book> allBooks = bookDAO.getAll();
        if (allBooks != null && !allBooks.isEmpty()) {
            System.out.println("--- Current Books in Database ---");
            for (Book b : allBooks) {
                System.out.println(b);
            }
        } else {
            System.out.println("No books found in the database.");
        }

        System.out.println("\n=== 5. PERFORMING DELETE OPERATION ===");
        // Delete the fantasy book (ID 103)
        bookDAO.delete(103);

        System.out.println("\n=== 6. VERIFYING ALL BOOKS AFTER DELETION ===");
        List<Book> remainingBooks = bookDAO.getAll();
        if (remainingBooks != null) {
            System.out.println("--- Remaining Books in Database ---");
            for (Book b : remainingBooks) {
                System.out.println(b);
            }
        }
    }
}
