import React from 'react';
import '../style/QualityServices.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { swipeDown, extension, swipeUp } from '../animation';

import socialMedia from '../img/social-media.jpg';
import digitalMarketing from '../img/digital-marketing.jpg';
import seoOptimization from '../img/seo-optimization.jpg';

const QualityServices = () => {

    const [element, view] = useInView({ threshold: 0.3 });

    return (
        <section ref={element} className='qualityServicesSection center'>
            <motion.div className='qualityServices centerColumn'>
                <motion.h3 variants={swipeDown} animate={view ? "show" : "hidden"} initial='hidden' >FEATURES</motion.h3>
                <motion.h1 variants={extension} animate={view ? "show" : "hidden"} initial='hidden' >Quality Services</motion.h1>
                <div className="services">
                    <motion.div className="service centerColumn" variants={swipeUp} animate={view ? "show" : "hidden"} initial='hidden' >
                        <img src={socialMedia} alt="social-media" />
                        <h3>SOCIAL MEDIA</h3>
                        <p>Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                        <button>MORE</button>
                    </motion.div>
                    <motion.div className="service centerColumn" variants={swipeUp} animate={view ? "show" : "hidden"} initial='hidden'>
                        <img src={digitalMarketing} alt="digital-marketing" />
                        <h3>DIGITAL MARKETING</h3>
                        <p>Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
                        <button>MORE</button>
                    </motion.div>
                    <motion.div className="service centerColumn" variants={swipeUp} animate={view ? "show" : "hidden"} initial='hidden'>
                        <img src={seoOptimization} alt="seo-optimization" />
                        <h3>SEO OPTIMIZATION</h3>
                        <p>Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                        <button>MORE</button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default QualityServices