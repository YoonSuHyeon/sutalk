import React from "react";

function ChatRoom() {

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

    return (
        <div style={divStyle}>
            <div style={divStyle2}>
                채팅방
            </div>
        </div>

    )
}

export default ChatRoom;