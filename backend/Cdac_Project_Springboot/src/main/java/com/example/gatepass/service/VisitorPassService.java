package com.example.gatepass.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gatepass.model.VisitorPass;
import com.example.gatepass.repository.VisitorPassRepository;

@Service
public class VisitorPassService {
    @Autowired
    private VisitorPassRepository visitorPassRepository;

    public List<VisitorPass> getAllVisitorPasses() {
        return visitorPassRepository.findAll();
    }

    public VisitorPass getVisitorPassById(Long id) {
        return visitorPassRepository.findById(id).orElseThrow(() -> new RuntimeException("Visitor Pass not found"));
    }

    public VisitorPass saveVisitorPass(VisitorPass visitorPass) {
        return visitorPassRepository.save(visitorPass);
    }

    public void deleteVisitorPass(Long id) {
        visitorPassRepository.deleteById(id);
    }
}
