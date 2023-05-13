import React from 'react'
import '../style/Professions.css';

import strategy from '../img/strategy.svg';
import uxDesign from '../img/uxDesign.svg';
import development from '../img/development.svg';
import testing from '../img/testing.svg';

const Professions = () => {
  return (
    <div className='professionsSection center backImg'>
        <div className='professions'>
            <div className='professionsText'>
                <h2>We specialize in cut-through strategy and immersive environments.</h2>
            </div>
            <div className='professionCards'>
                <div className='professionCard centerColumn'>
                    <div className='imgBackColor'>
                        <img src={strategy} alt="strategy" />
                    </div>
                    <h3>STRATEGY</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, minus.</p>
                </div>
                <div className='professionCard centerColumn'>
                    <div className='imgBackColor'>
                        <img src={uxDesign} alt="uxDesign" />
                    </div>
                    <h3>UX DESIGN</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, minus.</p>
                </div>
                <div className='professionCard centerColumn'>
                    <div className='imgBackColor'>
                        <img src={development} alt="development" />
                    </div>
                    <h3>DEVELOPMENT</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, minus.</p>
                </div>
                <div className='professionCard centerColumn'>
                    <div className='imgBackColor'>
                        <img src={testing} alt="testing" />
                    </div>
                    <h3>TESTING</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, minus.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Professions