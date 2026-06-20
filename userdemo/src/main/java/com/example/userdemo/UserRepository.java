package com.example.userdemo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User ,Integer> {

}
//Java Persistent API-defaultly provides methods like save,find,findAll,findById,delete,findByName,etc.
//internally reacts with hibernate 
//POJO