import React from "react";
import allMenu from "../../../../public/PopularMenu/AllMenu.png";
import burger from "../../../../public/PopularMenu/burger.png";
import pizza from "../../../../public/PopularMenu/pizza.png";
import chicken from "../../../../public/PopularMenu/chicken.png";
import sandwich from "../../../../public/PopularMenu/sandwich.png";
import combo from "../../../../public/PopularMenu/combo.png";
import drinks from "../../../../public/PopularMenu/cheers.png";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
const PopularMenu = () => {
  return (
    <div className="w-full p-5 py-10 px-8">
      <div className="text-center space-y-3 text-white">
        <h3 className="text-xl font-semibold text-orange-500">Popular Menu</h3>
        <h3 className="text-3xl font-semibold">Our Popular Delicious Foods</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 p-5 bg-[#032836] py-5 mt-10 text-center transition-all rounded-xl">
        <div className="space-y-4 bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer">
          <Image
            width={50}
            height={50}
            src={allMenu}
            alt="allMenu"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">All Menu</h1>
        </div>
        <div className="space-y-4 hover:bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer transition-all duration-500">
          <Image
            width={50}
            height={50}
            src={burger}
            alt="burger"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">Burger</h1>
        </div>
        <div className="space-y-4 hover:bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer transition-all duration-500">
          <Image
            width={50}
            height={50}
            src={pizza}
            alt="pizza"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">Pizza</h1>
        </div>
        <div className="space-y-4 hover:bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer transition-all duration-500">
          <Image
            width={50}
            height={50}
            src={chicken}
            alt="chicken"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">Chicken</h1>
        </div>
        <div className="space-y-4 hover:bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer transition-all duration-500">
          <Image
            width={50}
            height={50}
            src={sandwich}
            alt="sandwich"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">Sandwich</h1>
        </div>
        <div className="space-y-4 hover:bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer transition-all duration-500">
          <Image
            width={50}
            height={50}
            src={combo}
            alt="combo"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">Combo</h1>
        </div>
        <div className="space-y-4 hover:bg-gradient-to-r from-rose-500 to-orange-500 p-2 rounded-xl cursor-pointer transition-all duration-500">
          <Image
            width={50}
            height={50}
            src={drinks}
            alt="drinks"
            className="mx-auto"
          />
          <h1 className="font-semibold text-white">Drinks</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 border border-[#032836] p-5 rounded-xl">
          <div className="col-span-1">
            <Image
              width={150}
              height={150}
              className="mx-auto w-full h-32"
              src={"https://i.postimg.cc/yN6r86B6/sandwich.png"}
              alt=""
            />
          </div>
          <div className="col-span-3 text-white space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Daria Shevtsova</h3>
              <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
            </div>
            <p>
              Rapidiously repurpose customer directed markets. Rapidiously
              enhance extensive.
            </p>
            <div className="flex justify-between">
              <h3 className="flex gap-5 items-center"> <span className="text-transparent bg-gradient-to-br bg-clip-text from-rose-500 to-orange-500 font-semibold text-[18px]">$180.85</span>  <span className="line-through">$350.99</span></h3>
              <div className="flex gap-3 items-center">
                <button className="w-7 h-7 bg-[#062a37] hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-300 p-1 flex justify-center items-center rounded-full">
                  <AiOutlineEye className="w-5 h-5"></AiOutlineEye>
                </button>
                <button className="w-7 h-7 bg-[#062a37] hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-300 p-1 flex justify-center items-center rounded-full">
                  <BiCart className="w-5 h-5"></BiCart>
                </button>
                <button className="w-7 h-7 bg-[#062a37] hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-300 p-1 flex justify-center items-center rounded-full">
                  <AiOutlineHeart className="w-5 h-5"></AiOutlineHeart>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 border border-[#032836] p-5 rounded-xl">
          <div className="col-span-1">
            <Image
              width={150}
              height={150}
              src={"https://i.postimg.cc/yN6r86B6/sandwich.png"}
              alt=""
            />
          </div>
          <div className="col-span-3 text-white space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Daria Shevtsova</h3>
              <h3>Rating</h3>
            </div>
            <p>
              Rapidiously repurpose customer directed markets. Rapidiously
              enhance extensive.
            </p>
            <div className="flex justify-between">
              <h3>$180.85 $350.99</h3>
              <h3>Icons</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 border border-[#032836] p-5 rounded-xl">
          <div className="col-span-1">
            <Image
              width={150}
              height={150}
              src={"https://i.postimg.cc/yN6r86B6/sandwich.png"}
              alt=""
            />
          </div>
          <div className="col-span-3 text-white space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Daria Shevtsova</h3>
              <h3>Rating</h3>
            </div>
            <p>
              Rapidiously repurpose customer directed markets. Rapidiously
              enhance extensive.
            </p>
            <div className="flex justify-between">
              <h3>$180.85 $350.99</h3>
              <h3>Icons</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 border border-[#032836] p-5 rounded-xl">
          <div className="col-span-1">
            <Image
              width={150}
              height={150}
              src={"https://i.postimg.cc/yN6r86B6/sandwich.png"}
              alt=""
            />
          </div>
          <div className="col-span-3 text-white space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Daria Shevtsova</h3>
              <h3>Rating</h3>
            </div>
            <p>
              Rapidiously repurpose customer directed markets. Rapidiously
              enhance extensive.
            </p>
            <div className="flex justify-between">
              <h3>$180.85 $350.99</h3>
              <h3>Icons</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="flex gap-0.5 py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500  text-white">See More</button>
      </div>
    </div>
  );
};

export default PopularMenu;
