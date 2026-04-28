import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cart from "./pages/Cart";
import ProductDetails from "./components/products/ProductDetails";
 import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ GLOBAL HEADER */}
      <Header />

      {/* ✅ MAIN ROUTES */}
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />     
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;