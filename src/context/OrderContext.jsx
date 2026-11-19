import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { OrderActivities } from "../services/api";
const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const {startPayment,createUserOrder,getOrderSummary }= OrderActivities;
  return (
    <OrderContext.Provider value={{startPayment,createUserOrder,getOrderSummary}}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrder = () => {
  let context = useContext(OrderContext);
  if (context) {
    return context;
  }
    throw new Error("useOrder must be used withinOrderProvider");
};
