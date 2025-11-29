"use client";

import { useState, useRef, useEffect } from "react";
import SwiperCard from "./SwiperCard";
import SwiperContent1 from "./SwiperContent1";
import SwiperContent2 from "./SwiperContent2";
import SwiperContent3 from "./SwiperContent3";
import SwiperContent4 from "./SwiperContent4";
import SwiperContent5 from "./SwiperContent5";
import SwiperContent7 from "./SwiperContent7";

const cards = [
  SwiperContent1,
  SwiperContent1,
  SwiperContent2,
  SwiperContent3,
  SwiperContent4,
  SwiperContent5,

  SwiperContent7,
];

export default function CardSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current.children[currentIndex] as HTMLElement;
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentIndex]);

  return (
    <div className="relative bg-red-600 py-16 px-4 overflow-hidden">
      <div className="flex flex-row justify-between">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-12 px-4 md:px-16">
          МЫ ПРЕДЛАГАЕМ
        </h1>

        <div className="md:right-16 z-10 flex gap-3">
          <button
            onClick={goToPrev}
            className="w-36 h-18 bg-white cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-auto"
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 476.213 476.213"
            >
              <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 " />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-36 h-18 bg-white cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-auto"
            disabled={currentIndex === cards.length - 1}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -6.5 36 36"
              version="1.1"
            >
              <title>right-arrow</title>
              <desc>Created with Sketch.</desc>
              <g
                id="icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="ui-gambling-website-lined-icnos-casinoshunter"
                  transform="translate(-212.000000, -159.000000)"
                  fill="#252528"
                  fill-rule="nonzero"
                >
                  <g
                    id="square-filled"
                    transform="translate(50.000000, 120.000000)"
                  >
                    <path
                      d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                      id="right-arrow"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative px-4 md:px-16">
        {/* SCROLL-SNAP WRAPPER */}
        <div
          ref={containerRef}
          className="
            flex gap-6 md:gap-8
            overflow-x-hidden
            snap-x snap-mandatory
            scroll-smooth
            no-scrollbar
            pb-4
            pr-[556px]
            pl-[556px]
          "
        >
          {cards.map((card, index) => (
            <div key={index} className="shrink-0 snap-center">
              <SwiperCard
                hidden={index === 0 || index === cards.length - 1}
                index={index}
              >
                {card()}
              </SwiperCard>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
