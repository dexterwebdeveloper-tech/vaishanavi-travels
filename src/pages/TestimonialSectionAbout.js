import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    img: "/img/testimonial/client-1.png",
    name: "Mr. Ramesh Patil",
    role: "Frequent Traveler",
    feedback:
      "Vaishnavi Travels made our Pune to Shirdi trip extremely comfortable. The vehicle was clean, the driver was courteous, and the journey was smooth. I’ll definitely book again!",
  },
  {
    id: 2,
    img: "/img/testimonial/client-2.png",
    name: "Ms. Sneha Joshi",
    role: "IT Professional",
    feedback:
      "I use Vaishnavi Travels regularly for airport transfers and they have never disappointed. Always on time and very professional service.",
  },
  {
    id: 3,
    img: "/img/testimonial/client-3.png",
    name: "Mr. Anil Deshmukh",
    role: "Business Owner",
    feedback:
      "For our business tours across Maharashtra, Vaishnavi Travels is our go-to partner. Their fleet is well-maintained and customer service is excellent.",
  },
  {
    id: 4,
    img: "/img/testimonial/client-4.png",
    name: "Ms. Priya Kulkarni",
    role: "Tourist",
    feedback:
      "I booked a weekend tour to Mahabaleshwar with Vaishnavi Travels and had an amazing experience. The itinerary was well-planned, and the entire journey was stress-free.",
  },
  {
    id: 5,
    img: "/img/testimonial/client-5.png",
    name: "Mr. Rohit Jadhav",
    role: "Student",
    feedback:
      "I traveled with Vaishnavi Travels for an educational trip. The staff was friendly and helpful. Very reliable service, even for group travel!",
  },
];


const TestimonialSectionAbout = () => {
  return (
    <section
      className="testimonial-section section-padding fix bg-cover"
      style={{ backgroundImage: "url(/img/testimonial/testimonial-bg.jpg)" }}
    >
      <div className="container">
        <div className="testimonial-wrapper-3">
          <div className="row g-4 align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="testimonial-image">
                <img src="/img/testimonial/03.png" alt="testimonial" />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">Testimonial</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Travelers Love Our Locals
                  </h2>
                </div>

                {/* Swiper Slider */}
                <Swiper
                  modules={[Autoplay, Navigation]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  navigation={{
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                  }}
                  slidesPerView={1}
                  className="testimonial-slider3"
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial-card-items">
                        <div className="client-info-items">
                          <div className="client-info">
                            {/* <div className="client-image">
                              <img src={item.img} alt={item.name} />
                            </div> */}
                            <div className="content">
                              <h4>{item.name}</h4>
                              <p>{item.role}</p>
                            </div>
                          </div>
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="37"
                              viewBox="0 0 50 37"
                              fill="none"
                            >
                              <path
                                d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                                fill="#1CA8CB"
                              />
                            </svg>
                          </div>
                        </div>
                        <p>{item.feedback}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fa-regular fa-arrow-up"></i>
                  </button>
                  <button className="array-next">
                    <i className="fa-regular fa-arrow-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionAbout ;
