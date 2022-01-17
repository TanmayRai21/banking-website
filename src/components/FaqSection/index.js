import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import { lines } from '../../assets/Images';
import './styles.scss';
import { Question } from './Question';

export const FaqSection = () => {
    return (
        <InnerLayout>
            <div className="faq">
                <h3 className="small-heading">Frequenty <span>asked Questions</span></h3>
                <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe aperiam, sunt modi atque tempore quos reiciendis sed quod nostrum!</p>

                <div className="faq__lines">
                    <img src={lines} alt="" />
                </div>

                <div className="faq__questions">
                    {questions.map((ele, ind) => (
                        <Question ques={ele} key={ind} />
                    ))}
                </div>
            </div> 
        </InnerLayout>
    )
}

const questions = [
    {
        id: 1,
        title: 'Who can open a Draft account?',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit.'
    },
    {
        id: 2,
        title: 'What if I withdraw money abroad?',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit.'
    },
    {
        id: 3,
        title: 'What happens when my subscription ends?',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit.'
    },
    {
        id: 4,
        title: 'Is this service better than YouBay?',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit.'
    },
    {
        id: 5,
        title: 'What happens if I withdraw more than $250?',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit.'
    }
]
