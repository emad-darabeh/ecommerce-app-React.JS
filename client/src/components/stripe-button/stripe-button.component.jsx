import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_0pYmkZVVYef0SGYLEmsBcDq200Q97Wc5c5';

  const onToken = token => {
    axios
      .post('payment', {
        amount: priceForStripe,
        token
      })
      .then(() => alert('Payment successful'))
      .catch(err => {
        console.log('payment error: ', err);
        alert(
          'There was an issue with your payment. Please use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='eCommerce App'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
