import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";
import { products as allProducts } from "../data/products";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (category) {
      setFilter(category.toLowerCase());
    } else {
      setFilter("all");
    }
  }, [category]);

  const filteredProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter(
          (item) => item.category === filter
        );

  const handleFilter = (type) => {
    if (type === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop/${type}`);
    }
  };

  return (
    <div className="p-10">

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[
          "all"
        ].map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`px-4 py-2 rounded ${
              filter === type
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      <ProductList products={filteredProducts} loading={false} />
    </div>
  );
};

export default Shop;