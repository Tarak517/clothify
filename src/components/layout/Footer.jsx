import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-12 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* CONTACT */}
        <div>
          <h2 className="font-bold mb-3">CLOTHIFY</h2>
          <p className="text-sm">Hyderabad Telangana 500073</p>
          <p className="text-sm mt-2">+91 912102235/6/7</p>
          <p className="text-sm mt-2">hey@clothify.in</p>
        </div>

        {/* SHOP */}
        <div>
          <h2 className="font-bold mb-3">Shop</h2>
          <ul className="text-sm space-y-1 text-gray-300">

            <li>
              <Link to="/shop" className="hover:text-white">
                Shop By Season
              </Link>
            </li>

            <li>
              <Link to="/shop/hoodies" className="hover:text-white">
                The Love Hoodies
              </Link>
            </li>

            <li>
              <Link to="/shop/winter" className="hover:text-white">
                Autumn/Winter
              </Link>
            </li>

            <li>
              <Link to="/shop/summer" className="hover:text-white">
                Summer
              </Link>
            </li>

          </ul>
        </div>

        {/* BOTTOM WEAR */}
        <div>
          <h2 className="font-bold mb-3">Bottom Wear</h2>
          <ul className="text-sm space-y-1 text-gray-300">

            <li><Link to="/shop/jeans" className="hover:text-white">Jeans</Link></li>
            <li><Link to="/shop/trousers" className="hover:text-white">Trousers</Link></li>
            <li><Link to="/shop/pants" className="hover:text-white">Joggers</Link></li>
            <li><Link to="/shop/sweatpants" className="hover:text-white">Sweatpants</Link></li>

          </ul>
        </div>

        {/* TOP WEAR */}
        <div>
          <h2 className="font-bold mb-3">Top Wear</h2>
          <ul className="text-sm space-y-1 text-gray-300">

            <li><Link to="/shop/tshirts" className="hover:text-white">Tees</Link></li>
            <li><Link to="/shop/shirts" className="hover:text-white">Shirts</Link></li>
            <li><Link to="/shop/hoodies" className="hover:text-white">Hoodies</Link></li>
            <li><Link to="/shop/sweatshirts" className="hover:text-white">Sweatshirts</Link></li>

          </ul>
        </div>

        {/* ACCESSORIES */}
        <div>
          <h2 className="font-bold mb-3">Accessories</h2>
          <ul className="text-sm space-y-1 text-gray-300 mb-4">

            <li><Link to="/shop/accessories/beanies" className="hover:text-white">Beanies</Link></li>
            <li><Link to="/shop/accessories/mugs" className="hover:text-white">Coffee Mugs</Link></li>
            <li><Link to="/shop/accessories/caps" className="hover:text-white">Caps</Link></li>
            <li><Link to="/shop/accessories/bottles" className="hover:text-white">Bottles</Link></li>
            <li><Link to="/shop/accessories/socks" className="hover:text-white">Socks</Link></li>
            <li><Link to="/shop/accessories/umbrellas" className="hover:text-white">Umbrellas</Link></li>

          </ul>

          <h2 className="font-bold mb-2">Company</h2>
          <ul className="text-sm space-y-1 text-gray-300">

            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/returns" className="hover:text-white">Return Policy</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>

          </ul>
        </div>

      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm mb-2">FOLLOW US ON</p>

        <a
          href="https://instagram.com"
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          @clothify
        </a>

        <p className="text-xs text-gray-500 mt-4">
          © 2026 clothify. All rights reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;