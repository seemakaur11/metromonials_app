import React, { useState } from 'react';
import logoWhite from '../images/logo-white.png';
import Popup from './Popup';
import UserPopup from './UserPopup';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShow, setShow] = useState(false)
    const [email, setMail] = useState("");
    const [password, setPass] = useState("")

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
    const userPopup = () => {
        setShow(!isShow);
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
                            <li className="nav-item">
                                <button id="joinBtn" onClick={userPopup}>Join Now</button>{
                                    isShow && <UserPopup
                                        content={<div>
                                            <label className='labelName'>First Name: </label>
                                            <input type="text" placeholder='first name' id="input-name" /><br />
                                            <label className='labelName'>Last Name: </label>
                                            <input type="text" placeholder='last name' id="input-name" /><br />
                                            <label className='labelName'>gender: </label>
                                            <input type="radio" name="gender" value="male" className='m-2' />Male
                                            <input type="radio" name="gender" value="female" className='m-2' />Female<br />
                                            <label className='labelName'> Enter your birthday:</label><br />
                                            <input type="date" name="bday" id="input-name" />
                                            <label className='labelName'>Education: </label><br />
                                            <select name="education" id="input-name">
                                                <option value='Education'>Education</option>
                                                <option value='High School'>High School</option>
                                                <option value='Diploma'>Diploma</option>
                                                <option value='Bachelors'>Bachelors</option>
                                                <option value='Masters'>Masters</option>
                                                <option value='degree'>Associates degree</option>
                                                <option value='phd'>P.H.D</option>
                                                <option value='technical class'>Technical School</option>
                                                <option value='md'>M.D.</option>
                                            </select><br />
                                            <label className='labelName'>Country: </label>
                                            <select name="country" id="input-name">
                                                <option value='country'>Country</option>
                                                <option value='India'>India</option>
                                                <option value='USA'>USA</option>
                                                <option value='Australia'>Australia</option>
                                                <option value='Canada'>Canada</option>
                                                <option value='Japan'>Japan</option>
                                                <option value='UK'>U.K.</option>
                                            </select><br />
                                            <label className='labelName'>Email: </label><br />
                                            <input type="email" placeholder='email' id="input-name" />
                                            <label className='labelName'>Password: </label>
                                            <input type="password" placeholder='password' id="input-name" />
                                            <div>
                                                <button className='m-2' id="registerBtn">Submit</button>
                                                <button id="cancelBtn">Cancel</button>
                                            </div>
                                        </div>
                                        }
                                        handleClose={userPopup}
                                    />
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar