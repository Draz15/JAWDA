import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import srcBags from "../../assets/media/img/categories/1b6f5b3ce6754cd0f6eb57044c88f453.jpg";
import srcWallets from "../../assets/media/img/categories/5fad6378f87d85183634d931ea55f8a7.jpg";
import srcWatches from "../../assets/media/img/categories/dd0bcc9bdc45dee30e2aa0ce6c80ee91.jpg";
import srcJewelries from "../../assets/media/img/categories/b1247bebb0edd1a090a9d9ca1f720f3b.jpg";
import srcBelts from "../../assets/media/img/categories/e32999afb1f270a444ec1b6665612f7b.jpg";
import srcSunglasses from "../../assets/media/img/categories/b7af921912cf923ea27de9df0c1d22a7.jpg";
import srcfashine from "../../assets/media/img/categories/fashineCategory.jpg";

const Categories = () => {
  const [allShown, setAllShown] = useState(false);

  const categoryCards = [
    {
      id: 1
      ,src: srcBags,
      title: "Carry Well", // Bags
      category :"bags",
      url: "",
    },
    {
      id: 2
      ,src: srcWallets,
      title: "Small Luxuries", // Wallets
      category :"wallets",
      url: "",
    },
    {
      id: 3
      ,src: srcJewelries,
      title: "Golden Hour",
      category :"jewelries",
      url: "",
    },
    {
      id: 4
      ,src: srcWatches,
      title: "Timeless",
      category :"watches",
      url: "",
    },
    {
      id: 5
      ,src: srcfashine,
      title: "The Essential Edit",
      category :"fashine",
      url: "",
    },
    {
      id: 6
      ,src: srcBelts,
      title: "The Finishing Touch", // Belts
      category :"belts",
      url: "",
    },
    {
      id: 7
      ,src: srcSunglasses,
      title: "The Finishing Touch", // Sunglasses
      category :"sunglasses",
      url: "",
    },
  ];

  ////////////// start Category section
  return (
    <section className="min-h-screen w-full bg-[#e6e2d9] flex flex-col justify-center px-4">
      <div className="categories-texts flex justify-between">
        <div className="right-texts space-y-2">
          <p className=" text-[#795500] font-['Playfair'] text-lg font-normal">
            Curated Collections
          </p>
          <h3 className="text-[#575252] text-lg">
            The essence of our seasonal edits.
          </h3>
        </div>

        {allShown ? (
          <a
            onClick={() => {
              setAllShown((prev) => !prev);
            }}
          >
            <span className="flex items-center justify-center gap-2 cursor-pointer font-normal">
              Show Less
            </span>
          </a>
        ) : (
          <a
            onClick={() => {
              setAllShown((prev) => !prev);
            }}
          >
            <span className="flex items-center justify-center gap-2 cursor-pointer font-normal">
              View All
              <FaArrowRight className="" />{" "}
            </span>
          </a>
        )}
      </div>

      <div className="categories-container flex items-center gap-8 pt-10 overflow-scroll scrollbar-none">
        {!allShown
          ? categoryCards.slice(0, 4).map((category, i) => {
              return (
                <Link to={`/jawda/${category?.category}`} key={category.id}>
                  <div className="card w-xs xl:w-sm 2xl:w-md h-[68vh] rounded-xl overflow-hidden relative hover:shadow-2xl transition-all duration-300">
                    <img
                      src={category.src}
                      className="w-full relative h-full object-center object-cover hover:scale-110 transition-all duration-300"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-t z-10 from-[#f7f3ea]/80 via-[#f7f3ea]/1 to-transparent pointer-events-none"></div>
                    <div className="container-text absolute bottom-8 left-4 space-y-3 z-30">
                      <h4 className="font-['Playfair'] text-2xl text-[#5e4200]">
                        {category.title}
                      </h4>
                      <p className="font-sans tracking-[.4em] ml-3 text-xs font-light">
                        DISCOVER
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          : categoryCards.map((category, i) => {
              return (
                <Link to={`/jawda/${category?.category}`} key={category.id}>
                  <div className="card w-80 h-[68vh] rounded-xl overflow-hidden relative hover:shadow-2xl transition-all duration-300">
                    <img
                      src={category.src}
                      className="w-full relative h-full object-center object-cover hover:scale-110 transition-all duration-300"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-t z-10 from-[#f7f3ea]/80 via-[#f7f3ea]/1 to-transparent pointer-events-none"></div>
                    <div className="container-text absolute bottom-8 left-4 space-y-3 z-30">
                      <h4 className="font-['Playfair'] text-2xl text-[#5e4200]">
                        {category.title}
                      </h4>
                      <p className="font-sans tracking-[.4em] ml-3 text-xs font-light">
                        DISCOVER
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </section>
  );
};

export default Categories;
