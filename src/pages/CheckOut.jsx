import React, { useEffect } from "react";
import { useParams } from "react-router";
import Shipping from "../components/checkout/Shipping";
import PaymentPage from "../components/checkout/PaymentPage";
import gsap from "gsap";
import Review from "../components/checkout/Review";

const CheckOut = () => {
  const { step } = useParams();

  useEffect(() => {

    if(step === "shipping") return;


   const animation =  gsap.fromTo(
      ".container",
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
    );
    return () => {
      animation.kill();
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-[#f7f3ea] px-4 py-20 scrollbar-hide">
        <div className="container">
      {step == "shipping" ? <Shipping /> : step == "payment" ?  <PaymentPage/> : <Review/>}
        </div>
    </div>
  );
};

export default CheckOut;
