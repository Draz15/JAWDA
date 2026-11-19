import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CiLock } from "react-icons/ci";
import {useCart} from "react-use-cart"
import WideButton from "../common/buttons/WideButton";

const Summary = () => {
  const {items} = useCart()
  const [promoCode, setPromocode] = useState("");

  // change the subtotal value with transition
  const priceRef = useRef(null);
  const [previousSubTotal, setPreviousSubTotal] = useState(0);

  const currSubTotal = items.reduce(
    (acc, curr) => acc + Math.ceil(Number(curr?.price?.value)) * curr.quantity,
    0,
  );

  useEffect(() => {
    const counter = { value: previousSubTotal };

    const animation = gsap.to(counter, {
      value: currSubTotal,
      duration: 0.6,
      ease: "power1.out",
      onUpdate: () => {
        if (priceRef.current) {
          priceRef.current.textContent = Math.ceil(counter.value);
        }
      },
      onComplete: () => {
        setPreviousSubTotal(currSubTotal);
      },
    });

    return () => animation.kill();
  }, [currSubTotal]);

  // Animation section
  const onEnter = (e) => gsap.to(".arrow", { x: 10, duration: 0.3 });
  const onLeave = (e) => gsap.to(".arrow", { x: 0, duration: 0.3 });

  return (
    <div className="w-[35%] h-160 bg-[#e3dbcc5d] shadow-xl rounded-3xl p-10 flex flex-col justify-between gap-y-4 sticky top-26">
      <h4 className="text-3xl font-serif">Summary</h4>
      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <span className="font-medium text-[#414141]">Subtotal</span>
          <span ref={priceRef} className="text-lg text-[#414141] font-medium" s>
            {currSubTotal}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-[#414141]">Estimated Shipping</span>
          <span className="font-medium text-[#414141]">Complimentary</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-[#414141]">Taxes</span>
          <span className="text-sm font-medium text-[#414141bb] italic">
            Calculated at checkout
          </span>
        </div>
      </div>

      <form
        action=""
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          if (promoCode.trim() !== "") {
          }
        }}
      >
        <div className="flex justify-between w-full">
          <input
            type="text"
            name="promo"
            onChange={(e) => setPromocode(e.target.value)}
            placeholder="Promo Code"
            className="outline-0 text=[.9rem] w-[80%] md:text-[1.1rem] font-normal text-[#414141d3]"
          />
          <input
            type="button"
            value="Apply"
            className="text-sm font-semibold cursor-pointer tracking-[.3rem] md:tracking-[.4rem] lg:tracking-[.63rem] text-[#5e4200] hover:text-[#944f06] transition"
          />
        </div>

        <div className="h-0.5 w-full bg-[#8d8d8d77] my-2"></div>
      </form>

      <div className="flex justify-between items-baseline font-['playfair']">
        <p className="text-3xl ">Total</p>
        <p className="text-5xl font-bold" ref={priceRef}>$3,050</p>
      </div>
      <div className="flex flex-col  items-center gap-y-3 font-['playfair']">
        <WideButton text="checkout" items={items} direction="/checkout/shipping" />
        <p className="flex items-center gap-1 text-[#414141]">
          <CiLock strokeWidth={1.3} /> &nbsp;{" "}
          <span >Secure SSL Checkout</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
