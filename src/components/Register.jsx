import React, { useState } from 'react';
import logoWhite from '../images/logo-white.png';
import renu from '../images/renu.jpg'
import Footer from './Footer';


function Register() {
    const [inputs, setInputs] = useState({});
    const [formError, setFormError] = useState({});

    const handleChange = (event) => {
        event.preventDefault()
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        setInputs({
            firstName: "",
            lastName: "",
            gender: "",
            dateOfBirth: "",
            email: "",
            password: ""
        })
        fetch('http://localhost:3001/register', {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: { 'Content-Type': 'application/json' },
        }).then((result) => result.json())
            .then((response) => {
                console.log(" response ++++++++", response)
            })
        setFormError(validate(inputs))
    }
    const validate = (values) => {
        const errors = {}
        if (!values.firstName) {
            errors.firstName = 'First name is required'
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required'
        }
        if (!values.dateOfBirth) {
            errors.dateOfBirth = 'Date of birth is required'
            console.log(" error =====>", errors)
        }
        if (!values.email) {
            errors.email = 'Email is required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = 'Password is required'
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i.test(values.password)) {
            errors.password = 'Invalid Password';
        }
        console.log(" error =======>", errors)
        return errors
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
            <section>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={renu} alt="renu" className='registerImg' />
                        </div>
                        <div className='col-md-6 pt-2' id="blockForm">
                            <div>
                                First Name: <input type="text" placeholder='first name' id="input-name" name="firstName" onChange={handleChange} value={inputs.firstName} /><br />
                                <p style={{ color: "red" }}>{formError.firstName}</p>
                                Last Name: <input type="text" placeholder='last name' id="input-name" name="lastName" onChange={handleChange} value={inputs.lastName} /><br />
                                <p style={{ color: "red" }}>{formError.lastName}</p>
                                <div onChange={handleChange}>
                                    Gender: <input type="radio" name="gender" className='' value="male" />Male
                                    <input type="radio" name="gender" className='m-2' value="female" />Female
                                </div>
                                Birth: <input type="date" name="dateOfBirth" id="input-name" className='' onChange={handleChange} value={inputs.dateOfBirth} />
                                <p style={{ color: "red" }}>{formError.dateOfBirth}</p>

                                Email: <input type="email" placeholder='email' id="input-name" name="email" className='' onChange={handleChange} value={inputs.email} /><br />
                                <p style={{ color: "red" }}>{formError.email}</p>
                                Password: <input type="password" placeholder='password' id="input-name" name="password" className='' onChange={handleChange} value={inputs.password} />
                                <p style={{ color: "red" }}>{formError.password}</p>
                                <div>
                                    <button className='m-2' id="registerBtn" onClick={handleSubmit}>Submit</button>
                                    <button id="cancelBtn"><a href='/career' style={{ color: "white", textDecoration: "none" }}>Continue</a></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Register;