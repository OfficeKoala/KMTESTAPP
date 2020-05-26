const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '14px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: 'white'},
        '::placeholder': {color: 'white'},
      },
      invalid: {
        iconColor: 'red',
        color: 'red',
      },
    },
  };

  module.exports={
      CARD_ELEMENT_OPTIONS,
      CARD_OPTIONS
  }