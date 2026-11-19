import React, { useEffect, useMemo, useRef, useState } from "react";
import { useProduct } from "../context/ProductContext";
import Navbar from "../layouts/Navbar";
import Card from "../components/common/Card";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";
import SearchBar from "../layouts/SearchBar";

const Collections = () => {

  const { state } = useProduct();
  const {
    products,
    jewelries,
    handbags,
    watches,
    wallets,
    sunglasses,
    loading,
    searchbar,
    userFavorites:favorites
  } = state;

  const allData = useMemo(() => {
    const mergedData = [
      ...products,
      ...sunglasses,
      ...watches,
      ...jewelries,
      ...handbags,
      ...wallets,
    ];
    return mergedData.filter(
      (item, index, arr) =>
        index === arr.findIndex((el) => el?.title === item?.title),
    );
  }, [products, sunglasses, jewelries, handbags, wallets, watches]);

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
  }, [products, sunglasses, jewelries, handbags, wallets, watches]);

  if (loading) return <div>page is loading</div>;

  return (
    <>
      <Navbar />
      <Sidebar />
      <Toaster position="top-center" reverseOrder={false} />
      <main ref={sectionRef} className="pt-20 bg-[#f7f3ea]">
        {searchbar ? (
          <SearchBar data={allData} />
        ) : (
          <div className="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 w-full h-fit p-10">
            {allData.map((item, i) => {
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
        )}
      </main>
      <Footer />
    </>
  );
};

export default Collections;
