// src/App.js
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

import DryFruitsBanner from './Components/Banners/DryFruits_banner';
import ChocolatesBanner from './Components/Banners/Chocolates_banner';
import ConfectionaryBanner from './Components/Banners/Confectionary_banner';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/dry-fruits"
          element={
            <ShopCategory
              banner={<DryFruitsBanner />}
              category="Dry Fruits"
            />
          }
        />

        <Route
          path="/chocolates"
          element={
            <ShopCategory
              banner={<ChocolatesBanner />}
              category="Chocolates"
            />
          }
        />

        <Route
          path="/confectionary"
          element={
            <ShopCategory
              banner={<ConfectionaryBanner />}
              category="Confectionary"
            />
          }
        />

        <Route
          path="/kids"
          element={
            <ShopCategory
              banner={<ConfectionaryBanner />}
              category="kid"
            />
          }
        />

        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
