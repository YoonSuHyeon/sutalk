package com.example.sutalk.controller;

import com.example.sutalk.member.model.LoginForm;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
public class MemberController {

    @PostMapping("/login")
    public String login(@RequestBody LoginForm login) {
        //TODO 테스트
        System.out.println(login.getId());
        System.out.println(login.getPassword());
        return "Success";
    }


}
