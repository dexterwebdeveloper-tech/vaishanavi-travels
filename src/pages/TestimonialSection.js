import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const testimonials = [
  {
    stars: 5,
    text: "Vaishnavi Travels made our family trip unforgettable! Professional service and great attention to detail.",
    name: "Mr. Rajesh Sharma",
    role: "Business Owner",
    color: "#FFA31A",
  },
  {
    stars: 4,
    text: "The team at Vaishnavi Travels planned the perfect adventure for us. Highly recommend their customized packages!",
    name: "Miss. Priya Singh",
    role: "Travel Blogger",
    color: "#1CA8CB",
  },
  {
    stars: 5,
    text: "Reliable, safe, and friendly. Vaishnavi Travels took care of everything during our trip.",
    name: "Mr. Suresh Patel",
    role: "Marketing Executive",
    color: "#FFA31A",
  },
  {
    stars: 5,
    text: "Best travel experience ever! The service was professional and exceeded all my expectations.",
    name: "Miss. Anjali Mehta",
    role: "Graphic Designer",
    color: "#1CA8CB",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section section-padding fix bg-cover">
    
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Testimonial</span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Clients Feedback
          </h2>
        </div>

        {/* Swiper */}
        <div className="testimonial-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ nextEl: ".array-nexts", prevEl: ".array-prevs" }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 }, // Mobile
              768: { slidesPerView: 2 }, // Tablet
              1024: { slidesPerView: 3 }, // Desktop
            }}
            className="testimonial-slider"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`testimonial-card-items ${
                    index % 2 === 1 ? "style-2" : ""
                  }`}
                >
                  {/* Stars */}
                  <div className="star">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={i < t.stars ? "fas fa-star" : "fa-regular fa-star"}
                      ></i>
                    ))}
                  </div>

                  {/* Feedback */}
                  <p>{t.text}</p>

                  {/* Client Info */}
                  <div className="client-info-items">
                    <div className="client-info">
                    
                      <div className="text">
                        <h4>{t.name}</h4>
                        <p>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="array-button mt-4 text-center">
            <button className="array-prevs">Previous</button>
            <button className="array-nexts">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
