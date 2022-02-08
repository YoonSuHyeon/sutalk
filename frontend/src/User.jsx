import React from "react";
import {useNavigate} from "react-router-dom";

function User() {

    const navigate = useNavigate()

    const profile = () => {
        navigate("/profile")
    }
    return (

        <div>
            <ul>
                <li onClick={profile}>유저 1</li>
                <li>유저 2</li>
                <li>유저 3</li>
            </ul>
        </div>


    );
}

export default User;