import React from 'react'
import logoWhite from '../images/logo-white.png';

function Footer() {
    return (
        <div>
            <section style={{ backgroundColor: "#D20200" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3 className='followH3 pt-3'>Follow us on:</h3>
                            <div className='social-media'>
                                <i className="fa-brands fa-facebook m-2"></i>
                                <i className="fa-brands fa-instagram m-2"></i>
                                <i className="fa-brands fa-twitter-square m-2"></i>
                            </div>
                        </div>
                        <div className='col-md-6 pt-4'>
                            <p className='footerParagraph'>SHADI® is a <a href='/lkjjl'> registered trademark</a> and should not be used without permission
                                © Copyrights Shadi.com 1997 - 2022. All rights reserved. </p>
                            <div className='footerParagraph'>
                                <img src={logoWhite} alt='logo white' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Footer