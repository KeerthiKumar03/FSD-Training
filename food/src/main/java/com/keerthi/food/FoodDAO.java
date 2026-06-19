package com.keerthi.food;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class FoodDAO {
    private SessionFactory sessionFactory;

    public FoodDAO() {
        this.sessionFactory = Utility.getSessionFactory();
    }

    private Session getSession() {
        return sessionFactory.openSession();
    }

    // Insert Order
    public void saveOrder(Order order) {
        try (Session session = getSession()) {
            Transaction tx = null;
            try {
                tx = session.beginTransaction();
                session.persist(order);
                tx.commit();
                System.out.println("Order saved: ID " + order.getOrderId());
            } catch (Exception e) {
                if (tx != null && tx.isActive()) tx.rollback();
                throw e;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Fetch Order by ID
    public Order getOrderById(int id) {
        try (Session session = getSession()) {
            return session.get(Order.class, id);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Fetch All Orders
    public List<Order> getAllOrders() {
        try (Session session = getSession()) {
            return session.createQuery("from Order", Order.class).list();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Update Order
    public void updateOrder(Order order) {
        try (Session session = getSession()) {
            Transaction tx = null;
            try {
                tx = session.beginTransaction();
                session.merge(order);
                tx.commit();
                System.out.println("Order updated: ID " + order.getOrderId());
            } catch (Exception e) {
                if (tx != null && tx.isActive()) tx.rollback();
                throw e;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Delete Order
    public void deleteOrder(int id) {
        try (Session session = getSession()) {
            Transaction tx = null;
            try {
                tx = session.beginTransaction();
                Order order = session.get(Order.class, id);
                if (order != null) {
                    session.remove(order);
                    System.out.println("Order deleted: ID " + id);
                } else {
                    System.out.println("No order found with ID: " + id);
                }
                tx.commit();
            } catch (Exception e) {
                if (tx != null && tx.isActive()) tx.rollback();
                throw e;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
