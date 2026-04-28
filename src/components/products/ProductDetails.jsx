import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [size, setSize] = useState("M");

  const product = products.find((p) => p.id === Number(id));

  const addToCart = () => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];

    const found = existing.find(
      (p) => p.id === product.id && p.size === size
    );

    let updated;

    if (found) {
      updated = existing.map((p) =>
        p.id === product.id && p.size === size
          ? { ...p, qty: p.qty + 1 }
          : p
      );
    } else {
      updated = [...existing, { ...product, size, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    alert("Added to cart");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">

      <img src={product.image} className="w-full h-96 object-cover" />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-blue-600 font-bold text-xl">{product.price}</p>

        <div className="mt-6">
          <p className="font-semibold mb-2">Select Size</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border ${
                  size === s ? "bg-black text-white" : "bg-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* FIXED BUTTON */}
        <button
          onClick={addToCart}
          className="mt-6 bg-black text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;