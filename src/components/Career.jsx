import React, { useState } from 'react'
import logoWhite from '../images/logo-white.png';

function Career() {
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
        <div className='container'>
          <div className='row justify-content-center'><h3 className='pt-3'>Great! You are about to complete your career details</h3>
          </div>
        </div>
        <div className='careerDetails'>
          <select name="country" id="career-input" onChange={handleChange} value={inputs.country}>
            <option value='country'>Country</option>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='Australia'>Australia</option>
            <option value='Canada'>Canada</option>
            <option value='Japan'>Japan</option>
            <option value='UK'>U.K.</option>
          </select>
          <select name="education" className='' id="career-input" onChange={handleChange} value={inputs.education}>
            <option value='Education'>Education</option>
            <option >High School</option>
            <option value='Diploma'>Diploma</option>
            <option value='Bachelors'>Bachelors</option>
            <option value='Masters'>Masters</option>
            <option value='degree'>Associates degree</option>
            <option value='phd'>P.H.D</option>
            <option value='technical class'>Technical School</option>
            <option value='md'>M.D.</option>
          </select><br />
          <select name="employee" className='' id="career-input" onChange={handleChange} value={inputs.employee}>
            <option value='Employed In'>Employed In</option>
            <option value='Private Sector'>Private Sector</option>
            <option value='Government Public/Sector'>Government Public/Sector</option>
            <option value='Civil Services'>Civil Services</option>
            <option value='Defence'>Defence</option>
            <option value='Business/ Self Employed'>Business/ Self Employed</option>
            <option value='Not Working'>Not Working</option>
          </select>
          <br />
          <select name="occupation" id="career-input" onChange={handleChange} value={inputs.occupation}>
            <option value='Occupation'>Occupation</option>
            <option value='Looking for job'>Looking for job</option>
            <option value='Not working'>Not working</option>
            <option value='Retired'>Retired</option>
            <option value='Student'>Student</option>
          </select>
          <br />
          <select name="income" id="career-input" onChange={handleChange} value={inputs.income}>
            <option >Annual Income</option>
            <option >No Income</option>
            <option >Rs. 0-1 Lakh</option>
            <option >Rs. 1-2 Lakh</option>
            <option >Rs. 2-3 Lakh</option>
            <option >Rs. 3-4 Lakh</option>
            <option >Rs. 4-5 Lakh</option>
            <option >Rs. 5-7.5 Lakh</option>
            <option >Rs. 7.5-10 Lakh</option>
            <option >Rs. 10-15 Lakh</option>
            <option >Rs. 15-20 Lakh</option>
            <option >Rs. 20-30 Lakh</option>
            <option >Rs. 30-50 Lakh</option>
            <option >Rs. 1 crore & above</option>
          </select>
          <br />
          <button className='complete-register m-3' onClick={handleSubmit}>Complete Registration</button>
          <button className='cont-register'><a href='/family' style={{ color: "white", textDecoration: "none" }}>Continue</a></button>
        </div>
      </section>
    </div>
  )
}

export default Career;