import React from 'react';
import '../style/MarkSection.css';


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { swipeRight } from '../animation';

import man from '../img/man.jpg';

const MarkSection = () => {

    const [element, view] = useInView({ threshold: 0.3 });

    return (
        <section ref={element} className='markSection center'>
            <div className='markSectionInfo centerColumn'>
                <div className='markSectionHeader'>
                    <img src={man} alt="man" />
                    <div className='aboutMark centerColumn'>
                        <h2>Hello!</h2>
                        <p>Hi, I am Mark, focusing on creating emotional experiences.</p>
                        <motion.button variants={swipeRight} animate={view ? "show" : "hidden"} initial='hidden' >LEARN MORE</motion.button>
                    </div>
                </div>
                <div className='markSectionFooter'>
                    <div className='skills'>
                        <h2>Strategy</h2>
                        <div className='skillsList'>
                            <p>Analytics and Research</p>
                            <p>Interactive Workshops</p>
                            <p>Brand Strategy</p>
                            <p>Content Strategy</p>
                            <p>Digital Strategy</p>
                            <p><span>Conversion Rate Optimization</span></p>
                        </div>
                    </div>
                    <div className='skills'>
                        <h2>Design</h2>
                        <div className='skillsList'>
                            <p>Creative Direction</p>
                            <p>Brand Guides</p>
                            <p>Prototypes</p>
                            <p><span>UI/UX & Web Design</span></p>
                            <p>Visual Asset Creation</p>
                            <p>Motion Design</p>
                        </div>
                    </div>
                    <div className='skills'>
                        <h2>Development</h2>
                        <div className='skillsList'>
                            <p>System Architecture Design</p>
                            <p>Full-Stack Development</p>
                            <p><span>3rd Party Integrations</span></p>
                            <p>Performance Optimization</p>
                            <p>WordPress Development</p>
                            <p>Shopify Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarkSection