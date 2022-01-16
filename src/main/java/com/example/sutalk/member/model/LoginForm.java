package com.example.sutalk.member.model;

public class LoginForm {
    private String id;
    private String password;

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public boolean same() {
        return id.equals(password);
    }
}
