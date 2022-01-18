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
                    <li><a href="">Home</a></li>
                    <li><a href="">Feature</a></li>
                    <li><a href="">Pricing</a></li>
                    <Button name={'Sign Up'} />
                </ul>
            </Fade>
        </div>
    )
};
