import './App.css';
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login() {
    // let isLogin = false;
    const [inputs, setInputs] = useState({
        id: '',
        password: ''
    })
    const navigate = useNavigate();
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
        ).then(data => {
            console.log(data)
            if (data.ss === "Success") {
                navigate("/home")
            }
        })
    }

    return (
        <div>
            <header>
                <h2> SuTalk</h2>
            </header>

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

            <Link to="/signup">
                <button>회원가입</button>
            </Link>
        </div>
    )

}

export default Login;