import React from 'react'
import '../style/Creativity.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { swipeRight } from '../animation';

const Creativity = () => {

  const [element, view] = useInView({ threshold: 0.3 });


  return (
    <section ref={element} className='creativitySection backImg center'>
        <div className='creativity centerColumn'>
            <h1>Creativity</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
            <motion.button variants={swipeRight} animate={view ? "show" : "hidden"} initial="hidden" >learn more</motion.button>
        </div>
    </section>
  )
}

export default Creativity