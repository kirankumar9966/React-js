import React from "react";
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/home" className="navbar-brand"> React Hook Example </Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><link className="nav-link">Login</link></li>
                    <li className="nav-list"><link className="nav-link">Registratio</link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar