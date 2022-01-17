import React from 'react';
import Button from '../Button';
import { logo } from '../../assets/Images';
import './styles.scss';

export const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Feature</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <Button name={'Sign Up'} />
        </div>

    )
};
