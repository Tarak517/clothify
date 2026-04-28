// src/pages/Home.jsx
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import summer from "../assets/summer.jpg";
import winter from "../assets/winter.jpg";
import autumn from "../assets/autumn.jpg";
import jeans from "../assets/jeans.jpg";

const images = [summer, winter, autumn, jeans];
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Slider />

      <div className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Shop By Season
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div
            onClick={() => navigate("/shop/summer")}
            className="cursor-pointer bg-gray-100 p-6 rounded-lg text-center shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">Summer</h3>
          </div>

          <div
            onClick={() => navigate("/shop/winter")}
            className="cursor-pointer bg-gray-100 p-6 rounded-lg text-center shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">Winter</h3>
          </div>

          <div
            onClick={() => navigate("/shop/autumn")}
            className="cursor-pointer bg-gray-100 p-6 rounded-lg text-center shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">Autumn</h3>
          </div>

        </div>
      </div>
    </>
  );
};
export default Home;