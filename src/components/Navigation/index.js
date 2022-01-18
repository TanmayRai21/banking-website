import React from 'react';
import Button from '../Button';
import { logo } from '../../assets/Images';
import './styles.scss';
import { Fade } from 'react-reveal';

export const Navigation = () => {

    const handleClick = (ele) => {
        const element = document.getElementsByClassName(ele)[0];
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div className='navigation'>
            <div className="navigation__logo">
                <img src={logo} alt="" />
            </div>

            <Fade>
                <ul>
                    <li onClick={() => handleClick('card-section')}>About</li>
                    <li onClick={() => handleClick('payment')}>Pricing</li>
                    <li onClick={() => handleClick('faq')}>FAQs</li>
                </ul>
                <div className="navigation__button">
                    <Button name={'Log In'} />
                    <Button name={'Sign Up'} />
                </div>
            </Fade>
        </div>
    )
};
