import React, { useEffect } from "react";
import WideButton from "../common/buttons/WideButton";
import { useCart } from "react-use-cart";
import { useParams, useSearchParams } from "react-router";
import { useOrder } from "../../context/OrderContext";

const PaymentSummary = ({ text, dire, payment, errors, cardData, method }) => {
  const { isEmpty, items } = useCart();
  const { orderNumber } = useParams();
  const [searchParams] = useSearchParams();
  const totalAmount = searchParams.get("totalAmount");
  const { getOrderSummary } = useOrder();

  useEffect(() => {
    if(orderNumber) getOrderDetails(orderNumber);
  }, [orderNumber]);

  const getOrderDetails = async (orderNumber) => {
    try {
      const res = await getOrderSummary(orderNumber);
      const { totalAmount } = res;
    } catch (error) {
      console.log(error);
    }
  };

  const labelStyle =
    "absolute top-[30%] left-0 tracking-[.33rem] text-[#414845] text-[.9rem] font-medium uppercase peer-focus:text-[#6f4e01] peer-[:not(:placeholder-shown)]:text-[#6f4e01]  peer-[:not(:placeholder-shown)]:top-0 peer-focus:top-0 peer-focus:tracking-[.25rem] peer-[:not(:placeholder-shown)]:tracking-[.25rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs transition-all duration-200";
  const inputStyle =
    "text-xl border-b outline-0 placeholder:text-xl placeholder:font-normal placeholder:text-[#c1c8c3] border-[#414845] focus:border-[#6f4e01] transition-all duration-150";

  return (
    <section className="w-[37.5%] min-h-160 bg-[#e3dbcc5d] shadow-xl rounded-xl p-10 flex flex-col justify-between gap-y-6">
      <h4 className="text-3xl font-serif">Order Summary</h4>

      <div className="w-full h-[.7px] bg-[#adadadb5]"></div>

      <div className=" flex flex-col gap-y-4 min-h-60">
        {isEmpty
          ? ""
          : items.map((item, i) => {
              return (
                <div key={i} className="flex gap-5 items-center h-28">
                  <div className="w-[25%] h-[80%] relative">
                    <img
                      src={item?.image?.imageUrl}
                      className="w-full h-full object-fill rounded-lg"
                      alt=""
                    />
                    <span className="w-6 h-6 rounded-full bg-black flex justify-center items-center text-white font-medium text-[.7rem] top-[-5%] right-[-5%] absolute z-20 text-2xl">
                      {i + 1}
                    </span>
                  </div>

                  <div className="w-[60%] space-y-2">
                    <p className="font-medium text-base font-serif">
                      {" "}
                      {item?.title?.split(" ").length > 5
                        ? item?.title?.split(" ")?.slice(0, 5)?.join(" ")
                        : item.title}{" "}
                    </p>

                    {item?.categories?.[0] && (
                      <p className="text-xs text-gray-600 md:text-sm font-semibold font-sans">
                        {item?.categories[0].categoryName ??
                          item?.categories[0]}
                      </p>
                    )}

                    <p className="text-xs font-mono text-gray-600 md:text-sm font-semibold">
                      ${Math.ceil(Number(item?.price?.value))?.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>

      <div className="w-full h-[.7px] bg-[#adadadb5]"></div>

      <form action="" className="flex items-center justify-between">
        <div className="relative w-[60%] h-12">
          <input
            id="PROMO"
            placeholder=" "
            className={`w-full h-full peer ${inputStyle}`}
            type="text"
          />
          <label htmlFor="PROMO" className={labelStyle}>
            PROMO CODE
          </label>
        </div>
        <input
          type="button"
          className="px-6 py-3 uppercase tracking-[.45rem] rounded-sm border border-gray-300 text-xs font-bold bg-[#f7f3ea7b] hover:bg-[#e1d4b566] transition-colors duration-200"
          value="Apply"
        />
      </form>

      <div className="w-full h-[.7px] bg-[#c5c3c3]"></div>

      <div className="space-y-2">
        {/* subtotal part */}
        <div className="flex justify-between">
          <span className="font-medium text-xl font-['playfair'] text-[#414141]">
            Subtotal
          </span>
          <span className="font-medium text-xl text-[#414141] font-['playfair']">
            ${" "}
            {isEmpty
              ? "0.00"
              : items?.reduce(
                  (accumulator, curr, i) =>
                    accumulator +
                    Math.ceil(Number(curr?.price?.value) * curr?.quantity),
                  0,
                )}
          </span>
        </div>

        {/* shipping part */}
        <div className="flex justify-between">
          <span className="font-medium font-['playfair'] text-[#414141] text-xl">
            Shipping
          </span>
          <span className="font-medium text-[#414141bb] italic">
            Calculated Next step
          </span>
        </div>

        {/* Taxes part */}
        <div className="flex justify-between">
          <span className="font-medium font-['playfair'] text-[#414141] text-xl">
            Taxes
          </span>
          <span className="font-medium text-xl text-[#414141] font-['playfair']">
            $26.80
          </span>
        </div>
      </div>

      <div className="w-full h-[.7px] bg-[#adadadb5]"></div>

      <div className="flex justify-between items-end font-['playfair']">
        <p className="text-3xl ">Total</p>
        <div className="text-right">
          <span className="tracking-[.3rem] font-sans text-[#9d8040] font-medium">
            USD
          </span>
          <p className="text-5xl font-bold"> $ {totalAmount}</p>
        </div>
      </div>

      <div className="flex flex-col  items-center gap-y-3 font-['playfair']">
        <WideButton
          text={text}
          method={method}
          direction={dire}
          payment={payment}
          cardData={cardData}
          errors={errors}
        />
      </div>
    </section>
  );
};

export default PaymentSummary;
