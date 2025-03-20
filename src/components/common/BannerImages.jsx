import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerImages = () => {
  const [currentImage, setCurrentImage] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    lazyLoad: "ondemand",
    beforeChange: (current, next) => {
      setCurrentImage(images[next]);  // เก็บ URL ของภาพที่จะแสดง
    },
  };

  const images = [
    "/searchBar2.png",
    "/mock-service3.avif",
    "/mock-promo.webp",
  ];

  // กำหนดภาพเริ่มต้นให้เป็นภาพแรก
  React.useEffect(() => {
    setCurrentImage(images[0]);
  }, []);

  return (
    <div className="relative w-full h-full md:h-[500px] flex items-center justify-center text-center isolation-auto rounded-4xl">
      <Slider {...settings} className="slick-carousel w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] rounded-4xl object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerImages;
