import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CARD_OPTIONS } from "../StripeEssentials/CardOptions";
import {
  CardElement,
  Elements,
  ElementsConsumer,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import FormMaker from "../../../FormsConfig/FormMaker";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_xGQXcIb07aV3e8SKLu1Q2yNu00FzrSyBb3");
let config = {
  ShippingForm: {
    formName: "ShippingForm",
    fields: [
      {
        type: "text",
        name: "Name",
        label: "name on the card"
      },
      { type: "email", name: "Email", label: "enter email address" },
      { type: "text", name: "Address", label: "residential address" },
      { type: "text", name: "City", label: "enter city" },
      { type: "text", name: "Postal", label: "enter postal code" }
    ]
  }
};

class StripePaymentGateWayComponent extends React.Component {
  state = {};
  //StripePaymentComponent Render
  render() {
    return (
      <div className="PaymentBox">
        <div className="gifHolder"></div>
        <div className="PaymentsHead">
          <h6>SHIPPING &amp; BILLING INFORMATION</h6>
        </div>
        <div className="ShippingDetailsPage">
          <FormMaker castForm={config.ShippingForm} />
        </div>
        <div className="PaymentsHead Foot">
          <h6>PAYMENT INFORMATION</h6>
        </div>
        <CardPayment />
      </div>
    );
  }
}

export default StripePaymentGateWayComponent;

const CardPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      {/* <CardElement  options={{ style: {base: {fontSize: '16px',color: '#424770','::placeholder': {color: '#aab7c4',},},invalid: {color: '#9e2146',},},}}/>        */}
      <CheckoutForm />
    </Elements>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="PaymentCard">
      <form onSubmit={handleSubmit}>
        {/* <CardElement  options={{style: { base: {fontSize: '16px',color: '#424770','::placeholder': {color: '#aab7c4',},},invalid: {color: '#9e2146',},},}}  /> */}
        <CardField />
        <button
          className="PaymentSubmitButton"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

const CardField = ({ onChange }) => (
  <fieldset className="FormGroup">
    <div className="FormRow">
      <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
  </fieldset>
);
