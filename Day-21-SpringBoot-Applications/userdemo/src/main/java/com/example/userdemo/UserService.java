package com.example.userdemo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class UserService {
	private UserRepository userRepository;
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	@Transactional
	public void save(User user) {
		userRepository.save(user);
	}
	
	public Optional<User> find(int id){
		return userRepository.findById(id);
	}
	public List<User> findAll(){
		return userRepository.findAll();
	}
	public void deleteById(int id) {
		if(!userRepository.existsById(id)) {
			throw new RuntimeException("User not found with id: "+id);
		}
		userRepository.deleteById(id);
	}
	@Transactional
	public void update(User user) {
		if (!userRepository.existsById(user.getId())) {
			throw new RuntimeException("Cannot update. User not found with id: " + user.getId());
		}
		userRepository.save(user);
	}
}

