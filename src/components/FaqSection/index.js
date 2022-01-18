import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import { lines } from '../../assets/Images';
import './styles.scss';
import { Question } from './Question';
import { Slide } from 'react-reveal';

export const FaqSection = () => {
    return (
        <InnerLayout>
            <Slide bottom>
                <div className="faq">
                    <h3 className="small-heading">Frequenty <span>asked Questions</span></h3>
                    <p style={{ textAlign: 'center' }}>Everything you need to know so that you can use Unipay like a pro !</p>

                    <div className="faq__questions">
                        {questions.map((ele, ind) => (
                            <Question ques={ele} key={ind} />
                        ))}
                    </div>
                </div>
            </Slide>     
        </InnerLayout>
    )
}

const questions = [
    {
        id: 1,
        title: 'I can\'t wait. How do i get started ?',
        description: 'Click on the sign up button on the top right corner. Register your details and you are all set up to go.'
    },
    {
        id: 2,
        title: 'What if I send/withdraw money ?',
        description: 'Create an account and then click on the Make Payment button. Select contact/number/UPI-id or scan QR code to make payment.'
    },
    {
        id: 3,
        title: 'What happens when my subscription ends ?',
        description: 'You will be auto shifted to free version of Unipay. To use the payed features, you need to subscribe.'
    },
    {
        id: 4,
        title: 'I love it but is it safe ?',
        description: 'Unipay follows 2-factor authentication and autherisation for all payments and login. You will be needed to put a pin/fingerprint/face unlock to unlock the app. Also you will be asked for mpin and mtpin at the time of payments.'
    },
    {
        id: 5,
        title: 'Is there a limit on transaction amount ?',
        description: 'Yes, as per RBI regulations, you can transfer a maximum of ₹ 1,00,000 per day.'
    }
]
