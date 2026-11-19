import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useCart } from "react-use-cart";
import { useProduct } from "../context/ProductContext";
import { cases } from "../reducers/Cases";
import SidebarItem from "../components/common/SideBarItem";
import gsap from "gsap";

const Sidebar = () => {
  const { items, totalItems, isEmpty } = useCart();
  const { state, dispatch } = useProduct();
  const { sidebar } = state;
  const navigate = useNavigate();

  const toggleSidebar = () => {
    dispatch({ type: cases.CLICKED_SIDEBAR });
  };

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

  return (
    <React.Fragment>
      <aside
        className={`ml-auto w-88 s:w-sm md:w-md h-screen fixed right-0 top-0 z-50
    transition-transform duration-300 ease-in-out
    ${sidebar ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-2 sm:px-3 md:px-4 pt-1.5 min-h-[65%] bg-[#F8F3EA]">
          {/* cart header  */}
          <div className="head flex flex-col gap-y-1.5">
            <div className="flex justify-between items-center p-3 ">
              <div className="flex items-center gap-3">
                <h4 className="text-lg sm:text-xl font-serif text-green-950">
                  Your Bag{" "}
                  <span className="text-[.8rem] sm:text-[1rem] text-yellow-950">
                    ({4})
                  </span>
                </h4>
                <span className="text-sm">حقيبة التسوق</span>
              </div>
              <button
                className="text-lg sm:text-xl cursor-pointer bg-[#fffaf1] rounded-lg p-1.5"
                onClick={toggleSidebar}
              >
                <IoCloseOutline strokeWidth={3} />
              </button>
            </div>

            <div className="bg-[#fcfcfc] p-4 rounded-2xl space-y-2 cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium sm:font-bold flex items-center gap-3">
                  {" "}
                  <MdOutlineLocalShipping className="text-lg text-[#7A5B14]" />{" "}
                  Complimentary White Glove Delivery
                </p>
                <span className="text-xs font-medium sm:font-bold  text-[#7A5B14]">
                  $150 away
                </span>
              </div>

              <div className="w-full rounded-2xl bg-[#bc912f] h-1"></div>
              <p className="text-[.58rem] sm:text-xs font-medium leading-3 sm:leading-4">
                {" "}
                Orders over $1,850 qualify for climate-neutral courier delivery
                and bespoke unboxing.
              </p>
            </div>
          </div>

          {/* cart items container  */}

          <div className="cart-container h-60 px-2 py-2 flex flex-col gap-2 overflow-auto scrollbar-thin scrollbar-thumb-gray-600">
            {/* cartCard example */}
            {isEmpty
              ? ""
              : items.map((item) => {
                  return <SidebarItem key={item?.itemId} item={item} />;
                })}
            {!isEmpty && (
              <Link
                onClick={() => {
                  navigate("/Cart");
                  dispatch({ type: cases.CLICKED_SIDEBAR });
                }}
                className="font-serif capitalize sm:font-medium border-b-[1.5px] max-w-fit sm:border-b-2 text-sm text-[#9d8040] hover:text-[#c6a151] my-1.5 text-center mx-auto transition"
              >
                View full bag
              </Link>
            )}
          </div>
        </div>

        <div className="foot space-y-1.5 bg-white px-6 pt-6 min-h-[35%] w-full">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium sm:font-semibold font-serif">
              Subtotal
            </span>{" "}
            <h3 className="font-serif sm:text-lg md:text-xl font-medium">
              $<span ref={priceRef}>{currSubTotal}</span>
            </h3>
          </div>

          <p className="text-xs sm:text-sm">
            Taxes and duties are calculated at checkout.
          </p>
          <div className="text-center">
            <Link
              onClick={() => {
                if (isEmpty) {
                  return;
                }
                navigate("/Checkout/shipping");
                dispatch({ type: cases.CLICKED_SIDEBAR });
              }}
              className={`w-full bg-[#012017] block text-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl font-['playfair'] transition ${isEmpty ? "opacity-60 cursor-not-allowed" : "hover:bg-[#223426]"}`}
            >
              Proceed to checkout
            </Link>
            <Link
              onClick={() => {
                dispatch({ type: cases.CLICKED_SIDEBAR });
                navigate("/collections");
              }}
              className="font-normal sm:font-semibold border-b-[1.5px] sm:border-b-2 text-sm text-[#9d8040] hover:text-[#c6a151] my-2.5 inline-block transition"
            >
              Continue browsing
            </Link>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
