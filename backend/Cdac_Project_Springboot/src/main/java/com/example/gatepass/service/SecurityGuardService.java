package com.example.gatepass.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.gatepass.model.SecurityGuard;
import com.example.gatepass.repository.SecurityGuardRepository;

@Service
public class SecurityGuardService {

    @Autowired
    private SecurityGuardRepository securityGuardRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public SecurityGuard save(SecurityGuard securityGuard) {
        // Encrypt the password before saving
        securityGuard.setPassword(passwordEncoder.encode(securityGuard.getPassword()));
        return securityGuardRepository.save(securityGuard);
    }

    public SecurityGuard findByEmail(String email) {
        // Find by email
        return securityGuardRepository.findByEmail(email);
    }
}
