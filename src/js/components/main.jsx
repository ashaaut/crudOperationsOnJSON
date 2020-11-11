import React from 'react';
import './../../assets/styles/main.css'
import NavBar from './navbar.jsx';
import Employees from './employees'
function Main(){
        return(
            <div className="main-container">
                <div className="nav-container">
                    <NavBar/>
                </div>
                <div className="emp-container">
                    <Employees/>
                </div>
            </div>
        )
}
export default Main;
