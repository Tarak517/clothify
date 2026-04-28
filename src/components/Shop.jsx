import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";
import { products as allProducts } from "../data/products";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("all");

  // Sync URL with filter
  useEffect(() => {
    if (category) {
      setFilter(category.toLowerCase());
    } else {
      setFilter("all");
    }
  }, [category]);

  // Filter logic
  const filteredProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter((item) => item.category === filter);

  // Button navigation
  const handleFilter = (type) => {
    if (type === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop/${type}`);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[
          "all",
          "summer",
          "winter",
          "autumn",
          "jeans",
          "trousers",
          "pants",
          "sweatpants",
          "tshirts",
          "shirts",
          "hoodies",
        ].map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`px-4 py-2 rounded ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <ProductList products={filteredProducts} loading={false} />
    </div>
  );
};

export default Shop;