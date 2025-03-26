import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerImages = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [currentMessage, setCurrentMessage] = useState(null);

  const images = [
    "/cover-searchbar.png",
    "/covercompony.jpg",
    "/nanny7.jpg",
  ];

  const messages = [
    <div className="text-white text-left pt-24 p-6 bg-opacity-50 rounded-lg">
      <h1 className="text-6xl font-bold">Find Local Services You Can Trust</h1>
      <p className="mt-2 text-3xl">
        Connect with skilled professionals in your neighborhood for all your service needs.
      </p>
    </div>,
    <div className="text-white text-left pt-24 p-6 bg-opacity-50 rounded-lg">
      <h1 className="text-6xl font-bold">Professional Teams, Exceptional Service</h1>
      <p className="mt-2 text-3xl">
        Our dedicated professionals provide top-quality service with reliability and trust.  
      </p>
    </div>,
    <div className="text-white text-right pt-24 p-12 bg-opacity-50 rounded-lg">
      <h1 className="text-6xl font-bold">Loving Care for Your Little Ones</h1>
      <p className="mt-2 text-3xl">
        Trusted and compassionate caregivers creating a safe and joyful environment for your children.
      </p>
    </div>,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    lazyLoad: "ondemand",
    beforeChange: (current, next) => {
      setCurrentImage(images[next]);  
      setCurrentMessage(messages[next]);
    },
  };

  // กำหนดค่าเริ่มต้น
  useEffect(() => {
    setCurrentImage(images[0]);
    setCurrentMessage(messages[0]);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center isolation-auto rounded-4xl">
      <Slider {...settings} className="slick-carousel w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[500px]">
            {/* รูปภาพพื้นหลัง */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full rounded-4xl object-cover"
            />
            {/* กล่องข้อความโฆษณา */}
            <div className="absolute inset-0 flex ">
              {messages[index]}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerImages;
