import React, { useState } from 'react';
import logoWhite from '../images/logo-white.png';
import Popup from './Popup';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [email, setMail] = useState("");
    const [password, setPass] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = { email, password }
        setMail("");
        setPass("");

        fetch('http://localhost:3001/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then((result) => result.json())
            .then((res) => {
                if (res.error) return alert(res.error)
                console.log(" res ====>", res)
            })
    }

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark" >
                <div className="container py-2">
                    <img src={logoWhite} height="50px" alt="logo" />
                    <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#mainNavigation" area-control="mainNavigation" area-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavigation">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className='m-2' id="loginBtn" onClick={togglePopup}>Login</button>
                                {
                                    isOpen && <Popup
                                        content={<div>
                                            <input type="email" className='login-input m-2' placeholder='Email Address' value={email} onChange={(e) => setMail(e.target.value)} /><br />
                                            <input type="password" className='login-input m-2' placeholder='Password' value={password} onChange={(e) => setPass(e.target.value)} /><br />
                                            <button className='signBtn' onClick={handlesubmit}>SIGN IN</button><br />
                                            <a href='/kjhkj' className='loginA'>Forgot your Password ?</a>
                                            <button className='googleBtn' id="facebook"><i className="fab fa-facebook-f m-2"></i>facebook</button>
                                            <button className='googleBtn' id='google'><i className="fab fa-google m-2" id="icon-G"></i>SIGN IN</button>
                                        </div>}
                                        handleClose={togglePopup}
                                    />
                                }
                            </li>
                            <li><button id="joinBtn" ><a href='/register' style={{ fontSize: "17px", color: "white" }}>Join Now</a></button></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar