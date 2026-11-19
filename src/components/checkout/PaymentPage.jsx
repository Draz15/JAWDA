import React, { useEffect, useState } from "react";
import CheckPosition from "./CheckPosition";
import PaymentMethod from "./PaymentMethod";
import PaymentSummary from "./PaymentSummary";
import { Toaster } from "react-hot-toast";


const PaymentPage = () => {
  const [payment, setPayment] = useState("card");
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    CVV: "",
  });
  const [errors, setErrors] = useState({});

  const currentStep = [1, 1, 0]; // 1 for shipping, 0 for payment, 0 for Review

  return (
    <>
      <CheckPosition current={currentStep} />
      <main className="p-2 pt-12 flex justify-between gap-x-4 relative">
        {/* PayMethod section   */}
        <PaymentMethod
          payment={payment}
          setPayment={setPayment}
          cardData={cardData}
          setCardData={setCardData}
          error={errors}
          setErrors={setErrors}
        />
        {/* last summary section   */}
        <PaymentSummary
          payment={payment}
          errors={errors}
          text="Pay Now"
          cardData={cardData}
          dire="/checkout/review"
        />
      </main>
    </>
  );
};

export default PaymentPage;
