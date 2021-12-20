package com.example.sutalk.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloWorldController {

    @GetMapping("hello")
    public List<String> hello() {
        return List.of("Hello", "안녕하세요");
    }
}
