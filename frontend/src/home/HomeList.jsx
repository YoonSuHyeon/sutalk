import React, {useState} from "react";
import User from "../User";
import Chat from "../chat/Chat";

function HomeList(props) {


    return (
        <div>
            {
                props.list === 1 ? <User/> : <Chat/>
            }
        </div>
    );
}

export default HomeList;