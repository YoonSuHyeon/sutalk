import './App.css';
import React, {useState} from "react";

function SignUp() {
    return(
        <div>
            <h2> 회원가입 화면 </h2>
            아이디<input placeholder="사용할 아이디 입력"/>
            비밀번호<input placeholder="비밀번호 입력"/>
            닉네임<input placeholder="닉네임"/>
            <button>가입</button>
            <button>취소</button>
        </div>
    )
}
export default SignUp;