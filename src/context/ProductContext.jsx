import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../reducers/Reducer";
import { cases } from "../reducers/Cases";
import { productService } from "../services/api";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    getAllProducts,
    getHandbags,
    getWatches,
    getSunglasses,
    getJewelries,
    getBelts,
    getWallets,
    getProductById,
    getRelatedProducts
  } = productService;

  ////////////////// fetch all items on page load //////////////////////

  useEffect(() => {
    ///////////////// start fetching   /////////////////////////////////

    dispatch({ type: cases.LOAD_PRODUCTS });
    dispatch({ type: cases.LOAD_HANDBAGS });
    dispatch({ type: cases.LOAD_SUNGLASSES });
    dispatch({ type: cases.LOAD_WATCHES });
    dispatch({ type: cases.LOAD_BELTS });
    dispatch({ type: cases.LOAD_JEWELRIES });
    dispatch({ type: cases.LOAD_WALLETS });

    const fetchAllItems = async () => {
      try {
        const [
          productsResponse,
          handbagsResponse,
          sunglassesResponse,
          watchesResponse,
          walletsResponse,
          beltsResponse,
          jewelriesResponse,
        ] = await Promise.all([
          getAllProducts(),
          getHandbags(),
          getSunglasses(),
          getWatches(),
          getWallets(),
          getBelts(),
          getJewelries(),
        ]);

        dispatch({
          type: cases.LOAD_PRODUCTS_SUCCESS,
          payload: productsResponse,
        });

        dispatch({
          type: cases.LOAD_HANDBAGS_SUCCESS,
          payload: handbagsResponse,
        });

        dispatch({
          type: cases.LOAD_SUNGLASSES_SUCCESS,
          payload: sunglassesResponse,
        });

        dispatch({
          type: cases.LOAD_WATCHES_SUCCESS,
          payload: watchesResponse,
        });

        dispatch({
          type: cases.LOAD_WALLETS_SUCCESS,
          payload: walletsResponse,
        });

        dispatch({
          type: cases.LOAD_BELTS_SUCCESS,
          payload: beltsResponse,
        });

        dispatch({
          type: cases.LOAD_JEWELRIES_SUCCESS,
          payload: jewelriesResponse,
        });
      } catch (error) {
        //////////////// handle error cases /////////////////////////////

        dispatch({
          type: cases.LOAD_PRODUCTS_FAILURE,
          payload: error,
        });

        dispatch({
          type: cases.LOAD_HANDBAGS_FAILURE,
          payload: error,
        });

        dispatch({
          type: cases.LOAD_SUNGLASSES_FAILURE,
          payload: error,
        });

        dispatch({
          type: cases.LOAD_WATCHES_FAILURE,
          payload: error,
        });

        dispatch({
          type: cases.LOAD_WALLETS_FAILURE,
          payload: error,
        });

        dispatch({
          type: cases.LOAD_BELTS_FAILURE,
          payload: error,
        });

        dispatch({
          type: cases.LOAD_JEWELRIES_FAILURE,
          payload: error,
        });
      }
    };

    fetchAllItems();
  }, []);

  const getProductData = async (itemId) => {
    try {
      const productData = await getProductById(itemId);
      return productData
    } catch (error) {
      return (error|| "can't fetch item.")
    }
  };

  const getRelatedData = async (Category_id) => {
    try {
      const productData = await getRelatedProducts(Category_id);
      return productData
    } catch (error) {
      return (error || "can't fetch item.")
    }
  };

  /////////////////////////////////////////           provider                    /////////////////////////////////////////////

  return (
    <ProductsContext.Provider value={{ state, dispatch, getProductData,getRelatedData }}>
      {children}
    </ProductsContext.Provider>
  );
};

/////////////////// custom hook to share data //////////////////////////////

export default ProductsProvider;

export const useProduct = () => {
  let context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProduct must be used within ProductsProvider");
  }

  return context;
};
