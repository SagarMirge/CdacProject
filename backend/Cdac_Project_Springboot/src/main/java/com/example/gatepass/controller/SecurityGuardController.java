package com.example.gatepass.controller;

import com.example.gatepass.model.SecurityGuard;
import com.example.gatepass.service.SecurityGuardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/securityguards")
public class SecurityGuardController {

    @Autowired
    private SecurityGuardService securityGuardService;

    @PostMapping("/register")
    public ResponseEntity<SecurityGuard> register(@RequestBody SecurityGuard securityGuard) {
        SecurityGuard registeredSecurityGuard = securityGuardService.save(securityGuard);
        if (registeredSecurityGuard != null) {
            return ResponseEntity.ok(registeredSecurityGuard);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody SecurityGuard securityGuard) {
        SecurityGuard foundSecurityGuard = securityGuardService.findByEmail(securityGuard.getEmail());
        if (foundSecurityGuard != null && securityGuard.getPassword().equals(foundSecurityGuard.getPassword())) {
            // Return a token or success message
            return ResponseEntity.ok("Login successful"); // or a token
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
