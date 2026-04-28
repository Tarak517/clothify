import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const getNumber = (price) => Number(price.replace(/[^0-9]/g, ""));

  // update storage helper
  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 🔥 REMOVE PRODUCT
  const removeItem = (id, size) => {
    const updated = cart.filter(
      (item) => !(item.id === id && item.size === size)
    );
    updateCart(updated);
  };

  // 🔥 INCREASE QTY
  const increaseQty = (id, size) => {
    const updated = cart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    updateCart(updated);
  };

  // 🔥 DECREASE QTY
  const decreaseQty = (id, size) => {
    const updated = cart
      .map((item) =>
        item.id === id && item.size === size
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0); // remove if 0

    updateCart(updated);
  };

  // 🔥 TOTALS (always correct)
  const subtotal = cart.reduce(
    (acc, item) => acc + getNumber(item.price) * item.qty,
    0
  );

  const tax = subtotal * 0.18;
  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + tax + shipping;

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Cart is empty</p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-black text-white px-6 py-3"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id + item.size}
              className="flex items-center gap-6 border-b py-4"
            >
              <img src={item.image} className="w-20 h-20 object-cover" />

              <div className="flex-1">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>

                {/* QTY CONTROL */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id, item.size)}
                    className="px-2 border"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id, item.size)}
                    className="px-2 border"
                  >
                    +
                  </button>
                </div>
              </div>

              <p className="font-bold">
                ₹{getNumber(item.price) * item.qty}
              </p>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-red-600 font-bold"
              >
                Remove
              </button>
            </div>
          ))}

          {/* SUMMARY */}
          <div className="mt-10 max-w-md ml-auto border p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-black text-white py-2">
              Order Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;