import React, { useEffect, useState } from "react";
import icon from "../../assets/media/svg/flower_divider.svg";
import { Link } from "react-router";
import Card from "../common/Card";

const BestSellers = ({
  productData = [],
  sunglassData = [],
  watchData = [],
  jewelryData = [],
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...productData, ...sunglassData, ...watchData, ...jewelryData]);
  }, [productData, sunglassData, watchData, jewelryData]);

  return (
    <section className="w-full bg-[#fdf9f0] p-5 flex flex-col items-center justify-between">
      <div>
        <img src={icon} className="w-40" alt="" />
      </div>

      <div className="texts text-center space-y-4">
        <h3 className="text-lg">THE ATELIER</h3>
        <p className="font-serif">Signature Pieces</p>
      </div>

      <div className="container flex flex-col gap-y-12 items-center mt-20">
        <div className="products-container flex gap-x-3 gap-y-6 flex-wrap lg:flex-nowrap grow items-center justify-between w-full">
          {data.slice(0, 4).map((item) => {
            return <Card key={item?.itemId} item={item} />;
          })}
        </div>
        <Link to="/jawda/collections">
          <button className="capitalize text-lg cursor-pointer font-serif tracking-[.09rem] px-5 py-2 text-[#fdf9f0] rounded-3xl shadow-xl bg-[#7e9e90] hover:bg-[#3a4a3d] hover:shadow-2xl transition-all duration-300">
            Shop All products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
