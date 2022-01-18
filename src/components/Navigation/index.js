import React from 'react';
import Button from '../Button';
import { logo } from '../../assets/Images';
import './styles.scss';
import { Fade, Zoom } from 'react-reveal';

export const Navigation = () => {
    return (
        <div className='navigation'>
            <Zoom>
                <div className="navigation__logo">
                    <img src={logo} alt="" />
                </div>
            </Zoom>

            <Fade>
                <ul>
                    <li><a href="">How it Works</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">FAQs</a></li>
                </ul>
                <div className="navigation__button">
                    <Button name={'Log In'} />
                    <Button name={'Sign Up'} />
                </div>
            </Fade>
        </div>
    )
};
