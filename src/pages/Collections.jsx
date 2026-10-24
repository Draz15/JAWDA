import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import Navbar from "../layouts/Navbar";
import Card from "../components/common/Card";
import Footer from "../layouts/Footer";

const Collections = () => {
  const { state, dispatch } = useProduct();
  const {
    products,
    jewelries,
    handbags,
    watches,
    wallets,
    sunglasses,
    loading,
  } = state;

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const mergedData = [
      ...products,
      ...sunglasses,
      ...watches,
      ...jewelries,
      ...handbags,
      ...wallets,
    ];

    const pureData = mergedData.filter(
      (item, index, arr) =>
        index === arr.findIndex((el) => el?.title === item?.title),
    );

    setAllData(pureData);
  }, [products, sunglasses, jewelries, handbags, wallets, watches]);

  if (loading) return <div>page is loading</div>;

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#f7f3ea]">
        <div className="products-container grid grid-cols-2 md:grid-3 lg:grid-cols-4 gap-4 gap-y-6 w-full h-fit p-10">
          {allData.map((item) => {
            return <Card key={item?.itemId} item={item} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Collections;
