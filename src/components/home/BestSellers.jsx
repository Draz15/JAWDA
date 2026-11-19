import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import icon from "../../assets/media/svg/flower_divider.svg";
import { Link } from "react-router";
import Card from "../common/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Toaster } from "react-hot-toast";

const BestSellers = memo(
  ({
    productData = [],
    sunglassData = [],
    watchData = [],
    jewelryData = [],
    favorites = [],
  }) => {
    const data = useMemo(() => {
      return [...productData, ...sunglassData, ...watchData, ...jewelryData];
    }, [productData, sunglassData, watchData, jewelryData]);

    // animation section

    const sectionRef = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        });

        tl.from(
          ".head",
          {
            y: -30,
            opacity: 0,
            duration: 0.4,
            ease: "elastic.in",
          },
          0,
        )
          .fromTo(
            ".products-container .product-card",
            {
              y: -60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.2,
              ease: "power2.out",
            },
            0.4,
          )
          .from(
            ".btn",
            {
              y: 20,
              opacity: 0,
              duration: 0.4,
              ease: "elastic.in",
            },
            0.7,
          );
      }, sectionRef);

      return () => ctx.revert();
    }, [productData, sunglassData, watchData, jewelryData]);

    return (
      <section
        ref={sectionRef}
        className="w-full bg-[#fdf9f0] p-5 flex flex-col items-center justify-between"
      >
        <Toaster reverseOrder={false} position="top center" />
        <div className="head">
          <img src={icon} className="w-40" alt="" />
          <div className="texts text-center space-y-4">
            <h3 className="text-lg">THE ATELIER</h3>
            <p className="font-serif">Signature Pieces</p>
          </div>
        </div>

        <div className="container flex flex-col gap-y-12 items-center mt-20">
          <div className="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 w-full h-fit p-10">
            {data.slice(0, 4).map((item, i) => {
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

          <Link className="btn" to="/collections">
            <button className="capitalize text-lg cursor-pointer font-serif tracking-[.09rem] px-5 py-2 text-[#fdf9f0] rounded-3xl shadow-xl bg-[#7e9e90] hover:bg-[#3a4a3d] hover:shadow-2xl transition-all duration-300">
              Shop All products
            </button>
          </Link>
        </div>
      </section>
    );
  },
);

export default BestSellers;
