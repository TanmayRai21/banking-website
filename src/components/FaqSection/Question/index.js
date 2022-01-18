import React, { useState } from 'react';
import { plus, minus } from '../../../assets/Images';
import './styles.scss';

export const Question = ({ques}) => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    return (
        <div className="question" onClick={handleToggle}>
            <h1 >{ques.title} <span><img src={toggle ? minus : plus} alt="" /></span></h1>
            {toggle && <p>{ques.description}</p>}
        </div>
    )
}
