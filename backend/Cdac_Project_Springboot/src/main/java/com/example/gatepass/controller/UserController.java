package com.example.gatepass.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.gatepass.model.User;
import com.example.gatepass.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/visitors/register")
    public ResponseEntity<?> registerVisitor(@RequestBody User user) {
        logger.info("Received visitor registration request for: {}", user.getEmail());
        try {
            if (userRepository.existsByEmail(user.getEmail())) {
                logger.error("Email already exists: {}", user.getEmail());
                return ResponseEntity.badRequest().body("Email already exists");
            }

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            logger.info("Visitor registered successfully: {}", user.getEmail());
            return ResponseEntity.ok("Visitor registered successfully");
        } catch (Exception e) {
            logger.error("Registration error", e);
            return ResponseEntity.status(500).body("An error occurred while trying to register. Please try again.");
        }
    }

    @PostMapping("/visitors/login")
    public ResponseEntity<?> loginVisitor(@RequestBody User user) {
        logger.info("Visitor login attempt: {}", user.getEmail());
        try {
            User existingUser = userRepository.findByEmail(user.getEmail());
            if (existingUser != null && passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
                logger.info("Login successful for visitor: {}", user.getEmail());
                return ResponseEntity.ok("Login successful");
            }
            logger.error("Invalid login attempt for visitor: {}", user.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        } catch (Exception e) {
            logger.error("Login error", e);
            return ResponseEntity.status(500).body("An error occurred while trying to log in. Please try again.");
        }
    }

    @PostMapping("/watchmen/login")
    public ResponseEntity<?> loginWatchman(@RequestBody User user) {
        logger.info("Watchman login attempt: {}", user.getEmail());
        try {
            User existingUser = userRepository.findByEmail(user.getEmail());
            if (existingUser != null && passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
                logger.info("Login successful for watchman: {}", user.getEmail());
                return ResponseEntity.ok("Login successful");
            }
            logger.error("Invalid login attempt for watchman: {}", user.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        } catch (Exception e) {
            logger.error("Login error", e);
            return ResponseEntity.status(500).body("An error occurred while trying to log in. Please try again.");
        }
    }
}