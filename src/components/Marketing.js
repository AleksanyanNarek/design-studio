import React from 'react'
import '../style/Marketing.css';

import woman from '../img/woman.jpg';

const Marketing = () => {
  return (
    <div className='marketingSection center'>
        <div className='marketing'>
            <div className='marketingInfo centerColumn'>
                <h1>Growth, Marketing & Sales Insights</h1>
                <div>
                    <h3>SALES INSIGHTS</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <h3>MANAGEMENT</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <h3>MARKETING</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='marketingImg'>
                <img src={woman} alt="woman" />
            </div>
        </div>
    </div>
  )
}

export default Marketing