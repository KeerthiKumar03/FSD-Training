package com.keerthi.employee;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class EmployeeDAO {
	private SessionFactory sessionFactory;
	public EmployeeDAO() {
		sessionFactory = Utility.getSessionFactory();
	}
	private Session getSession() {
		return sessionFactory.openSession();
	}
	public void save(EmployeeDemo s) {
		Transaction tx = null;
		try(Session session = getSession()) {
			tx = session.beginTransaction();
			session.persist(s);
			tx.commit();
			System.out.println("Inserted : "+s.getEmpName());
		}catch(Exception e) {
			if(tx != null) tx.rollback();
			e.printStackTrace();
		}
	}
}
