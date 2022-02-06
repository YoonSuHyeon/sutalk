import './App.css';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
function SignUp() {

    //Div Style
    const divStyle = {
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: '90px 0 90px 0',
        height: '100vh',
        backgroundColor: "grey"
    };

    const divStyle2 = {
        textAlign: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '35%',
        boxShadow: '11px 12px 13px 12px rgb(207,207,207)',
        paddingTop: '30px',
        borderRadius: '60px',
        backgroundColor: 'white'
    };

    const navigate = useNavigate();

    return(
        <div style={divStyle}>
            <div style={divStyle2}>

                <div>
                    <h2> 회원가입 화면 </h2>
                </div>

                <div>
                    아이디<input placeholder="사용할 아이디 입력"/>
                </div>
                <div>
                    비밀번호<input placeholder="비밀번호 입력"/>
                </div>

                <div>
                    닉네임<input placeholder="닉네임"/>
                </div>

                <div>
                    <button>가입</button>
                    <button onClick={()=>{ navigate(-1) }}>취소</button>
                </div>
            </div>



        </div>
    )
}
export default SignUp;