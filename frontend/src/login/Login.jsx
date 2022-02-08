import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login() {

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


    //Input Style
    const inputStyle = {
        borderRadius: '20px',
        padding: '15px',
        marginBottom: '15px'
    };


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
        <div style={divStyle}>
            <div style={divStyle2}>
                <div>
                    <div>
                        <h1>SuTalk</h1>
                    </div>
                    <input style={inputStyle}
                           name="id"
                           placeholder="아이디"
                           onChange={onChange}
                           value={id}
                    />
                    <div>
                        <input style={inputStyle}
                               name="password"
                               placeholder="비밀번호"
                               onChange={onChange}
                               value={password}
                        />
                    </div>

                    <div>
                        <button onClick={onLogin}>로그인</button>

                        <Link to="/signup">
                            <button>회원가입</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Login;