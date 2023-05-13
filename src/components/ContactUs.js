import React from 'react';
import '../style/ContactUs.css';

import linkedIn from '../img/linked-in.svg';
import mail from '../img/mail.svg';
import telegram from '../img/telegram.svg';

import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';
import pinterest from '../img/pinterest.svg';


const ContactUs = () => {
  return (
    <section className='contactUsSection center backImg'>
        <div className='contactUs'>
            <div className='contactUsLeftSection centerColumn'>
                <h2>Contact us</h2>
                <div className='workers'>
                    <div className='workerCard'>
                        <h3>Bob Brown</h3>
                        <p>Partner, Strategy</p>
                        <div className='socialMediaImgs'>
                            <div className='backBlueColor center'>
                                <img src={linkedIn} alt="linked-in" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={mail} alt="mail" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                    <div className='workerCard'>
                        <h3>Mary Smith </h3>
                        <p>Chief Accountant</p>
                        <div className='socialMediaImgs'>
                            <div className='backBlueColor center'>
                                <img src={linkedIn} alt="linked-in" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={mail} alt="mail" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                    <div className='workerCard'>
                        <h3>Nick Dark</h3>
                        <p>sales manager</p>
                        <div className='socialMediaImgs'>
                            <div className='backBlueColor center'>
                                <img src={linkedIn} alt="linked-in" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={mail} alt="mail" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                    <div className='workerCard'>
                        <h3>Mark Dowson</h3>
                        <p>Financial Director</p>
                        <div className='socialMediaImgs'>
                        <div className='backBlueColor center'>
                                <img src={linkedIn} alt="linked-in" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={mail} alt="mail" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                    <div className='workerCard'>
                        <h3>Betty Nilson</h3>
                        <p>designeer</p>
                        <div className='socialMediaImgs'>
                            <div className='backBlueColor center'>
                                <img src={linkedIn} alt="linked-in" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={mail} alt="mail" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                    <div className='workerCard'>
                        <h3>Adrian Scold</h3>
                        <p>Developer</p>
                        <div className='socialMediaImgs'>
                            <div className='backBlueColor center'>
                                <img src={linkedIn} alt="linked-in" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={mail} alt="mail" />
                            </div>
                            <div className='backBlueColor center'>
                                <img src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactUsRightSection center'>
                <div className='followUs centerColumn'>
                    <h2>Follow us</h2>
                    <div className='socialMedias'>
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={instagram} alt="instagram" />
                        <img src={pinterest} alt="pinterest" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs