import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaRegGem } from "react-icons/fa";

const Quote = ({ quotesRef, iterSectionState }) => {

  // text animation section 
  const quote = "You don't need more accessories. You need the right ones.";
  const letters = Array.from(quote);
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (!iterSectionState) return;
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setVisibleLetters(index);

      if (index >= letters.length) {
        clearInterval(interval);
      }
    }, 2500 / letters.length);

    return () => clearInterval(interval);
  }, [iterSectionState]);

  // line animation section 
  useEffect(() => {
    if (!iterSectionState || visibleLetters >= letters.length) return;

    const animation = gsap.to(".animate-blink", {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    return () => animation.kill();
  }, [iterSectionState]);
  return (
    <section
      ref={quotesRef}
      className="w-full h-[50vh] bg-[#466558] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-12 pt-3 max-w-sm text-center">
        <FaRegGem className="text-5xl text-[#bb8e12]" />

        <p className="text-white text-xl leading-8">
          {letters.slice(0, visibleLetters).join("")}{visibleLetters < letters.length && (
            <span className="inline-block h-4 w-1 bg-white animate-blink ml-1 align-middle"></span>
          )}
        </p>
        <h4 className="text-[#dddad18c] text-lg tracking-[.5rem]">
          THE JAWDA PHILOSOPHY
        </h4>
      </div>
    </section>
  );
};

export default Quote;
