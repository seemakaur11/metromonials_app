import React from 'react'
import logoWhite from '../images/logo-white.png';
function Verify() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top" style={{ backgroundColor: "#76c7c0" }}>
                <div className="container py-2">
                    <a href='/'>
                        <img src={logoWhite} height="50px" alt="logo" />
                    </a>
                </div>
            </nav >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div style={{ textAlign: "center" }}>
                        <h4 className='pt-4'>We are almost done!</h4>
                        <p className='verifyP'>To let you connect with other members or for you to get contacted by them, we need to verify that this number belongs to you<br />
                            Just click the button below and follow the instructions - it will just take a few seconds</p>
                    </div>
                    <div className='pt-5'>
                        <label className='mobileLabel m-3'>Mobile number</label>
                        <input type="text" value="+91" placeholder="mobile-number" className='mobileValue' />
                        <input type="text" placeholder="mobile-number" className='mobileNumber' /><br />
                        <button className='verifyNumber'>Verify this number</button>
                    </div>
                    <div className='verifyParagraph pt-5'>
                        <p>We would like to inform you that by verifying the above number you are agreeing to receive calls from the customer support team of Jeevansathi, even<br /> though your number is registered with the NCPR.</p>
                        <p>Please note that you can change your preference from the ‘Alert Manager Settings’ page on the Desktop site any time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verify