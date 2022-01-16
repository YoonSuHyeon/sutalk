package com.example.sutalk.controller;

import com.example.sutalk.member.model.LoginForm;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/members")
public class MemberController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginForm login) {
        //TODO 테스트
        System.out.println(login.getId());
        System.out.println(login.getPassword());

        Map<String, String> map = new HashMap<>();
        String ss= login.same() ? "Success" : "Fail";
        System.out.println(ss);
        map.put("ss", ss);

        return map;
    }


}
