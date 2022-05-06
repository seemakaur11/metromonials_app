import React from 'react'
import logo from '../images/logo.png'
function Navbar() {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark" >
                <div className="container py-2">
                    <img src={logo} height="50px" alt="" />
                    <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#mainNavigation" area-control="mainNavigation" area-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavigation">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className='m-2' id="loginBtn">Login</button>
                            </li>
                            <li className="nav-item">
                                <button id="joinBtn">Join Now</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar