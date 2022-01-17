import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import { avatar1, avatar2, avatar3, avatar4, avatar5, conversation, bgCircles } from '../../assets/Images';
import './styles.scss';

export const MessageSection = () => {
    return (
        <InnerLayout>
            <div className="message-section">
                <div className="message-section__left">
                    <img src={bgCircles} alt="" className='bgCircle cir1' />
                    <h2 className="secondary-heading">We support you 24/7 with our chat bots.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sit ad deleniti alias quo repudiandae consequatur odio iste, similique culpa maiores nulla in sint. Vitae quidem, molestiae asperiores dolorem ducimus ipsam temporibus atque nesciunt ullam, vel laborum ipsum debitis ea.</p>

                    <div className="message-section__left--images">
                        <img src={avatar1} alt="" />
                        <img src={avatar2} alt="" />
                        <img src={avatar3} alt="" />
                        <img src={avatar4} alt="" />
                        <img src={avatar5} alt="" />
                        <p>+25</p>
                    </div>
                </div>
                <div className="message-section__right">
                    <img src={conversation} alt="" />
                    <img src={bgCircles} alt="" className='bgCircle cir2'/>
                </div>
            </div>
        </InnerLayout>
    )
}