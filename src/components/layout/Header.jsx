import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-12 py-3 border-b bg-gray-200">

      {/* LEFT → LOGO IMAGE + TEXT */}
      <div className="flex items-center gap-3">
       <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="logo"
    className="w-10 h-10 object-contain"
  />
  <h1 className="text-3xl font-bold tracking-widest">
    CLOTHIFY
  </h1>
</Link>
      </div>

      {/* CENTER → MENU */}
      <nav className="flex gap-10 text-lg font-sans">

        {/* SHOP BY SEASON */}
        <div
          onMouseEnter={() => setOpenMenu("season")}
          onMouseLeave={() => setOpenMenu(null)}
          className="relative cursor-pointer"
        >
          <Link to="/shop">SHOP BY SEASON</Link>

          {openMenu === "season" && (
            <div className="absolute top-6 left-0 bg-white shadow-md p-4 w-40 rounded">
              <Link to="/shop/summer" className="block py-1 text-gray-500 hover:text-black">SUMMER</Link>
              <Link to="/shop/winter" className="block py-1 text-gray-500 hover:text-black">WINTER</Link>
              <Link to="/shop/autumn" className="block py-1 text-gray-500 hover:text-black">AUTUMN</Link>
            </div>
          )}
        </div>

        {/* BOTTOM WEAR */}
        <div
          onMouseEnter={() => setOpenMenu("bottom")}
          onMouseLeave={() => setOpenMenu(null)}
          className="relative cursor-pointer"
        >
          BOTTOM WEAR

          {openMenu === "bottom" && (
            <div className="absolute top-6 left-0 bg-white shadow-md p-4 w-40 rounded">
              <Link to="/shop/pants" className="block py-1 text-gray-500 hover:text-black">PANTS</Link>
              <Link to="/shop/trousers" className="block py-1 text-gray-500 hover:text-black">TROUSERS</Link>
              <Link to="/shop/jeans" className="block py-1 text-gray-500 hover:text-black">JEANS</Link>
              <Link to="/shop/sweatpants" className="block py-1 text-gray-500 hover:text-black">SWEATPANTS</Link>
            </div>
          )}
        </div>

        {/* TOP WEAR */}
        <div
          onMouseEnter={() => setOpenMenu("top")}
          onMouseLeave={() => setOpenMenu(null)}
          className="relative cursor-pointer"
        >
          TOP WEAR

          {openMenu === "top" && (
            <div className="absolute top-6 left-0 bg-white shadow-md p-4 w-40 rounded">
              <Link to="/shop/tshirts" className="block py-1 text-gray-500 hover:text-black">T-SHIRTS</Link>
              <Link to="/shop/shirts" className="block py-1 text-gray-500 hover:text-black">SHIRTS</Link>
              <Link to="/shop/hoodies" className="block py-1 text-gray-500 hover:text-black">HOODIES</Link>
            </div>
          )}
        </div>

        {/* ACCESSORIES */}
        <div
          onMouseEnter={() => setOpenMenu("accessories")}
          onMouseLeave={() => setOpenMenu(null)}
          className="relative cursor-pointer"
        >
          ACCESSORIES

          {openMenu === "accessories" && (
            <div className="absolute top-6 left-0 bg-white shadow-md p-4 w-40 rounded">
              <p className="py-1 text-gray-500 hover:text-black cursor-pointer">CAPS</p>
              <p className="py-1 text-gray-500 hover:text-black cursor-pointer">BAGS</p>
              <p className="py-1 text-gray-500 hover:text-black cursor-pointer">WATCHES</p>
            </div>
          )}
        </div>

      </nav>

      {/* RIGHT → CART + LOGIN */}
      <div className="flex gap-8 text-lg font-sans">
        <Link to="/cart" className="hover:text-gray-600">CART</Link>
   <Link to="/login" className="cursor-pointer hover:text-gray-600">
  LOGIN
</Link>
      </div>

    </header>
  );
};

export default Header;