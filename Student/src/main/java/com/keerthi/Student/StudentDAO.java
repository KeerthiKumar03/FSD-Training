package com.keerthi.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
public class StudentDAO {
	private SessionFactory sessionFactory;

	public StudentDAO() {
				sessionFactory = Utility.getSessionFactory();
			}
			private Session getSession() {
				return sessionFactory.openSession();
			}
			public void save(StudentDemo s) {
				Transaction tx = null;
				try(Session session = getSession()) {
					tx = session.beginTransaction();
					session.persist(s);
					tx.commit();
					System.out.println("Inserted : "+s.getStudentName());
				}catch(Exception e) {
					if(tx != null) tx.rollback();
					e.printStackTrace();
				}
			}
}