import React, { useEffect } from "react";
import CheckPosition from "./CheckPosition";
import { TbSparkle } from "react-icons/tb";
import gsap from "gsap";
import { Link, useParams, useSearchParams } from "react-router";
<TbSparkle />;

const Review = () => {
  const [searchParams] = useSearchParams();
  const { orderNumber } = useParams();
  const totalAmount = searchParams.get("totalAmount");
  const currentStep = [1, 1, 1];
  useEffect(() => {
    gsap.to(".sparkle", {
      repeat: -1,
      rotate: 360,
      duration: 3,
      ease: "none",
    });

    gsap.fromTo(
      ".check-path",
      {
        strokeDasharray: 40,
        strokeDashoffset: 40,
      },
      {
        strokeDashoffset: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power1.out",
      },
    );
  }, []);
  return (
    <React.Fragment>
      <main>
        <CheckPosition current={currentStep} />

        <div className="flex flex-col items-center">
          {/* icon section  */}
          <div className="h-20 w-20 my-10 flex justify-center items-center bg-[#ecd2a54b] rounded-xl relative">
            <svg
              viewBox="0 0 24 24"
              className="h-11 w-11 text-[#7A5A00]"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="check-path"
                d="M5 12.5 10 17.5 19 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TbSparkle
              strokeWidth={2}
              className="sparkle absolute text-3xl text-[#7A5A00] top-[-10%] right-[-10%]"
            />
          </div>

          <div className="flex flex-col gap-y-8 max-w-[50%] text-center items-center">
            <h3 className="text-5xl font-semibold font-serif">
              Thank you — your order is on its way
            </h3>
            <p className="text-xl text-[#3a3e3ced]">
              Your exquisite selection has been carefully prepared. A
              confirmation has been sent to your email with tracking details.
            </p>
            <div className="space-x-4 w-fit border-y py-2 border-[#3a3e3cb6]">
              <span className="text-lg tracking-[.3rem] font-medium font-sans">
                Order
              </span>
              <span className="text-4xl font-semibold font-sans">
                {orderNumber}
              </span>
              <button className="text-lg underline cursor-pointer">Copy</button>
            </div>

            <div className="w-fit space-x-6 mt-8">
              <Link className="w-48 inline-block px-2 py-3 text-white bg-[#17352a] hover:bg-[#0d1f13]  cursor-pointer transition-colors duration-200">
                View Order
              </Link>
              <Link
                to="/"
                className="text-[#7A5A00] inline-block w-fit p-2 border-b border-[#7a590081] hover:border-[#7A5A00] cursor-pointer transition-colors duration-200"
              >
                Return To Home Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Review;
