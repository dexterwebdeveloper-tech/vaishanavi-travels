import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSectionKeyword = ({
  title = "What Our Customers Say",
  subtitle = "Testimonial",
  testimonials = [],
  autoplay = true,
  autoplaySpeed = 3000,
}) => {
  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={i}>
        <i className="fa fa-star"></i>
      </span>
    ));
  };

  const sliderSettings = {
    dots: true, // Enables pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: autoplay, 
    autoplaySpeed: autoplaySpeed, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="section-full p-t150 site-bg-white twm-testimonial-section-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-head left">
              <div className="twm-sm-title left">{subtitle}</div>
              <h2 className="twm-large-title site-text-dark">{title}</h2>
            </div>
          </div>
        </div>

        <div className="section-content pb-4">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div className="item" key={testimonial.id}>
                <div className="twm-testimonial2">
                  <div className="twm-testimonial-head">
                  
                    <div className="twm-author-detail">
                      <h3 className="twm-title">{testimonial.name}</h3>
                      <div className="twm-position">{testimonial.position}</div>
                    </div>
                  </div>

                  <div className="twm-testimonial-detail">
                    <p>{testimonial.feedback}</p>
                    <div className="twm-rating-wrap">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <div className="twm-quote-icon">
                    <img src="images/quote.png" alt="Quote" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionKeyword;
