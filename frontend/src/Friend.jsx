import React from "react";
import {useNavigate} from "react-router-dom";

function Friend() {
    const navigate = useNavigate()

    const profile = () => {
        navigate("/profile")
    }
    return (
        <div>
            <ul>
                <li onClick={profile}>친구 1</li>
                <li>친구 2</li>
                <li>친구 3</li>
            </ul>
        </div>
    );
}

export default Friend;