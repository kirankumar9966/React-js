import React, { Component } from 'React'
class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#" className="navbrand">Kiran kumar</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link">Home</a></li>
                        <li className="nav-item"><a className="nav-link">About</a></li>
                        <li className="nav-item"><a className="nav-link">price</a></li>
                        <li className="nav-item"><a className="nav-link">user</a></li>
                        <li className="nav-item"><a className="nav-link">contacts</a></li>
                        
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar