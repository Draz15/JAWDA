import React from "react";

const CheckPosition = ({current}) => {
  return (
    <section className="steps flex justify-center items-center gap-3 sm:gap-4 lg:gap-7">
      <div className={`shipping-step flex flex-col items-center gap-y-1 ${current[0] === 0 ? "opacity-50": ""}`}>
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <span className="uppercase text-sm font-medium tracking-[.33rem]">
          Shipping
        </span>
      </div>

      {/* ----------------------------------------------------- */}
      <div className="line h-px w-20 sm:w-28 md:w-32 lg:w-36 bg-[#5d360062]"></div>

      <div className={`shipping-step flex flex-col items-center gap-y-1 ${current[1] === 0 ? "opacity-50": ""}`}>
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <span className="uppercase text-sm font-medium tracking-[.33rem]">
          Payment
        </span>
      </div>

      {/* ----------------------------------------------------- */}
      <div className="line h-px w-20 sm:w-28 md:w-32 lg:w-36 bg-[#5d360062]"></div>

      <div className={`shipping-step flex flex-col items-center gap-y-1 ${current[2] === 0 ? "opacity-50": ""}`}>
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <span className="uppercase text-sm font-medium tracking-[.33rem]">
          Review
        </span>
      </div>
    </section>
  );
};

export default CheckPosition;
