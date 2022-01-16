import React from "react";
import Friend from "./Friend";
import Chat from "./Chat";

function Home() {

    const onClick2 = (e) => {
        console.log(e)
    }
    return (
        <div>
            <h2>SuTalk</h2>
            <button id="friend" onClick={onClick2}>친구</button>
            <button id="chat" onClick={onClick2}>채팅</button>
            <Friend/>
            <Chat/>
        </div>
    );
}

export default Home;