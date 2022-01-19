import React from 'react';
import { Login } from './Login';
import { SignUp } from './SignUp';
import './styles.scss';

export const AuthSection = (props) => {
    const { state, handleClick } = props;

    return (
        <div id="myModal" class="auth-popup">
            <div class="auth-popup__content">
                {state === 'signup' && <SignUp handleClick={handleClick} />}
                {state === 'login' && <Login handleClick={handleClick} />}
            </div>
        </div>
    )
}