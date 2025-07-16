import { useState, useEffect, useCallback } from "react";

const sliderImages = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = sliderImages.length;

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden px-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${sliderImages.length * 100}%`,
          transform: `translateX(-${current * (100 / sliderImages.length)}%)`,
        }}
      >
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: `${100 / sliderImages.length}%` }}
          >
            <div
              className="h-[350px] md:h-[500px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-gray-700/70 text-white shadow hover:bg-gray-700"
      >
        ◀
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-gray-700/70 text-white shadow hover:bg-gray-700"
      >
        ▶
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              index === current ? "bg-red-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
