import React from "react";
import { FaRegGem } from "react-icons/fa";


const Quote = () => {
  return (
    <section className="w-full h-[50vh] bg-[#466558] flex items-center justify-center">
      <div className="flex flex-col items-center gap-12 pt-3 max-w-sm text-center">

        <FaRegGem className="text-5xl text-[#bb8e12]" />

        <p className="text-white text-xl leading-8">
          "You don't need more accessories. You need the right ones."
        </p>
        <h4 className="text-[#dddad18c] text-lg tracking-[.5rem]">THE JAWDA PHILOSOPHY</h4>
      </div>
    </section>
  );
};

export default Quote;
