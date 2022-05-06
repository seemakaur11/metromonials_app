import React from 'react'
import homeImg from '../images/homeImg.jpg';
import icon3 from '../images/icon-v3.png';
import icon4 from '../images/icon-v4.png';
import icon5 from '../images/icon-v5.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {

    return (
        <div>
            <section>
                <img src={homeImg} className='homeimg' alt="homeing" />
            </section>
            <section>
                <div className='container pt-3'>
                    <div className='row justify-content-center'>
                        <h1 className='homeH1'>Best Matrimony Site. Used By Millions Of Member Worldwide</h1>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={icon3} alt="icon3" />
                            <p className='homeP'>Millions of people register on Shadi.com looking for
                                someone special. This site is for
                                serious singles looking for a long
                                lasting relationship.</p>
                        </div>
                        <div className='col-md-4'>
                            <img src={icon4} alt="icon4" />
                            <p className='homeP'>80% of our members are highly educated.
                                Most of them are successful professionals
                                in their selected fields.</p>
                        </div>
                        <div className='col-md-4'>
                            <img src={icon5} alt="icon5" />
                            <p className='homeP'>Shadi.com uses a smart matchmaking system.
                                We present you matches based on current location,
                                education level lifestyle choices.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h1 className='homeH1'>BROWSE MATRIMONIAL PROFILES</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <OwlCarousel items={3} className="owl-theme" margin={8} >
                        <div className='m-2' id='slide1'>
                            <h3>RELIGION</h3>
                            <p>
                                <a href='/hindu'>Hindu</a> | <a href='/muslim'>Muslim</a> | <a href="/sikh">Sikh</a> | <a href="/christian">Christian</a> | <a href="/Budhist">Budhist</a> | <a href="/jain">Jain</a>
                            </p>
                            <button>Read more</button>
                        </div>
                        <div id='slide1'>
                            <h3>CASTE</h3>
                            <p>
                                <a href='/hindu'>Agarwal</a> | <a href='/hindu'>Arora</a> | <a href='/hindu'>Brahmin</a> | <a href='/hindu'>Gupta</a>
                                | <a href='/hindu'>Khatri</a> | <a href='/hindu'>Iyar</a> | <a href='/hindu'>Kayastha</a> | <a href='/hindu'>Maratha</a>
                                | <a href='/hindu'>Rajput</a> | <a href='/hindu'>Sunny</a> | <a href='/hindu'>Swetambar</a>
                            </p>
                            <button>Read more</button>
                        </div>
                        <div id='slide1'>
                            <h3>STATES</h3>
                            <p>
                                <a href='/ind'>California</a> | <a href='/hindu'>New York</a> | <a href='/hindu'>Texas</a> | <a href='/hindu'>New Jersey</a>
                                | <a href='/hindu'>Virginia</a> | <a href='/hindu'>illinois</a> | <a href='/hindu'>Florida</a> | <a href='/hindu'>Pennsylvania</a>
                                | <a href='/jhdj'>Michigan</a> | <a href='/jhdj'>Georgia</a>
                            </p>
                            <button>Read more</button>
                        </div>
                        <div id='slide1'>
                            <h3>INTERNATIONALS</h3>
                            <p>
                                <a href='/hindu'>Hindu</a>"|"
                            </p>
                            <button>Read more</button>
                        </div>

                    </OwlCarousel>
                </div>
            </section>

        </div>
    )
}

export default Home