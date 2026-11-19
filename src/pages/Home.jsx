import React, { useEffect, useMemo, useRef, useState } from "react";
import { useProduct } from "../context/ProductContext";
import Navbar from "../layouts/Navbar";
import Header from "../components/common/Header";
import Categories from "../components/home/Categories";
import BestSellers from "../components/home/BestSellers";
import url from "../assets/media/img/wallpaper-one.WebP";
import { CreateItems } from "../utilities/DataReturning.js";
import Quote from "../components/home/Quote.jsx";
import Philosophy from "../components/home/Philosophy.jsx";
import Footer from "../layouts/Footer.jsx";
import Sidebar from "../layouts/Sidebar.jsx";
import { useInView } from "react-intersection-observer";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { state } = useProduct();

  const { userFavorites:favorites} =state

  // components animation section

  const { ref: headerRef, inView: headerView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const { ref: quotesRef, inView: quotesView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { products, jewelries, handbags, watches, wallets, belts, sunglasses } =
    state;

  // destruction the requirement data from products
  const productsData = useMemo(() => CreateItems(products), [products]);

  // destruction the requirement data from sunglasses
  const sunglassesData = useMemo(() => CreateItems(sunglasses), [sunglasses]);

  // destruction the requirement data from handBags
  const handbagsData = useMemo(() => CreateItems(handbags), [handbags]);

  // destruction the requirement data from watches
  const watchesData = useMemo(() => CreateItems(watches), [watches]);

  // destruction the requirement data from wallets
  const walletsData = useMemo(() => CreateItems(wallets), [wallets]);

  // destruction the requirement data from jewelries
  const jewelriesData = useMemo(() => CreateItems(jewelries), [jewelries]);

  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Header image={url} headerRef={headerRef} headerView={headerView} />
      <main className="">
        <Categories />
        <BestSellers
          productData={productsData}
          sunglassData={sunglassesData}
          favorites={favorites}
          watchData={watchesData}
          jewelryData={jewelriesData}
        />
        <Quote quotesRef={quotesRef} iterSectionState={quotesView} />
        <Philosophy />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
