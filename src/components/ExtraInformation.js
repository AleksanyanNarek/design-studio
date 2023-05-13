import React from 'react'
import '../style/ExtraInformation.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { popUP, swipeRight, swipeDown, swipeLeftDown } from '../animation';

import arrowRight from '../img/arrow-right.svg';

const ExtraInformation = () => {

  const [element, view] = useInView({ threshold: 0.3 });


  return (
    <section className="extraInformation"> 
        <motion.div className="extraInformationBox researchBox" ref={element} variants={popUP} animate={view ? "show" : "hidden"} initial='hidden' >
            <motion.h2 variants={swipeDown} >Research</motion.h2>
            <motion.p variants={swipeLeftDown}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
            <motion.img src={arrowRight} alt="arrowRight" variants={swipeRight} />
        </motion.div>
        <motion.div className="extraInformationBox strategyBox" ref={element} variants={popUP} animate={view ? "show" : "hidden"} initial='hidden' >
            <motion.h2 variants={swipeDown} >Strategy</motion.h2>
            <motion.p variants={swipeLeftDown} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
            <motion.img src={arrowRight} alt="arrowRight" variants={swipeRight} />
        </motion.div>
        <motion.div className="extraInformationBox designBox" ref={element} variants={popUP} animate={view ? "show" : "hidden"} initial='hidden' >
            <motion.h2 variants={swipeDown} >Design</motion.h2>
            <motion.p variants={swipeLeftDown} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
            <motion.img src={arrowRight} alt="arrowRight" variants={swipeRight} />
        </motion.div>
    </section>
  )
}

export default ExtraInformation