import React from "react";
import { assets } from "../assets/ananya"; // adjust path if needed

const Ananya = () => {
  const images = [
    assets.ananya_one,
    assets.ananya_two,
    assets.ananya_three,
    assets.ananya_four,
    assets.ananya_five,
    assets.ananya_six,
    assets.ananya_seven,
    assets.ananya_eight,
    assets.ananya_nine,
    assets.ananya_ten, // gif
    assets.ananya_eleven, // gif
  ];

  return (
    <div className="w-full px-4 py-10">
      {/* 🔥 Trendy Gradient Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
        Ananya / Kirthiga R
      </h1>

      {/* 📸 Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={img}
              alt={`ananya-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ananya;
