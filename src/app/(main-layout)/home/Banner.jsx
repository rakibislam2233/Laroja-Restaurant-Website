"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SingleHeroSlider from "./SingleHeroSlider";
import BannerSlider from "@/app/Data/BannerSlider";
const Banner = () => {
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
          }, 1000);
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
          {BannerSlider.map((slider) => (
            <>
              <div className="keen-slider__slide number-slide1">
                <SingleHeroSlider
                  BackgourndImages={slider.backgroundImages}
                  Title={slider.title}
                  images={slider.images}
                ></SingleHeroSlider>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
