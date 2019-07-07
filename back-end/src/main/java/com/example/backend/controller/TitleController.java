package com.example.backend.controller;

import com.example.backend.model.Title;
import com.example.backend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping({"/api"})
public class TitleController {

    @Autowired
    TitleService titleService;

    @GetMapping("/get/title")
    public Collection<Title> getAllTitle(){
        return titleService.getAllTitle();
    }

}
