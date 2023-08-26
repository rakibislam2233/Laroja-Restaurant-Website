"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Lottie from "lottie-react";
import animations from "../../../../public/Lottifiles/animation_lls8cmzp.json";
import animations2 from "../../../../public/Lottifiles/animation_lls8f94y.json";
import animations3 from "../../../../public/Lottifiles/animation_lls8iwns.json";
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
  console.log(animations);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const images5 =
    "https://i.postimg.cc/k4MK0qYt/Helping-Children-Learn-Through-Music.jpg";
  return (
    <>
      <div className="w-full">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                backgroundImage: `url('https://i.postimg.cc/BbppsY4t/Banner.jpg')`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply",
              }}
              className={`bg-[#032836] bg-opacity-40 w-full h-screen cursor-pointer`}
            >
              <div className="w-full max-w-6xl mx-auto h-full flex flex-col  md:flex-row gap-10  items-center p-10 md:p-5">
                <div className="w-full md:w-1/2 space-y-5">
                  <h3 className="text-2xl  text-zinc-300 font-medium">
                    Welcome to Laroja
                  </h3>
                  <h2
                    style={{ fontFamily: "Rubik Moonrocks" }}
                    className="leading-relaxed text-4xl tracking-wider font-bold text-transparent bg-gradient-to-br bg-clip-text from-white via-pink-500 to-orange-600"
                  >
                    ENJOY YOUR FAVORITE FOOD WITH FAMILY
                  </h2>
                  <div>
                    <Link href={"/"}>
                      <button className="flex gap-0.5 py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500  text-white">
                        Explore Menu
                        <BsArrowRightShort className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className={`w-full md:w-1/2 `}>
                  <Lottie
                    className="w-full"
                    animationData={animations}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                backgroundImage: `url('https://i.postimg.cc/BbppsY4t/Banner.jpg')`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply",
              }}
              className={`bg-[#032836] bg-opacity-40 w-full h-screen cursor-pointer`}
            >
              <div className="w-full max-w-6xl mx-auto h-full flex flex-col  md:flex-row gap-10  items-center p-10 md:p-5">
                <div className="w-full md:w-1/2 space-y-5">
                  <h3 className="text-2xl  text-zinc-300 font-medium">
                    Welcome to Laroja
                  </h3>
                  <h2
                    style={{ fontFamily: "Rubik Moonrocks" }}
                    className="leading-relaxed text-4xl tracking-wider font-bold text-transparent bg-gradient-to-br bg-clip-text from-white via-pink-500 to-orange-600"
                  >
                    THE HEALTHY BURGER FOR YOUR KIDS
                  </h2>
                  <div>
                    <Link href={"/"}>
                      <button className="flex gap-0.5 py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500  text-white">
                        Explore Menu
                        <BsArrowRightShort className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className={`w-full md:w-1/2 `}>
                  <Lottie
                    className="w-full"
                    animationData={animations2}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                backgroundImage: `url('https://i.postimg.cc/BbppsY4t/Banner.jpg')`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply",
              }}
              className={`bg-[#032836] bg-opacity-40 w-full h-screen cursor-pointer`}
            >
              <div className="w-full max-w-6xl mx-auto h-full flex flex-col  md:flex-row gap-10  items-center p-10 md:p-5">
                <div className="w-full md:w-1/2 space-y-5">
                  <h3 className="text-2xl  text-zinc-300 font-medium">
                    Welcome to Laroja
                  </h3>
                  <h2
                    style={{ fontFamily: "Rubik Moonrocks" }}
                    className="leading-relaxed text-4xl tracking-wider font-bold text-transparent bg-gradient-to-br bg-clip-text from-white via-pink-500 to-orange-600"
                  >
                    GET BEST QUALITY FOOD FROM US EXPLORE MENU
                  </h2>
                  <div>
                    <Link href={"/"}>
                      <button className="flex gap-0.5 py-3 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500  text-white">
                        Explore Menu
                        <BsArrowRightShort className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className={`w-full md:w-1/2 `}>
                  <Lottie
                    className="w-full"
                    animationData={animations3}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
