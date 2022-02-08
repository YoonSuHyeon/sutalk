import React from "react";
import {useNavigate} from "react-router-dom";

function Chat() {

    const navigate = useNavigate();

    const chat = () => {
        navigate("/chatroom");
    }
    return (
        <div>
            <ul>
                <li onClick={chat}>채팅 1</li>
                <li>채팅 2</li>
                <li>채팅 3</li>
            </ul>
        </div>
    )
}

export default Chat;