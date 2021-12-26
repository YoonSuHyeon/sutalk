package com.example.sutalk.member.repository;

import com.example.sutalk.member.model.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class MemberRepositoryTest {
    @Autowired
    private MemberRepository memberRepository;

    @Test
    @Transactional
    @Rollback(value = false)
    public void test_insert() {
        Member member = new Member();
        member.setName("TEST_NAME");

        memberRepository.save(member);
    }

    @Test
    @Transactional
    @Rollback(value = false)
    public void test_update() {
        Member findMember = memberRepository.getById(1L);
        findMember.setName("TEST_NAME2");

        memberRepository.save(findMember);
    }

}