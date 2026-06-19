package com.keerthi.employee;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println("Initializing Database Connection System..");
        try {
        	EmployeeDAO dao = new EmployeeDAO();
        	EmployeeDemo e1 = new EmployeeDemo(12,"Sahi","sales",2000000.00,"12-09-1982");
        	EmployeeDemo e2 = new EmployeeDemo(13,"sajsaju","business",213232387632.00,"07-12-1999");
        	System.out.println("\n Testing Data Insertion");
        	dao.save(e1);
        	dao.save(e2);
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
