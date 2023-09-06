import React from "react";
import images from "../../../../public/Banner/PizzaBanner.jpg";
const OfferBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.postimg.cc/8kYKZ0cz/Pizza-Banner-removebg-preview.png')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full z-0   mx-auto flex bg-[#032836]"
    >
      <div className="w-full text-center">
        <div className=" px-10 lg:px-32 py-20 space-y-3">
          <h2 className="text-xl font-semibold text-orange-500">
            Special Combo Pack
          </h2>
          <p  style={{ fontFamily: "Rubik Moonrocks" }} className="leading-relaxed text-4xl tracking-wider font-bold text-transparent bg-gradient-to-br bg-clip-text from-rose-500 via-pink-500 to-orange-600">GET A 20% DISCOUNT <br /> SPECIAL FOOD EVERY TIME For You</p>
          <div className="flex justify-center py-8">
          <button className="flex gap-0.5 py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500  text-white">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
