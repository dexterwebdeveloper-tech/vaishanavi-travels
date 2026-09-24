import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const categories = [
  { img: "/images/gallery/2.jpg", title: "Ertiga", tours: "6 Seater" },
  { img: "/images/gallery/3.jpg", title: "Tempo Traveller", tours: "25 Seater" },
  { img: "/images/gallery/18.png", title: "Bus", tours: "32 Seater" },
  { img: "/images/gallery/17.png", title: "Bus", tours: "40 Seater" },
  { img: "/images/gallery/6.jpg", title: "Urbania", tours: "17 Seater" },
];




const DestinationCategory = () => {
  return (
    <section className="destination-category-section section-padding pt-0">


      {/* Section Title */}
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Our Fleets</span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Fleets
          </h2>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="container-fluid">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".swiper-dot4" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="category-slider"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="destination-category-item">
                <div className="category-image">
                  <img src={cat.img} alt={cat.title} />
                  <div className="category-content">
                    <h5>
                      <a href="destination-details.html">{cat.title}</a>
                    </h5>
                    <p>{cat.tours}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots Pagination */}
        <div className="swiper-dot4 mt-5">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default DestinationCategory;
