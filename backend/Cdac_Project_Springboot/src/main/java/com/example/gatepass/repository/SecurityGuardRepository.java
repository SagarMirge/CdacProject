package com.example.gatepass.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.gatepass.model.SecurityGuard;


public interface SecurityGuardRepository extends JpaRepository<SecurityGuard, Long> {
    SecurityGuard findByEmail(String email);
}
