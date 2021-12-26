package com.example.sutalk.member.service.impl;

import com.example.sutalk.member.model.Member;
import com.example.sutalk.member.repository.MemberRepository;
import com.example.sutalk.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public void signUp(String name) {
        Member member = new Member();
        member.setName(name);

        memberRepository.save(member);
    }
}
