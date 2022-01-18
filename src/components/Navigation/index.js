import React from 'react';
import Button from '../Button';
import { logo } from '../../assets/Images';
import './styles.scss';
import { Fade } from 'react-reveal';

export const Navigation = () => {
    return (
        <Fade top>
            <div className='navigation'>
                <div className="navigation__logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Feature</a></li>
                    <li><a href="">Pricing</a></li>
                    <Button name={'Sign Up'} />
                </ul>
            </div>
        </Fade>
    )
};
