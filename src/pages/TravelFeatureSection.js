import React from "react";

const TravelFeatureSection = () => {
  return (
    <section
      className="travel-feature-section section-padding fix"
      style={{ backgroundImage: "url('/img/travel-bg.jpg')" }}
    >
      {/* Floating Shapes */}
      <div className="shape-1 float-bob-y">
        <img src="/img/plane-shape1.png" alt="shape-1" />
      </div>
      <div className="shape-2 float-bob-x">
        <img src="/img/plane-shape2.png" alt="shape-2" />
      </div>

      <div className="container">
        <div className="feature-wrapper">
          <div className="row g-4">
            {/* Left Column - Content */}
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Ready for your next adventure?
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Vaishnavi Travels - Your Trusted Tour Booking Partner
                  </h2>
                </div>

                <p className="wow fadeInUp" data-wow-delay=".3s">
                  With over 25 years of experience, Vaishnavi Travels offers
                  personalized tours across India and beyond. Discover unique
                  destinations, expert guidance, and seamless bookings all in one place.
                </p>

                <div className="feature-area">
                  <div className="line-shape">
                    <img src="/img/line-shape.png" alt="line-shape" />
                  </div>

                  {/* Feature Item 1 */}
                  <div className="feature-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="feature-icon-item">
                      <div className="icon">
                        <img src="/img/icon/08.svg" alt="icon" />
                      </div>
                      <div className="content">
                        <h5>
                          Adventure Tours <br />
                          Tailored for You
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Custom itineraries crafted <br />
                          to match your travel style
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Feature Item 2 */}
                  <div className="feature-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="feature-icon-item">
                      <div className="icon">
                        <img src="/img/icon/09.svg" alt="icon" />
                      </div>
                      <div className="content">
                        <h5>
                          Hassle-Free <br />
                          Booking Experience
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Easy online bookings <br />
                          with 24/7 customer support
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="/contact-us"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  Contact Us <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="feature-image wow img-custom-anim-left">
                <img src="/img/man-image.png" alt="man" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelFeatureSection;
