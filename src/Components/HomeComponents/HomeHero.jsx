import React from "react";

// #009F8A
// #F8F8F2

export default function HomeHero() {
  return (
    <>
      <div className="bg-red-100 min-h-[80vh] overflow-hidden">
        <div className="relative contaner mx-auto">
          <div className="">
            <div className="">
              <img
                src="hero1.jpg"
                alt=""
                className="h-screen w-full object-cover"
              />
            </div>
            <div className="bg-black/40 absolute inset-0"></div>
            <div className="absolute bottom-4 ">
              <div className="flex items-center justify-between container mx-auto">
                <div className="text-white font-extrabold text-9xl max-w-4xl">
                  Welcome to Our Bakery
                </div>
                <div>
                  <button className="bg-white text-black">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
