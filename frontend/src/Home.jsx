import React from "react";
import Friend from "./Friend";
import Chat from "./Chat";

function Home() {
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


    const onClick2 = (e) => {
        console.log(e)
    }
    return (
        <div style={divStyle}>
            <div style={divStyle2}>
                <div>
                    <h2>SuTalk</h2>
                </div>
                <div>
                    <button id="friend" onClick={onClick2}>친구</button>
                    <button id="chat" onClick={onClick2}>채팅</button>
                </div>
                <div>
                    <Friend/>
                    <Chat/>
                </div>

            </div>
        </div>
    );
}

export default Home;