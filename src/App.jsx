import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { CartProvider } from "react-use-cart";
import ProductsProvider from "./context/ProductContext";
import { Toaster } from "react-hot-toast";
import OrderProvider from "./context/OrderContext";
const Home = lazy(() => import("./pages/Home"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Product = lazy(() => import("./pages/Product"));
const Collections = lazy(() => import("./pages/Collections"));
const Category = lazy(() => import("./pages/Category"));

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <OrderProvider>
              <Suspense fallback={<div>Loading page...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="collections" element={<Collections />} />
                  <Route path="/Cart" element={<CartPage />} />
                  <Route path="Checkout/:step" element={<CheckOut />} />
                  <Route path="Checkout/:step/:orderNumber" element={<CheckOut />} />
                  <Route path=":category" element={<Category />} />
                  <Route path="collections/:id" element={<Product />} />
                </Routes>
              </Suspense>
            </OrderProvider>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
