package com.keerthi.Student;
public class App 
{
    public static void main( String[] args )
    {
        System.out.println("Initializing Database Connection System..");
        try {
        	StudentDAO dao = new StudentDAO();
        	StudentDemo s1 = new StudentDemo(1, "Keerthi", "keer123@gmail.com", "Cloud", 20 );
        	StudentDemo s2 = new StudentDemo(2, "Swathi", "swas3@gmail.com", "FSD", 22 );
        	System.out.println("\n Testing Data Insertion");
        	dao.save(s1);
        	dao.save(s2);
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
