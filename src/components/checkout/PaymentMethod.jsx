import React, { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiLock } from "react-icons/ci";
import { cardSchema } from "../../utilities/CardValidation";

const PaymentMethod = ({
  payment,
  setPayment,
  setCardData,
  error,
  setErrors,
}) => {
  const getCardData = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // checking for the data entered
    const fieldScheme = cardSchema.shape[name];
    const result = fieldScheme.safeParse(value);

    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? "" : result.error.issues[0].message,
    }));
  };

  // styling section

  const checkboxStyle =
    "appearance-none w-5 h-5 rounded-full border-2 border-none checked:bg-[#6f4e01] checked:after:content-['✓'] checked:after:font-bold checked:after:text-sm checked:after:text-white checked:after:flex checked:after:items-center checked:after:justify-center checked:after:w-full checked:after:h-full";

  const labelStyle =
    "absolute top-[30%] left-0 tracking-[.33rem] text-[#414845] text-[.9rem] font-medium uppercase peer-focus:text-[#6f4e01] peer-[:not(:placeholder-shown)]:text-[#6f4e01]  peer-[:not(:placeholder-shown)]:top-0 peer-focus:top-0 peer-focus:tracking-[.25rem] peer-[:not(:placeholder-shown)]:tracking-[.25rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs transition-all duration-200";

  const inputStyle =
    "w-full py-2.5 text-xl border-b-[1.4px] outline-0 placeholder:text-xl placeholder:font-normal placeholder:text-[#c1c8c3] border-[#414845] focus:border-[#6f4e01] transition-all duration-150";

  return (
    <section className="w-[55%] h-fit sticky top-0">
      {/* header section  */}
      <div className="header space-y-1">
        <h3 className="text-[2.8rem] font-['playfair'] font-semibold">
          Payment Method
        </h3>
        <p className="text-gray-700 text-[1.1rem]">
          All transactions are secure and encrypted.
        </p>
      </div>

      {/* payments methods section  */}

      <form
        autoComplete="off"
        action=""
        className="flex flex-col gap-y-6 mt-12 w-full"
      >
        {/* credit card input field  */}
        <div
          onClick={() => {
            setPayment("card");
          }}
          className={`credit-card w-full h-fit py-4 px-8 flex flex-col gap-y-10 border ${payment == "credit card" ? "border-[#6f4e01]" : "border-gray-300"} rounded-xl transition-all duration-300`}
        >
          {/* card header  */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <FaRegCreditCard className="text-2xl" />
              <span className="text-xl font-medium"> Credit / Debit Card</span>
            </div>

            <input
              type="radio"
              className={checkboxStyle}
              value="credit card"
              name="payment"
              onChange={(e) => setPayment(e.target.value)}
              checked={payment === "card"}
            />
          </div>

          {/* name on card input field */}
          <div className="w-full relative h-14">
            <input
              id="card"
              placeholder=" "
              type="text"
              onChange={ getCardData}
              disabled={payment !== "card"}
              className={`${inputStyle} peer h-full`}
              name="cardName"
            />

            <label htmlFor="card" className={labelStyle} autoComplete="off">
              Name On Card
            </label>
          </div>

          {/* card number input field */}
          <div className="w-full relative h-14">
            <input
              type="text"
              placeholder=" "
              id="CARD-number"
              onChange={ getCardData}
              disabled={payment !== "card"}
              className={`${inputStyle} peer h-full`}
              name="cardNumber"
            />

            <label
              htmlFor="CARD-number"
              className={labelStyle}
              autoComplete="off"
            >
              CARD NUMBER
            </label>
          </div>

          {/* EXPIRY (MM/YY) && CVV code input field */}
          <div className="flex justify-between gap-x-4">
            <div className="w-[48%] relative h-12">
              <input
                type="text"
                placeholder=" "
                id="EXPIRY"
                onChange={ getCardData}
                disabled={payment !== "card"}
                name="expiry"
                className={`${inputStyle} peer h-full`}
              />
              <label htmlFor="EXPIRY" className={labelStyle}>
                EXPIRY (MM/YY)
              </label>
            </div>

            <div className="w-[48%] relative h-12">
              <input
                id="CVV"
                placeholder=" "
                type="text"
                onChange={getCardData}
                disabled={payment !== "card"}
                name="CVV"
                className={`${inputStyle} peer h-full`}
              />
              <label htmlFor="CVV" className={labelStyle}>
                CVV
              </label>
            </div>
          </div>
        </div>

        {/* apple pay input field  */}
        <div
          onClick={() => {
            setPayment("apple pay");
          }}
          className={`credit-card w-full h-fit py-6 px-8 flex  justify-between items-center gap-20 border ${payment == "apple pay" ? "border-[#6f4e01]" : "border-gray-300"} rounded-xl transition-all duration-300`}
        >
          <div className="flex items-center gap-5">
            <LuWallet size={28} />{" "}
            <p className="text-xl font-sans capitalize">apple pay</p>
          </div>

          <input
            type="radio"
            className={checkboxStyle}
            value="apple pay"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
            checked={payment === "apple pay"}
          />
        </div>

        {/* cash-on-delivery input field  */}
        <div
          onClick={() => {
            setPayment("cod");
          }}
          className={`credit-card w-full h-fit py-6 px-8 flex  justify-between items-center gap-20 border ${payment == "cash on delivery" ? "border-[#6f4e01]" : "border-gray-300"} rounded-xl transition-all duration-300`}
        >
          <div className="flex items-center gap-5">
            <LiaShippingFastSolid size={28} />
            <p className="text-xl font-sans capitalize">Cash on Delivery</p>
          </div>

          <input
            type="radio"
            className={checkboxStyle}
            value="cash on delivery"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
            checked={payment === "cod"}
          />
        </div>

        <p className="flex items-center gap-1 text-[#414141b5]">
          <CiLock strokeWidth={1.3} /> &nbsp;{" "}
          <span className="text-base font-medium">Secure SSL Checkout</span>
        </p>
      </form>
    </section>
  );
};

export default PaymentMethod;
