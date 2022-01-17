import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import './styles.scss';

export const MessageSection = () => {
    return (
        <InnerLayout>
            <div className="message-section">
                <div className="message-section__left">
                    <h2 className="secondary-heading">We support you</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente esse nisi, beatae provident consequatur totam labore officiis pariatur voluptate, quam voluptas praesentium vel!</p>
                </div>
                <div className="message-section__right">
                    <img src={} alt="" />
                </div>
            </div>
        </InnerLayout>
    )
}