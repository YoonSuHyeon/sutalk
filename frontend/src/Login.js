import './App.css';
import React, {useEffect, useState} from "react";
import SignUp from "./SignUp";

function Login() {
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
    })
    const {id, password} = inputs

    const onChange = (e) => {
        const {name, value} = e.target

        const nextInputs = {
            ...inputs,
            [name]: value,
        }
        setInputs(nextInputs)

    }
    const onLogin = () => {
        //서버에 Post 요청
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, password})
        }
        fetch("/members/login", requestOptions).then((response =>
            response.json())
        ).then(data => onReset(data))

        // TODO 위에 있는 onReset 왜 안타는 지 확인 .
        // onReset('Success')
    }


    const onSignUp = () => {
        //회원가입 화면 이동
    }

    const onReset = (data) => {
        const reset = {
            id: "",
            password: ""
        }
        if (data === 'Success') {
            setInputs(reset)
        }

    }

    return (
        <div>
            <input
                name="id"
                placeholder="아이디"
                onChange={onChange}
                value={id}
            />
            <input
                name="password"
                placeholder="비밀번호"
                onChange={onChange}
                value={password}
            />
            <button onClick={onLogin}>로그인</button>
            <button onClick={onSignUp}>회원가입</button>
            <div>
                <b>값 : </b>
                {id}:({password})
            </div>
        </div>
    )

}


// const [message, setMessage] = useState([]);
// useEffect(() =>
//
//     fetch("/hello").then((response) => {
//         return response.json();
//     }).then(function (data) {
//         setMessage(data);
//     });
// }, []);
export default Login;