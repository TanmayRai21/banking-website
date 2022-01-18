import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import { avatar1, avatar2, avatar3, avatar4, avatar5, conversation, bgCircles } from '../../assets/Images';
import './styles.scss';
import { Bounce } from 'react-reveal';

export const MessageSection = () => {
    return (
        <InnerLayout>
            <div className="message-section">
                <Bounce bottom cascade>
                    <div className="message-section__left">
                        <img src={bgCircles} alt="" className='bgCircle cir1' />
                        <h2 className="secondary-heading">We support you 24/7 with our chat bots.</h2>
                        <p>When everything is on the line, we're there for you 24x7. Our globally distributed team allows us
                            to serve as reliable partners for your needs, no matter what time of day.</p>

                        <div className="message-section__left--images">
                            <img src={avatar1} alt="" />
                            <img src={avatar2} alt="" />
                            <img src={avatar3} alt="" />
                            <img src={avatar4} alt="" />
                            <img src={avatar5} alt="" />
                            <p>+25</p>
                        </div>
                    </div>
                </Bounce>

                <Bounce bottom>
                    <div className="message-section__right">
                        <img className='chat' src={conversation} alt="" />
                        <img src={bgCircles} alt="" className='bgCircle cir2' />
                    </div>
                </Bounce>
            </div>
        </InnerLayout>
    )
}