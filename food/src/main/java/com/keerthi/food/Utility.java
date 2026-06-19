package com.keerthi.food;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Utility {
    private static SessionFactory sessionFactory;

    public static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            try {
                // This automatically reads all database credentials and entity mappings from hibernate.cfg.xml
                sessionFactory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
                System.out.println("SessionFactory initialized successfully from XML config!");
            } catch (Exception e) {
                System.err.println("SessionFactory initialization failed!");
                e.printStackTrace();
            }
        }
        return sessionFactory;
    }
}
