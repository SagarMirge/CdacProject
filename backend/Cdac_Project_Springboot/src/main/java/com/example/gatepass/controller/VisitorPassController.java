package com.example.gatepass.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gatepass.model.VisitorPass;
import com.example.gatepass.service.VisitorPassService;

@RestController
@RequestMapping("/api/visitorpasses")
public class VisitorPassController {
    @Autowired
    private VisitorPassService visitorPassService;

    @GetMapping
    public List<VisitorPass> getAllVisitorPasses() {
        return visitorPassService.getAllVisitorPasses();
    }

    @GetMapping("/{id}")
    public VisitorPass getVisitorPassById(@PathVariable Long id) {
        return visitorPassService.getVisitorPassById(id);
    }

    @PostMapping
    public VisitorPass createVisitorPass(@RequestBody VisitorPass visitorPass) {
        return visitorPassService.saveVisitorPass(visitorPass);
    }

    @DeleteMapping("/{id}")
    public void deleteVisitorPass(@PathVariable Long id) {
        visitorPassService.deleteVisitorPass(id);
    }
}