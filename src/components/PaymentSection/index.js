import React from 'react';
import { InnerLayout } from '../../styles/Layouts';
import { PaymentCard } from './PaymentCard';
import './styles.scss';

export const PaymentSection = () => {
    return (
        <InnerLayout>
            <div className="payment">
                <h3 className='small-heading'>An Exceptional Service, <span>at the right price</span></h3>
                <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, aliquam.</p>
                <div className="payment__card">
                    <PaymentCard
                        account={'Free'} 
                        amount={'$0'} 
                        text={'Manage your business with a simple and efficient amount.'}
                        button={'Get Started'}
                        text1={'10 free local transfer'}
                        text2={'Free ATM withdrawals in Dollors'}
                        text3={'Free payment to other Draft account'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                    <PaymentCard
                        account={'Paid'}
                        amount={'$0'}
                        text={'Manage your business with a simple and efficient amount.'}
                        button={'Get Started'}
                        text1={'10 free local transfer'}
                        text2={'Free ATM withdrawals in Dollors'}
                        text3={'Free payment to other Draft account'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                </div>
            </div>
        </InnerLayout>
    )
}