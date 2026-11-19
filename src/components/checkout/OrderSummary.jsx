import React from "react";
import WideButton from "../common/buttons/WideButton";
import { RiFlowerLine } from "react-icons/ri";
import { useCart } from "react-use-cart";

const OrderSummary = ({ text, dire, errors,shippingData}) => {
  const { isEmpty, items } = useCart();

  return (
    <section className="w-[37.5%] min-h-160 bg-[#e3dbcc5d] shadow-xl rounded-xl p-10 flex flex-col justify-between gap-y-6">
      <h4 className="text-3xl font-serif">Order Summary</h4>

      <div className="w-full h-px bg-[#999999b5]"></div>

      <div className=" flex flex-col gap-y-4 min-h-60">
        {isEmpty
          ? ""
          : items.map((item, i) => {
              return (
                <div key={i} className="flex justify-between items-center h-28">
                  <div className="w-[25%] h-full overflow-hidden rounded-sm">
                    <img
                      src={item?.image?.imageUrl}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt=""
                    />
                  </div>

                  <div className="w-[50%] space-y-2">
                    <p className="font-medium text-base font-serif">
                      {" "}
                      {item?.title?.split(" ").length > 5
                        ? item?.title?.split(" ")?.slice(0, 5)?.join(" ")
                        : item.title}{" "}
                    </p>

                    <p className="text-xs font-mono text-gray-600 md:text-sm font-semibold">
                       Quantity : {item?.quantity}
                    </p>
                  </div>

                  <p className="font-semibold w-[20%] text-lg">
                    $ {Math.ceil(Number(item?.price?.value))?.toFixed(2)}
                  </p>
                </div>
              );
            })}
      </div>

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
                    accumulator + Math.ceil(Number(curr?.price?.value) * curr?.quantity),
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
      </div>

      <div className="flex justify-between items-center">
        <div className="w-[45%] h-[1.7px] bg-[#c6a15168]" />
        <RiFlowerLine className="text- text-[#ddb25479]" size={20} />
        <div className="w-[45%] h-[1.5px] bg-[#c6a15168]" />
      </div>

      <div className="flex justify-between items-end font-['playfair']">
        <p className="text-3xl ">Total</p>
        <div className="text-right">
          <span className="tracking-[.3rem] font-sans text-[#9d8040] font-medium">
            USD
          </span>
          <p className="text-5xl font-bold">
            {" "}
            ${" "}
            {isEmpty
              ? "0.00"
              : items?.reduce(
                  (accumulator, curr, i) =>
                    accumulator + Math.ceil(Number(curr?.price?.value) * curr.quantity ),
                  0,
                )}
          </p>
        </div>
      </div>

      <div className="flex flex-col  items-center gap-y-3 font-['playfair']">
        <WideButton text={text} items={items} shippingData={shippingData}  direction = {dire} errors={errors} />
      </div>
    </section>
  );
};

export default OrderSummary;
