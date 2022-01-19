import React from 'react';
import { signup, name, email, lock1, lock2 } from '../../../assets/Images';
import './styles.scss';

export const SignUp = (props) => {

    const { handleClick } = props;

    return (
        <div className="signup">
            <div className="signup__left">
                <h1>Signup</h1>
                <div className="signup__left--fields">
                    <div className="input">
                        <img src={name} alt="" className="name" />
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="input">
                        <img src={email} alt="" className="email" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={lock1} alt="" className="lock1" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="input">
                        <img src={lock2} alt="" className="lock2" />
                        <input type="text" placeholder="Repeat password" />
                    </div>
                </div>
                <button onClick={() => handleClick('signup')}>Register</button>
                <button onClick={() => handleClick('back')}>Go Back</button>
            </div>
            <div className="signup__right">
                <img src={signup} alt="" />
            </div>
        </div>
    )
}