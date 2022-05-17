import React from 'react'
import homeImg from '../images/homeImg.jpg';
import icon3 from '../images/icon-v3.png';
import icon4 from '../images/icon-v4.png';
import icon5 from '../images/icon-v5.png';
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import shadi from '../images/shadi.png'
import shieldIcon from '../images/shield-icon.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
    const options = {
        autoplay: true,
        slideBy: 1,
        dots: true,
    };

    return (
        <div>
            <Navbar />
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
                                <a href='/hindu'>United states</a> | <a href='/hindu'>Canada</a> | <a href='/hindu'>United Kingdom</a> |
                                <a href='/hindu'>Australia</a> | <a href='/hindu'>India</a> | <a href='/hindu'>UAF Pakistan</a> |
                                <a href='/hindu'>Switzerland</a> | <a href='/hindu'>France</a> | <a href='/hindu'>Netherland</a> | <a href='/hindu'>Signapore</a>
                            </p>
                            <button>Read more</button>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4 className='blogH4'>Relationship<br /> Advise</h4>
                            <img src={blog1} className='img-fluid' alt='blog1' id="blogImg" />
                            <p className="card-text py-2">A collection of blogs on relationships, marriage, meetups and love.
                                Following these tips and advise can help you in
                                your relationship journey. Makes you better prepared
                                to have great relationships.</p>
                            <a href="/read" className='blogA'>read more</a>
                        </div>
                        <div className='col-md-4'>
                            <h4 className='blogH4'>Find Someone Special In Your<br /> City</h4>
                            <img src={blog2} className='imgBlog2' alt='blog2' id="blogImg" />
                            <div>
                                <h3 className='blog2H3'>Welcome To Best Matrimony Santa Ana, California</h3>
                            </div>
                            <p className="card-text py-2">Connect with someone special in your city and nearby.
                                Our members are educated and looking for long term relationships.
                                If you are looking for meaningful connections we can help in life partner search. </p>
                            <a href="/sd" className='blogA'>read more</a>
                        </div>
                        <div className='col-md-4'>
                            <h4 className='blogH4'>Marriage ties two families in a bond of lifetime relationship!</h4>
                            <img src={blog3} className='imgBlog3' alt='blog3' id="blogImg" />
                            <p className='card-text py-2'>Marriage is the most important decision in your life time.
                                Parents and close family members can play a meaningful role in search for a lifelong companion. </p>
                            <a href="/read" className='blogA pt-3'>read more</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* members section */}
            <section>
                <div className='container py-4'>
                    <div className='row justify-content-center'>
                        <h1 className='memberH1'>MEET OUR MEMBERS - SUCCESSFUL <br />PROFESSIONAL SINGLES</h1>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='shield'>
                                <img src={icon3} alt="icon" className='shield-icon' />
                            </div>
                            <div className='memberP'>
                                <p>We have members from all religions and ages.
                                    Our most popular age group is from 27 - 60. Almost
                                    all our singles are successful professionals and businessmen.
                                    Creating a great profile is essential in online matchmaking and
                                    adding your best photo to your profile. We offer abundant tips
                                    and relationship advice through our blogs.
                                    It is our passion to help you in the best possible way.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='shield'>
                                <img src={shieldIcon} alt="shield-icon" />
                            </div>
                            <div className='memberP'>
                                <p>Shadi.com is an international matchmaking platform.
                                    Through which people can find love and long lasting relationships.
                                    Our profiles are verified with cell phone and email verification.
                                    We make use of the latest technology for fraud detention and SSL
                                    encryption. Non-active users are removed from our network. We are
                                    committed to providing a safe web service for like-minded singles
                                    in your region.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* story slider */}
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h1 className='storyH1'>SUCCESS STORIES</h1>
                    </div>
                    <OwlCarousel items={1} className="owl-theme" options={options} margin={5}>
                        <div className='storySlider'>
                            <p className='storyP'>Renu joined Shadi.com after a strong suggestion from
                                her parents during the pandemic. Ishan caught her
                                interest in her potential match list. She sent him a
                                personal email and Ishan responded back. They exchanged
                                emails, spoke on the phone and video chats for a couple of weeks.
                                They both had similar interests, religious beliefs, likes and dislikes.
                                They were both keen to meet in person and Ishan & Renu had a great time
                                in their first meeting. They are now married in a romantic small wedding
                                in Seattle.</p>
                            <p className='storyP'>Thanks Shadi matchmaking</p>
                            <strong>Renu S  - Seattle</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>Last year after signing up for a 6 months term with Shadi.com.
                                Had no luck initially for some weeks.
                                Few months later I got matched with a
                                wonderful and caring man. </p>
                            <p className='storyP'>At first I could not imagine or think
                                it was possible to meet my partner on
                                a site.</p>
                            <p className='storyP'>I am in the San Francisco Bay area with my
                                fiance, soon to be married in the near future.
                                Never give up hope on good things in life!</p><p className='storyP'>Thank you</p>
                            <strong>Marium S  - San Francisco</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>After joining Shadi.com for almost a year,
                                I found a nice girl in Los Angeles who
                                seemed to have the qualities that I wanted in a partner.</p>
                            <p className='storyP'>She was everything that I could ask for in a match.</p>
                            <p className='storyP'>We first met outside Costa, because of Covid. Conversations
                                continued for almost 6 months, now we are engaged! Thinking
                                of getting married in 2021.</p>
                            <p className='storyP'>Thank you Shadi.com for your help.</p>
                            <strong>Gaurav S - Los Angeles</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>I met my fiancé on Shadi.com. I came across
                                her profile, and messaged her instantly.</p>
                            <p className='storyP'>We soon began chatting every day.
                                We are both locals to the Delhi area,
                                so we met up after chatting online for a month.</p>
                            <p className='storyP'> Soon, we met each others families and
                                decided to get engaged. Our wedding will
                                take place next year.</p>
                            <p className='storyP'>Thank you Shadi.com</p>
                            <strong>Ajeet S - Delhi</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>My spouse Ankita and I were both living in Australia
                                when we were finally connected through Shadi.com.
                                I was in Sydney while she was living in Melbourne,
                                shortly after matching, we had  many phone conversations
                                and video chats, and Ankita decided to visit me in Sydney.</p>
                            <p className='storyP'>
                                I proposed to her 4 months after our initial meeting,
                                and both our families were delighted. We could not
                                travel to Delhi due to COVID-19 restrictions. We got
                                married in Sydney with our family looking on via Zoom
                                in India, and plan on having a big wedding in Delhi next year.
                                Thank you Shadi.com.
                            </p>
                            <strong>Deepak V - Sydney</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>I met my husband through Shadi.com and we dated for one year.
                                We were both local to the Houston area, and went on many
                                dates in the downtown area. </p>
                            <p className='storyP'>Unfortunately, our wedding plans were disrupted by
                                the COVID-19 pandemic.However, we did not let this
                                stop us and decided to have an intimate wedding ceremony. </p>
                            <p className='storyP'>Both our families were present, and our wedding
                                was even broadcast through zoom! All in all we
                                are so happy with how everything turned out. </p>
                            <strong>Samira C - Houston, Texas</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>After my divorce my family and friends
                                wanted me to get married. I met my wife
                                through Shadi.com.</p>
                            <p className='storyP'> It was a complete surprise
                                for me for an unexpected outcome.
                                She lived in Dallas and I live on the east coast.</p>
                            <p className='storyP'>She flew over  to visit family and met me. She is
                                kind, generous and connected to my six year old
                                son immediately. We are now a married couple thanks
                                to Shadi.com.</p>
                            <strong>Karn P  - New Jersey</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>I want to thank Shadi.com for making me meet my life partner.
                                I have found a great friend in my Life partner. I am excited
                                to start a new phase of my life with him in Canada. This shift
                                from India has only been possible through his continuous support
                                and unconditional care and love.</p>
                            <strong>Heena M  - India</strong>
                        </div>
                        <div className='storySlider'>
                            <p className='storyP'>Their journey from <a href='/sfd'>shadi.com</a> to reality of taking vows.While both our families
                                kept searching through matrimonial ads in the local news paper, we decided to take our fate into
                                our own hands. After joining shadi.com, we met over a cup of coffee.
                                Our families didn't believe that one could find a life partner on such website.<a href='/dfdg'>shadi.com</a>
                                proved them wrong. We found each other when we least expected it and decided on forever. Thank you  </p>
                            <strong>A.Kaur - Delhi</strong>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            {/* shadi.com site */}
            <section className='' style={{ backgroundColor: "#f3f3f3" }}>
                <div className='container py-3'>
                    <div className='row justify-content-center'>
                        <h1 className='storyH1'>SHADI.COM BEST ONLINE MATRIMONY SITE</h1>
                        <p className='shadiP'><img src={shadi} alt="shadi" className='shadiImg' />We have been making memorable memories
                            through matchmaking for more than 20 years. It all began with
                            creating many successful marriages for family and friends in
                            upstate New York. To take the essence of matchmaking to the next
                            level Shadi.com was created. Most important component of our network
                            is that users find their match through our platform. We are proud to
                            mention that millions of users have been impacted with our online
                            marriage portal with happy endings. Our commitment lies in helping
                            members meet someone special for long lasting relationship. Today,
                            Shadi.com is known worldwide as one of the top introductions and
                            matrimonial services provider. We are happy to welcome you to our
                            matchmaking network and wish you success every step of the way.</p>
                        <hr id="hrShadi" />
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3 className='footerAbout'>ABOUT SHADI®</h3>
                            <p className='footerP py-4'>Shadi®.com is a <a href='/jjj'>registered</a> and <a href='/yyyy'>trademarked</a> corporation based
                                in the USA. We are a leading international matchmaking company
                                for singles globally. Through our network we want to make the
                                process of relationship journey relatively effortless.
                                All profiles are checked manually with phone verification to
                                ensure a safe environment for the users.</p>
                        </div>
                        <div className='col-md-2'>
                            <h3 className='footerH3'>NEED HELP?</h3>
                            <ul className='pt-4'>
                                <li><a href='/asd'>Member Login</a></li>
                                <li><a href='/asd'>Shadi® 101</a></li>
                                <li><a href='/asd'>Sign Up</a></li>
                                <li><a href='/asd'>Customer Support</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <h3 className='footerH3'>COMPANY</h3>
                            <ul className='pt-4'>
                                <li><a href='/ggg'>About Us</a></li>
                                <li><a href='/ggg'>Blog</a></li>
                                <li><a href='/ggg'>Helpful Tips</a></li>
                                <li><a href='/ggg'>Submit story</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <h3 className='footerH3'>PRIVACY & YOU</h3>
                            <ul className='pt-4'>
                                <li><a href='/tyty'>Terms of Use</a></li>
                                <li><a href='/tyty'>Privacy Policy</a></li>
                                <li><a href='/lkjj'>Contact Us</a></li>
                                <li><a href='/lkjj'>Refund Policy</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <h3 className='footerH3'>MORE</h3>
                            <ul className='pt-4'>
                                <li><a href='/ret'>Parent Involved</a></li>
                                <li><a href='/ret'>Intimate Cozy Wedding</a></li>
                                <li><a href='/ret'>Site Map</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Home