package com.example.gatepass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gatepass.model.VisitorPass;



public interface VisitorPassRepository extends JpaRepository<VisitorPass, Long> {

}
