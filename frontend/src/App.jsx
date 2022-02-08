import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Home from "./home/Home";
import ChatRoom from "./chat/ChatRoom";
import Profile from "./Profile";


function App() {
    function getToken() {
        return false;
    }

    const token = getToken();
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="home" element={token ? <Login/> : <Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/chatroom" element={<ChatRoom/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}


export default App;


