import React, { useState } from "react";
import CheckPosition from "./CheckPosition";
import ShippingDetails from "./ShippingDetails";
import OrderSummary from "./OrderSummary";
import { Toaster } from "react-hot-toast";

const Shipping = () => {
  const [shippingData, setShippingData] = useState({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
    phone: "",
    billingAddress: false,
  });

  const [errors, setErrors] = useState({});

  const currentStep = [1, 0, 0]; // 1 for shipping, 0 for payment, 0 for Review

  return (
    <React.Fragment>
      <CheckPosition current={currentStep} />
      <main className="min-h-screen p-2 pt-12 flex justify-between gap-x-4 items-start">
        {/* shipping details form component part */}
        <ShippingDetails
          shippingData={shippingData}
          setShippingData={setShippingData}
          errors={errors}
          setErrors={setErrors}
        />

        {/* order summary form component part */}
        <OrderSummary errors= {errors} shippingData={shippingData} text="Continue to Payment" dire="/checkout/payment" />
      </main>
    </React.Fragment>
  );
};

export default Shipping;
