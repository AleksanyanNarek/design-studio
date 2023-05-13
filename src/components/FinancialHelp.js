import React from 'react';
import '../style/FinancialHelp.css';

import checkMark from '../img/checkMark.png';

const FinancialHelp = () => {
  return (
    <section className='financialHelpSection center'>
        <div className="financialHelp centerColumn">
            <h4>Small or big, your business will love our financial help and business consultations! We are happy when our clients are too…</h4>
            <p>Actually, this is quite simple to achieve – because each time we help them in sorting out different accounting intricacies or save the day before filing the taxes, they are happy indeed.</p>
            <div className="checkMarks">
                <div className="checkMark">
                    <img src={checkMark} alt="checkMark" />
                    <h4>Managing Your Career Development</h4>
                </div>
                <div className="checkMark">
                    <img src={checkMark} alt="checkMark" />
                    <h4>Leading with Finance</h4>
                </div>
                <div className="checkMark">
                    <img src={checkMark} alt="checkMark" />
                    <h4>Harvard Business School Collection</h4>
                </div>
                <div className="checkMark">
                    <img src={checkMark} alt="checkMark" />
                    <h4>Managing Your Career Development</h4>
                </div>
            </div>
        </div>

    </section>
  )
}

export default FinancialHelp