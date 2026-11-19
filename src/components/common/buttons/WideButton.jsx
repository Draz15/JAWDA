import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import { ToastMessage } from "../../../utilities/ToastMessage.js";
import { useOrder } from "../../../context/OrderContext.jsx";
import { useCart } from "react-use-cart";

export default function WideButton({
  text,
  direction,
  errors,
  shippingData,
  items = [],
  payment,
  cardData,
}) {
  const navigate = useNavigate();
  const { createUserOrder, startPayment } = useOrder();
  const { emptyCart } = useCart();
  const { orderNumber } = useParams();
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [loadingReview, setLoadingReview] = useState(false);

  const handleClick = async (e) => {
    try {
      if (direction == "/checkout/shipping") {
        if (Array.isArray(items) && items.length > 0) {
          navigate("/checkout/shipping");
        }
      }

      setLoadingPayment(true);
      if (loadingPayment) return;
      if (direction == "/checkout/payment") {
        const hasEmptyFields = Object.entries(shippingData)
          .filter(([key]) => key !== "billingAddress")
          .some(([key, value]) => !String(value).trim());

        if (Object.values(errors).some(Boolean) || hasEmptyFields) {
          console.log(shippingData);
          e.preventDefault();
          ToastMessage("error", "Please fill all required data");
          return;
        }
        const res = await createUserOrder(items, shippingData);
        setLoadingPayment(false);
        navigate(
          `/checkout/payment/${res?.orderNumber}?totalAmount=${res?.totalAmount}`,
        );
      }

      // check the payment before navigate to the review
      if (direction === "/checkout/review") {
        setLoadingReview(true);
        if (payment === "card") {
          const hasEmptyFields = Object.values(cardData).some(
            (value) => !String(value).trim(),
          );

          const hasErrors = Object.values(errors).some(Boolean);
          if (hasErrors || hasEmptyFields) {
            e.preventDefault();
            ToastMessage("error", "Please Fill All Card Data");
            return;
          }
        }
        if(!orderNumber) return
        const res = await startPayment(orderNumber, payment);
        setLoadingReview(false);
        emptyCart();
        navigate(`/checkout/review/${orderNumber}`);
      }
    } catch (error) {
      console.log(error?.message);
      setLoadingPayment(false);
      setLoadingReview(false);
      ToastMessage("error", error?.message);
    } finally {
    }
  };

  const onEnter = (e) => gsap.to(".arrow", { x: 10, duration: 0.3 });
  const onLeave = (e) => gsap.to(".arrow", { x: 0, duration: 0.3 });
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => onEnter()}
      onMouseLeave={() => onLeave()}
      className={`w-full bg-[#012017] flex justify-center items-center text-white p-3 sm:p-4 transition ${loadingPayment || loadingReview || (direction == "/checkout/shipping" && items.length < 1) ? "opacity-60 cursor-not-allowed " : "hover:bg-[#223426]"}`}
    >
      {text} &nbsp; <FaLongArrowAltRight className="arrow" />
    </button>
  );
}
