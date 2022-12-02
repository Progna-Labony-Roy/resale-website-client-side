import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe
(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const orders=useLoaderData();
    const navigation=useNavigation();
    const {book_name,phone,resale_price} =orders
    if(navigation.state === 'loading'){
        <Loader></Loader>
    }
    return (
        <div className='mx-auto my-10'>
            <h3 className='text-2xl'>Pay {resale_price} for {book_name}
            </h3>
            <br />
            <h2 className='text-xl mb-3'>Your phone number is {phone}</h2>
            <div>
            <Elements stripe={stripePromise}>
      <CheckOutForm 
      orders={orders}/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;