import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const [size, setSize] = useState("M");

  const addToCart = (e) => {
    e.stopPropagation(); // prevent redirect

    const existing = JSON.parse(localStorage.getItem("cart")) || [];

    const found = existing.find(
      (p) => p.id === item.id && p.size === size
    );

    let updated;

    if (found) {
      updated = existing.map((p) =>
        p.id === item.id && p.size === size
          ? { ...p, qty: p.qty + 1 }
          : p
      );
    } else {
      updated = [...existing, { ...item, size, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    alert("Added to cart");
  };

  return (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="border rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition"
    >
      <img src={item.image} className="w-full h-60 object-cover" />

      <div className="p-3">
        <h3 className="truncate font-semibold">{item.name}</h3>
        <p className="font-italian">{item.price}</p>

      </div>
    </div>
  );
};

export default ProductCard;