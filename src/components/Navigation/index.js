import React from 'react';
import { PrimaryButton } from '../Primary-button';
import logo from '../../img/logo.svg';
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
            <PrimaryButton name={'Sign Up'} />
        </div>

    )
};
