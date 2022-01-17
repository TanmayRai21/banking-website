import React from 'react';
import { logo } from '../../assets/Images';
import './styles.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <img src={logo} alt="" />
                <p>Copyright @2021 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, obcaecati. <br /> All rights reserved.
                </p>
            </div>
        </div >
    );
}