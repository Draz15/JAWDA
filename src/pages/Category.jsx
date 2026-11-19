import React, { useEffect, useRef, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useParams } from "react-router";
import { useProduct } from "../context/ProductContext";
import Card from "../components/common/Card";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";

const Category = ({}) => {
  const { category } = useParams();
  const { state, loading } = useProduct();

  // add to favorites section

  const {userFavorites:favorites} = state

  const data =
    {
      fashine: state?.products,
      bags: state?.handbags,
      watches: state?.watches,
      wallets: state?.wallets,
      sunglasses: state?.sunglasses,
      jewelries: state?.jewelries,
      belts: state?.belts,
    }?.[category] ?? [];


      // Animation section

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
          ".products-container .product-card",
          {
            y: -30,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          0.6,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  if (loading) return <p>page is loading</p>;

  return (
    <>
      <Navbar />
      <main ref={sectionRef} className="pt-20 bg-[#f7f3ea]">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="products-container grid grid-cols-2 md:grid-3 lg:grid-cols-4 gap-4 gap-y-6 w-full h-fit p-10">
          {data.map((item, i) => {
            return (
              <Card
                favorites={favorites}
                isLCP={i == 0}
                key={item?.itemId}
                item={item}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;
