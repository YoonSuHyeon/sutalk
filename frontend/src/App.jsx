import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import ChatRoom from "./ChatRoom";
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


