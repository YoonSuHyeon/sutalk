import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";


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
            </Routes>
        </div>
    );
}


export default App;


