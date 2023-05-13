import React from 'react';
import '../style/Home.css';

import { motion } from 'framer-motion';
import { swipeRightD, swipeLeft } from '../animation';

import homeBack from '../img/home-back.jpg';

const Home = () => {

  return (
    <section className='home'>
        <motion.div className='homeSection homeText' variants={swipeRightD} animate='show' initial='hidden' >
            <div className='homeInfo' >
                <h1>Design Studio</h1>
                <p>Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital.</p>
                <button>LEARN MORE</button>
            </div>
        </motion.div>
        <motion.div className='homeSection homeImg' variants={swipeLeft} animate='show' initial='hidden' >
            <img src={homeBack} alt="homeBack" />
        </motion.div>
    </section>
  )
}

export default Home