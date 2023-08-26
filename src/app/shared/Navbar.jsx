"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BiCart } from "react-icons/bi";
import Image from "next/image";
import logo from "../../../public/Logo/280932297_538630444489008_5709939986683051075_n-fotor-20230825231759.png";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/shop",
    title: "Shop",
  },
  {
    path: "/chef",
    title: "Chef",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/gallery",
    title: "Gallery",
  },
  {
    path: "/testimonial",
    title: "Testimonial",
  },
  {
    path: "/faq",
    title: "FAQ",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const users = false;
  const cart = 5;
  const pathname = usePathname();
  const handelLogOut = () => {
    logOut();
  };
  return (
    <div className="w-full bg-[#032836] fixed z-10 top-0 left-0 right-0 text-white  md:px-24 lg:px-8">
      <div className="w-full h-24 relative flex items-center justify-between p-5">
        <Link
          href="/"
          aria-label="Larosa"
          title="Larosa"
          className="inline-flex items-center"
        >
          <Image width={65} height={65} src={logo} alt="logo"></Image>
        </Link>
        <div>
          <ul className="lg:flex gap-5 items-center hidden">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
            <li>
              <Link href={"/"}>
                <div className="relative">
                  <BiCart className="w-8 h-8"></BiCart>
                  {cart.length !== 0 ? (
                    <span className="absolute top-[-12px] bg-slate-50 w-5 h-5 rounded-full p-2 text-sm flex justify-center text-emerald-500 items-center right-[-10px]">
                      8
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          {users ? (
            <></>
          ) : (
            <>
              <Link href={"/"}>
                {" "}
                <button className="py-2 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-8 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-8 left-0 w-full px-5">
              <div className="p-5 bg-gradient-to-r from-[#0d2030] to-[#040c13] border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Larosa"
                      title="Larosa"
                      className="inline-flex items-center"
                    >
                   <Image width={65} height={65} src={logo} alt="logo"></Image>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-8 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <ul className="text-center space-y-3 py-5">
                  {navLinks.map((link) => (
                    <li key={link.title}>
                      <Link onClick={() =>setIsMenuOpen(false)} href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                <Link onClick={() =>setIsMenuOpen(false)} href={"/"}>
                      <div className="relative">
                        <BiCart className="w-10 h-10"></BiCart>
                        {cart.length !== 0 ? (
                          <span className="absolute top-0 left-7 bg-slate-50 w-5 h-5 rounded-full p-2 text-sm flex justify-center text-emerald-500 items-center">
                            8
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
