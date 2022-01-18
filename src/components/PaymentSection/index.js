import React from 'react';
import { Zoom } from 'react-reveal';
import { InnerLayout } from '../../styles/Layouts';
import { PaymentCard } from './PaymentCard';
import './styles.scss';

export const PaymentSection = () => {


    const features = [
        'Send/Receive Money online',
        'Charge free transactions',
        'Pay credit card bills',
        'Usage analysis',
        'Wallet access',
        'Virtual cards',
        'Priority 24/7 support',
        'AI analysis of usage',
        'Multi-user access'
    ]

    return (
        <InnerLayout>
            <Zoom>
                <div className="payment">
                    <h3 className='small-heading'>An Exceptional Service, <span>at the right price</span></h3>
                    <p style={{ textAlign: 'center' }}>Choose a plan that works best for you.</p>
                    <div className="payment__card">
                        <PaymentCard
                            account={'BASIC'}
                            amount={'₹ 0'}
                            text={'Forever free plan'}
                            button={'Get Started'}
                            featuresChecked={features.slice(0, 5)}
                            featuresUnchecked={features.slice(5, features?.length)}
                        />
                        <PaymentCard
                            account={'PREMIUM'}
                            amount={'₹ 299'}
                            text={'Custom plan'}
                            button={'Buy Now'}
                            featuresChecked={features}
                            featuresUnchecked={[]}
                        />
                    </div>
                </div>
            </Zoom>
        </InnerLayout>
    )
}