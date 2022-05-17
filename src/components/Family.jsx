import React, { useState } from 'react'
import logoWhite from '../images/logo-white.png';

function Family() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        console.log(" value =====>", event.target.value)
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }
    const handleSubmit = () => {
        console.log("submit data ======>", inputs)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top" style={{ backgroundColor: "#76c7c0" }}>
                <div className="container py-2">
                    <a href='/'>
                        <img src={logoWhite} height="50px" alt="logo" />
                    </a>
                </div>
            </nav >
            <section style={{ backgroundColor: "rgb(255 247 247)" }}>
                <div className='container' style={{ backgroundColor: "rgb(255 247 247)" }}>
                    <div className='row justify-content-center'><h3 className='pt-4'>We would love to know about your family.</h3></div>
                </div>
                <div className='family-div'>
                    <select name="family" className='' id="career-input" onChange={handleChange} value={inputs.family}>
                        <option value='Family-type'>Family-type</option>
                        <option value='Joint Family'>Joint Family</option>
                        <option value='Not working'>Nuclear FAmily</option>
                        <option value='Others'>Others</option>
                    </select>
                    <select name="father" className='' id="career-input" onChange={handleChange} value={inputs.father}>
                        <option value='Father Occupation'>Father's Occupation</option>
                        <option value='Business'>Business/Entrepreneur</option>
                        <option value='Not working'>Service-Private</option>
                        <option value='Others'>Service-Govt./PSU</option>
                        <option value='Others'>Army/Armed Forces</option>
                        <option value='Others'>Civil Services</option>
                        <option value='Others'>Retired</option>
                        <option value='Others'>Not Employed</option>
                        <option value='Others'>Expired</option>
                    </select><br />
                    <input type="text" name="familyLiving" placeholder='Family living in' id="family-live" onChange={handleChange} value={inputs.familyLiving} /><br />
                    <input type="text" name="contactAddress" placeholder='Contact Address' id="family-live" onChange={handleChange} value={inputs.contactAddress} /><br />
                    <textarea placeholder='About My Family' id="family-message"></textarea><br />
                    <button className='profileBtn' onClick={handleSubmit}>Add to My profile</button>
                    <button className='profileContinue m-3'><a href='/verify' style={{ color: "white", textDecoration: "none" }}>Continue</a></button>
                </div>
            </section>

        </div>
    )
}

export default Family;