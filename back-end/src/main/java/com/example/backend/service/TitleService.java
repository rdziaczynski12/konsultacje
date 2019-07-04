package com.example.backend.service;

import com.example.backend.model.Title;
import com.example.backend.repository.TitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class TitleService {

    @Autowired
    private TitleRepository titleRepository;

    public Collection<Title> getAllTitle(){
        return titleRepository.findAll();
    }
}
