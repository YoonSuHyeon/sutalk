import React, {useState} from "react";
import friend from "../User";
import HomeList from "./HomeList";

function Home() {

    const [clickId, setClickId] = useState(1);

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


    const changeList = (e) => {
        if (e.currentTarget.id === "User")
            setClickId(1);
        else setClickId(2);
    }

    return (
        <div style={divStyle}>
            <div style={divStyle2}>
                <div>
                    <h2>SuTalk</h2>
                </div>
                <div>
                    <button id="User" name={"User"} onClick={changeList}>유저</button>
                    <button id="chat" onClick={changeList}>채팅</button>
                </div>
                <div>
                    <HomeList list={clickId}/>
                </div>

            </div>
        </div>
    );
}

export default Home;