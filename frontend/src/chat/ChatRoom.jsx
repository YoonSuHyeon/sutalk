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


    const inputContent =  {
       bottom: '0'
    }
    //Input Style
    const inputStyle = {
        borderRadius: '20px',
        padding: '15px',

    };

    const dummyArray = ['one', 'two', 'three', 'four', 'five'];

    return (
        <div style={divStyle}>
            <div style={divStyle2}>
                채팅방
                <div>
                    <ul>
                        {dummyArray.map((value, index) => {
                            return <li itemType={''}  key={index}>{value}</li>
                        })}
                    </ul>
                </div>
                <div  >
                    <input style={inputStyle}
                           name="content"
                           placeholder="내용"
                    />
                    <button>전송</button>
                </div>
            </div>

        </div>

    )
}

export default ChatRoom;