package com.keerthi.employee;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EmployeeDemo {

	public EmployeeDemo() {}
	@Id
		private int empId;
		private String empName;
		private String dept;
		private double salary;
		private String date ;
		
		public EmployeeDemo(int id, String name, String d,double sal, String date) {
			this.empId = id;
			this.empName = name;
			this.dept = d;
			this.salary = sal;
			this.date = date;
			
		}
		public int getEmpId() {
			return empId;
		}
		public void setEmpId(int empId) {
			this.empId = empId;
		}
		public String getEmpName() {
			return empName;
		}
		public void setEmpName(String empName) {
			this.empName = empName;
		}
		public String getDept() {
			return dept;
		}
		public void setDept(String dept) {
			this.dept = dept;
		}
		public double getSalary() {
			return salary;
		}
		public void setSalary(double salary) {
			this.salary = salary;
		}
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		
}
