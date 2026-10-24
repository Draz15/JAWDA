import react from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import ProductContext from './context/ProductContext';
import Home from './pages/Home';
import ProductsProvider from './context/ProductContext';
import Product from './pages/Product';
import Collections from './pages/Collections';
import Category from './pages/Category';


function App() {

  return (
<BrowserRouter>
    <ProductsProvider>
      <Routes>
      <Route path='jawda' element= {<Home />}/>
      <Route path='jawda/collections' element= {<Collections />}/>
      <Route path='jawda/:category' element= {<Category />}/>
      <Route path='jawda/collections/:id' element= {<Product />}/>
      </Routes>
    </ProductsProvider>
</BrowserRouter>
  )
}

export default App;
