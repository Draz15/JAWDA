import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProduct } from "../context/ProductContext";
import { CreateItem, CreateItems } from "../utilities/DataReturning";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ProductHeader from "../components/productDetails/ProductHeader";
import RelatedProducts from "../components/productDetails/RelatedProducts";
import { initialState } from "../reducers/Reducer";

const Product = () => {
  const { id } = useParams();
  const { getProductData, getRelatedData } = useProduct();

  // start the initial state section

  const [item, setItem] = useState({});
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // fetch the Product Detailed Data

        const data = await getProductData(id);
        if (!data) return;
        const Product = await CreateItem(data)
        setItem(Product);

        // fetch the related products Data        
        const category_id = Product?.categoryId;
        if (!category_id) return;

        const categoryData = await getRelatedData(category_id);
        const categoryProducts = CreateItems(categoryData)
        setCategory(categoryProducts);
        

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    
  }, [id,item?.categoryId]);

  if (isLoading) {
    return <p>page is loading</p>;
  }
  return (
    <>
      <Navbar />
      <ProductHeader item={item} />
      <RelatedProducts Category={category} />
      <Footer />
    </>
  );
};

export default Product;
