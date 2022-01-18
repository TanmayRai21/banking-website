import React from 'react';
import { check, checkDisabled } from '../../../assets/Images';
import './styles.scss';

export const PaymentCard = (props) => {
    const { account, amount, text, button, featuresChecked, featuresUnchecked } = props;
    
    return (
        <div className="card">
            <div className="card__title">{account}</div>
            <div className="card__amount">
                {amount} <span>/ PER MONTH</span>
            </div>

            <div className="card__desc" style={{ textAlign: 'center' }}>
                <p>{text}</p>
            </div>

            <div className="card__detail">
                {featuresChecked?.map((ele, i) => (
                    <p key={i}><img src={check} alt="" />{ele}</p>
                ))}
                {featuresUnchecked?.map((ele, i) => (
                    <p style={{ color:' #b7b7b7' }} key={i}><img src={checkDisabled} alt="" />{ele}</p>
                ))}
            </div>
            <div className="card__button">
                <button>{button}</button>
            </div>
        </div>
    )
}

