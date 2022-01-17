import React from 'react';
import { creditcard, active, inactive, check, checkDisabled } from '../../../assets/Images';
import './styles.scss';

export const PaymentCard = (props) => {
    const { account, amount, text, button, text1, text2, text3, text4, text5, text6, text7, text8 } = props;
    return (
        <div className="card">
            <h4>{account}</h4>
            <h4>{amount} <span>\m</span> </h4>
            <p style={{ textAlign: 'center' }}>{text}</p>
            <div className="card__button">
                <button>{button}</button>
            </div>
            <div className="card__image">
                <img src={creditcard} alt="" />
            </div>
            <div className="card__plan">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="card__detail">
                <p><img src={check} alt="" />{text1}</p>
                <p><img src={check} alt="" />{text2}</p>
                <p><img src={check} alt="" />{text3}</p>
                <p><img src={check} alt="" />{text4}</p>
                <p><img src={checkDisabled} alt="" />{text5}</p>
                <p><img src={checkDisabled} alt="" />{text6}</p>
                <p><img src={checkDisabled} alt="" />{text7}</p>
                <p><img src={checkDisabled} alt="" />{text8}</p>
            </div>
        </div>
    )
}