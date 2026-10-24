import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useParams } from "react-router";
import { useProduct } from "../context/ProductContext";
import Card from "../components/common/Card";

const Category = ({}) => {
  const { category } = useParams();
  const { state, loading } = useProduct();

  const data = {
    fashine: state?.products,
    bags: state?.handbags,
    watches: state?.watches,
    wallets: state?.wallets,
    sunglasses: state?.sunglasses,
    jewelries: state?.jewelries,
    belts: state?.belts,
  }?.[category] ?? [] ;


  if (loading) return <p>page is loading</p>;

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#f7f3ea]">
        <div className="products-container grid grid-cols-2 md:grid-3 lg:grid-cols-4 gap-4 gap-y-6 w-full h-fit p-10">
          {data.map((item) => {
            return <Card key={item?.itemId} item={item} />;
          })}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Category;
