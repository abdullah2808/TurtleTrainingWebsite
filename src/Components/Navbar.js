import React from 'react';
import "../App.css";



class Navbar extends React.Component {
    render() {
        return(
            <div >
            <nav className ="navbar">
                <ul>
                    <il> <a className = "navbartext">Home </a></il>
                    <il> <a className = "navbartext">About Me </a></il>
                    <il> <a className = "navbartext">Github </a></il>
                </ul>
                <div>
                    <a className = "navbartext"> Contact Me</a>
                </div>
            </nav>
            </div>
    
        )
    }
}

export default Navbar;