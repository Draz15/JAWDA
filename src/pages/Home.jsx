import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import Navbar from "../layouts/Navbar";
import Header from "../components/common/Header";
import Categories from "../components/home/Categories";
import BestSellers from "../components/home/BestSellers";
import url from "../assets/media/img/wallpaper-one.jpg";
import {CreateItems} from "../utilities/DataReturning.js";
import Quote from "../components/home/Quote.jsx";
import Philosophy from "../components/home/Philosophy.jsx";
import Footer from "../layouts/Footer.jsx";

const Home = () => {
  const { state, dispatch } = useProduct();

  ///////////// start the initial state of the all products    //////////////
  const [productsData, setProductsData] = useState([]);
  const [jewelriesData, setJewelriesData] = useState([]);
  const [walletsData, setWalletsData] = useState([]);
  const [watchesData, setWatchesData] = useState([]);
  const [sunglassesData, setSunglassesData] = useState([]);
  const [handbagsData, setHandbagsData] = useState([]);

  const { products, jewelries, handbags, watches, wallets, belts, sunglasses } =
    state;

  useEffect(() => {
    // destruction the requirement data from products

    setProductsData((prev) => [...prev, ...(CreateItems(products))]);
    
    // destruction the requirement data from sunglasses
    setSunglassesData((prev) => [...prev, ...(CreateItems(sunglasses))]);
    
    // destruction the requirement data from handBags
    setHandbagsData((prev) => [...prev, ...(CreateItems(handbags) )]);
    
    // destruction the requirement data from watches
    setWatchesData((prev) => [...prev, ...(CreateItems(watches) )]);
    
    // destruction the requirement data from wallets
    setWalletsData((prev) => [...prev, ...(CreateItems(wallets) )]);
    
    // destruction the requirement data from jewelries
    setJewelriesData((prev) => [...prev, ...(CreateItems(jewelries))]);

    // destruction the requirement data from belts
  }, [products, sunglasses, jewelries, handbags, wallets, watches, belts]);

  return (
    <React.Fragment>
      <Navbar />
      <Header image={url} />
      <main className="">
        <Categories />
        <BestSellers productData ={productsData} sunglassData = {sunglassesData} watchData = {watchesData} jewelryData={jewelriesData}/>
        <Quote/>
        <Philosophy/>
      </main>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
