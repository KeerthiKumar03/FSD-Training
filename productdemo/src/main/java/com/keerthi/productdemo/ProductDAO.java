package com.keerthi.productdemo;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class ProductDAO {
	
	private SessionFactory sessionFactory;
	
	public ProductDAO() {
		sessionFactory = Utility.getSessionFactory();
	}
	
	private Session getSession() {
		return sessionFactory.openSession();
	}
	
	// 1. CREATE / INSERT
	public void save(Product p) {
		Transaction tx = null;
		try (Session session = getSession()) {
			tx = session.beginTransaction();
			session.persist(p);
			tx.commit();
			System.out.println("Inserted: " + p.getName());
		} catch (Exception e) {
			if (tx != null) tx.rollback();
			e.printStackTrace();
		}
	}

	// 2. READ / FETCH BY ID
	@SuppressWarnings("removal")
	public Product getById(int id) {
		try (Session session = getSession()) {
			return session.get(Product.class, id);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 3. READ / FETCH ALL PRODUCTS
	public List<Product> getAll() {
		try (Session session = getSession()) {
			// Using standard HQL (Hibernate Query Language)
			return session.createQuery("from Product", Product.class).list();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 4. UPDATE
	public void update(Product p) {
		Transaction tx = null;
		try (Session session = getSession()) {
			tx = session.beginTransaction();
			session.merge(p); // merge updates existing data in the DB
			tx.commit();
			System.out.println("Updated: " + p.getName());
		} catch (Exception e) {
			if (tx != null) tx.rollback();
			e.printStackTrace();
		}
	}

	// 5. DELETE
	public void delete(int id) {
		Transaction tx = null;
		try (Session session = getSession()) {
			tx = session.beginTransaction();
			Product p = session.get(Product.class, id);
			if (p != null) {
				session.remove(p);
				System.out.println("Deleted product with ID: " + id);
			} else {
				System.out.println("Product not found with ID: " + id);
			}
			tx.commit();
		} catch (Exception e) {
			if (tx != null) tx.rollback();
			e.printStackTrace();
		}
	}
}
