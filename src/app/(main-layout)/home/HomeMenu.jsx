"use client";
import React from "react";
import menuHome from "../../Data/MenuHome";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomeMenu = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full py-10">
      <div className="text-center space-y-3 text-white pb-8">
        <h3 className="text-xl font-semibold text-orange-500">
          Best Food For Family
        </h3>
        <h3 className="text-3xl font-semibold">Choose your best Category</h3>
      </div>
      <Slider {...settings}>
        {menuHome.map((menu) => (
          <div key={menu.name} className="space-y-3 text-center cursor-pointer">
            <Image
              src={menu.image}
              alt={menu.name}
              width={100}
              height={100}
              className="w-24 mx-auto h-24 rounded-full p-2 hover:scale-110 duration-500 "
            />
            <h3 className="font-semibold text-white hover:text-orange-500 duration-300">
              {menu.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeMenu;
