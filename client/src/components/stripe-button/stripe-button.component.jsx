import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4hhenBrkf0mdyhqrVUMyv3AK';
// console.log('priceForStripe')
// console.log(priceForStripe)

  const onToken = token => {
    // axios.post('http://localhost:5000/payment', {
    //     amount: priceForStripe,
    //     token: token
    // })
    // .then(response => {
    //     console.log('response')
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log('error');
    //     console.log(error);
    //   });

    axios({
      url: 'http://localhost:5000/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
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
