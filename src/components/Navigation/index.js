import React, { useState } from 'react';
import Button from '../Button';
import { logo } from '../../assets/Images';
import './styles.scss';
import { Fade } from 'react-reveal';
import { AuthSection } from '../Authentication';

export const Navigation = () => {

    const [modalState, setModalState] = useState('login');

    const handleClick = (ele) => {
        const element = document.getElementsByClassName(ele)[0];
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const handleModal = (e) => {
        setModalState(e);
    }

    const handleModalSubmit = (e) => {
        setModalState('');
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
                    <Button name={'Log In'} handleClick={() => handleModal('login')} />
                    <Button name={'Sign Up'} handleClick={() => handleModal('signup')} />
                </div>
            </Fade>
            {modalState && <AuthSection state={modalState} handleClick={handleModalSubmit} />}
        </div>
    )
};
