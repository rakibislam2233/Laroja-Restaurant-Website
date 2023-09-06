"use client";
import React from "react";
import "./styles.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsArrowRightShort, BsInstagram, BsTwitter } from "react-icons/bs";
const Chef = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full  bg-[#032836] py-10">
      <div className="w-full py-5">
        <div className="text-center space-y-3  pb-8">
          <h3 className="text-xl font-semibold text-orange-500">Our Chef</h3>
          <h3 className="text-3xl font-semibold text-white">
            Meet Our Expert Chefs
          </h3>
        </div>
        <Slider className="py-5" {...settings}>
          <div class="relative cursor-pointer  rounded-2xl">
            <div class="content">
              <div class="content-overlay bg-gradient-to-b "></div>
              <Image
                width={600}
                height={600}
                className="w-full h-96  rounded-2xl"
                src="https://i.postimg.cc/Y2h5hXRR/chef.jpg"
                alt=""
              />
              <div class="content-details  flex justify-center">
                <div className="w-full mx-auto bg-white space-y-5 px-3 py-5 rounded-xl">
                  <div>
                    <h2 className="text-2xl font-semibold  text-left">Rakib</h2>
                    <h2 className="font-semibold  text-left">
                      Experience : 8 Years
                    </h2>
                  </div>
                  <div className="flex  gap-4">
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoFacebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsInstagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsTwitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoLinkedin className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex gap-0.5 py-2.5 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 duration-500 transition-all   text-white">
                      <span className="group-hover:translate-x-3 duration-500">
                        View Details
                      </span>
                      <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-3 duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative cursor-pointer  rounded-2xl">
            <div class="content">
              <div class="content-overlay bg-gradient-to-b "></div>
              <Image
                width={600}
                height={600}
                className="w-full h-96  rounded-2xl"
                src="https://i.postimg.cc/Y2h5hXRR/chef.jpg"
                alt=""
              />
              <div class="content-details  flex justify-center">
                <div className="w-full mx-auto bg-white space-y-5 px-3 py-5 rounded-xl">
                  <div>
                    <h2 className="text-2xl font-semibold  text-left">Rakib</h2>
                    <h2 className="font-semibold  text-left">
                      Experience : 8 Years
                    </h2>
                  </div>
                  <div className="flex  gap-4">
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoFacebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsInstagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsTwitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoLinkedin className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex gap-0.5 py-2.5 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 duration-500 transition-all   text-white">
                      <span className="group-hover:translate-x-3 duration-500">
                        View Details
                      </span>
                      <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-3 duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative cursor-pointer  rounded-2xl">
            <div class="content">
              <div class="content-overlay bg-gradient-to-b "></div>
              <Image
                width={600}
                height={600}
                className="w-full h-96  rounded-2xl"
                src="https://i.postimg.cc/Y2h5hXRR/chef.jpg"
                alt=""
              />
              <div class="content-details  flex justify-center">
                <div className="w-full mx-auto bg-white space-y-5 px-3 py-5 rounded-xl">
                  <div>
                    <h2 className="text-2xl font-semibold  text-left">Rakib</h2>
                    <h2 className="font-semibold  text-left">
                      Experience : 8 Years
                    </h2>
                  </div>
                  <div className="flex  gap-4">
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoFacebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsInstagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsTwitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoLinkedin className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex gap-0.5 py-2.5 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 duration-500 transition-all   text-white">
                      <span className="group-hover:translate-x-3 duration-500">
                        View Details
                      </span>
                      <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-3 duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative cursor-pointer  rounded-2xl">
            <div class="content">
              <div class="content-overlay bg-gradient-to-b "></div>
              <Image
                width={600}
                height={600}
                className="w-full h-96  rounded-2xl"
                src="https://i.postimg.cc/Y2h5hXRR/chef.jpg"
                alt=""
              />
              <div class="content-details  flex justify-center">
                <div className="w-full mx-auto bg-white space-y-5 px-3 py-5 rounded-xl">
                  <div>
                    <h2 className="text-2xl font-semibold  text-left">Rakib</h2>
                    <h2 className="font-semibold  text-left">
                      Experience : 8 Years
                    </h2>
                  </div>
                  <div className="flex  gap-4">
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoFacebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsInstagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsTwitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoLinkedin className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex gap-0.5 py-2.5 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 duration-500 transition-all   text-white">
                      <span className="group-hover:translate-x-3 duration-500">
                        View Details
                      </span>
                      <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-3 duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative cursor-pointer  rounded-2xl">
            <div class="content">
              <div class="content-overlay bg-gradient-to-b "></div>
              <Image
                width={600}
                height={600}
                className="w-full h-96  rounded-2xl"
                src="https://i.postimg.cc/Y2h5hXRR/chef.jpg"
                alt=""
              />
              <div class="content-details  flex justify-center">
                <div className="w-full mx-auto bg-white space-y-5 px-3 py-5 rounded-xl">
                  <div>
                    <h2 className="text-2xl font-semibold  text-left">Rakib</h2>
                    <h2 className="font-semibold  text-left">
                      Experience : 8 Years
                    </h2>
                  </div>
                  <div className="flex  gap-4">
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoFacebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsInstagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BsTwitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex justify-center items-center bg-white hover:bg-gradient-to-r from-rose-500 to-orange-500 transition-all  hover:text-white border border-gray-300 rounded-full">
                      <BiLogoLinkedin className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex gap-0.5 py-2.5 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 duration-500 transition-all   text-white">
                      <span className="group-hover:translate-x-3 duration-500">
                        View Details
                      </span>
                      <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-3 duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Chef;
