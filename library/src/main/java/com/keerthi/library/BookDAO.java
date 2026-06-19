package com.keerthi.library;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import com.keerthi.employee.Utility; 

public class BookDAO {
	
	private SessionFactory sessionFactory;
	
	public BookDAO() {
		sessionFactory = Utility.getSessionFactory();
	}
	
	private Session getSession() {
		return sessionFactory.openSession();
	}
	
	// 1. CREATE / INSERT
	public void save(Book b) {
		try (Session session = getSession()) {
			Transaction tx = null;
			try {
				tx = session.beginTransaction();
				session.persist(b);
				tx.commit();
				System.out.println("Inserted: " + b.getTitle());
			} catch (Exception e) {
				if (tx != null && tx.isActive()) {
					tx.rollback();
				}
				throw e; // Propagates the actual database mapping error to the console
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 2. READ / FETCH BY ID
	public Book getById(int id) {
		try (Session session = getSession()) {
			return session.get(Book.class, id);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 3. READ / FETCH ALL BOOKS
	public List<Book> getAll() {
		try (Session session = getSession()) {
			return session.createQuery("from Book", Book.class).list();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	// 4. UPDATE
	public void update(Book b) {
		try (Session session = getSession()) {
			Transaction tx = null;
			try {
				tx = session.beginTransaction();
				session.merge(b); 
				tx.commit();
				System.out.println("Updated: " + b.getTitle());
			} catch (Exception e) {
				if (tx != null && tx.isActive()) {
					tx.rollback();
				}
				throw e;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 5. DELETE
	public void delete(int id) {
		try (Session session = getSession()) {
			Transaction tx = null;
			try {
				tx = session.beginTransaction();
				Book b = session.get(Book.class, id);
				if (b != null) {
					session.remove(b);
					System.out.println("Deleted book with ID: " + id);
				} else {
					System.out.println("Book not found with ID: " + id);
				}
				tx.commit();
			} catch (Exception e) {
				if (tx != null && tx.isActive()) {
					tx.rollback();
				}
				throw e;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
