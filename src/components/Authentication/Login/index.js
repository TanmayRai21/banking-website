import React from 'react';
import { name, lock1, login } from '../../../assets/Images';
import './styles.scss';

export const Login = (props) => {

    const { handleClick} = props;
    
    return (
        <div className="login">
            <div className="login__right">
                <img src={login} alt="" />
            </div>

            <div className="login__left">
                <h1>Login</h1>
                <div className="login__left--fields">
                    <div className="input">
                        <img src={name} alt="" className="name" />
                        <input type="text" placeholder="Name / Email" />
                    </div>
                    <div className="input">
                        <img src={lock1} alt="" className="lock1" />
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <button onClick={() => handleClick('login')}>Login</button>
                <button onClick={() => handleClick('back')}>Go Back</button>
            </div>
        </div>
    )
}