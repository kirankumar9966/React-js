import React from 'react';
import {Link, link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav>
            <link to='/home'>React logo</link>
            <div>
                <ul>
                <Link to='/home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Serivce'>Serivce</Link>
                <Link to='/Contact'>Contact</Link>
                </ul>
            </div>
        </nav>
    }
}
export default Navbar