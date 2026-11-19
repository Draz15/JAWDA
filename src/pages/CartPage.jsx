import { useCart } from "react-use-cart";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import { Link } from "react-router";
import CartItem from "../components/cart/CartItem";
import { BiLeaf } from "react-icons/bi";
import Summary from "../components/cart/Summary";
import React from "react";

const CartPage = () => {
  const { items, totalItems, isEmpty } = useCart();

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="min-h-screen bg-[#f7f3ea] pt-30 px-4">
        <div className="flex flex-col gap-y-6">
          <p className="uppercase text-4xl text-[#926600f8] font-medium font-['Cormorant_Garamond'] tracking-wider">
            A LITTLE SOMETHING FOR YOU
          </p>
          <h2 className="text-3xl text-[#2f4d41] font-medium font-serif tracking-wide flex justify-between px-6">
            <span>Your bag</span> {String(items.length).padStart(2, "00")}
          </h2>
        </div>

        <Link
          to="/collections"
          className="font-serif ml-auto w-fit block capitalize font-light border-b-[1.5px] text-xl text-[#9d8040] hover:text-[#c6a151] my-5.5 transition"
        >
          Continue to shopping
        </Link>

        {/* user bag data  */}

        <div className="flex flex-wrap justify-between items-start gap-x-2 pb-10 h-fit relative">
          {/* items container  */}
          <div className="max-w-[60%]">
            {/* items header  */}
            <div className="uppercase tracking-[.5rem] font-medium text-sm text-[#414845] flex justify-between border-b-[1.4px] border-[#c6a15168] pb-5">
              <p className="">PRODUCT</p>
              <div className="flex gap-6">
                <p className="">quantity</p>
                <p className="">total</p>
              </div>
            </div>

            {/* items  */}

            <div className="pt-3">
              {isEmpty
                ? "no items available"
                : items.map((item, i, items) => {
                    return (
                      <React.Fragment key={item?.itemId}>
                        <CartItem item={item} />
                        {items[i + 1] && (
                          <div className="flex justify-between items-center py-2">
                            <div className="w-[47%] h-[1.5px] bg-[#c6a15168]" />
                            <BiLeaf className="text- text-[#ddb25479] " />
                            <div className="w-[47%] h-[1.5px] bg-[#c6a15168]" />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
            </div>
          </div>

          <Summary />

        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
