package com.example.gambling_data.service;

import com.example.gambling_data.model.User;
import com.example.gambling_data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public boolean existsByUsername(String username) {   // ✅ Add this
        return userRepository.existsByUsername(username);
    }
}
