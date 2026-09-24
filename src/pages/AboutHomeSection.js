import React from "react";

const AboutSection = () => {
  return (
    <section
      className="about-section section-padding fix bg-cover"
      style={{ backgroundImage: "url(/img/about/about-bg.jpg)" }}
    >
      {/* Floating Shape */}
      {/* <div className="right-shape float-bob-x">
        <img src="/img/about/right-shape.png" alt="shape" />
      </div> */}

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            {/* Left Column - Images */}
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/img/about/01.png"
                  alt="Vaishnavi Travels"
                  className="wow img-custom-anim-left"
                />
                <div className="border-image">
                  <img src="/img/about/border.png" alt="border" />
                </div>

                {/* Video Button */}
                {/* <div className="vdeo-item">
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="fa-duotone fa-play"></i>
                  </a>
                  <h5>WATCH VIDEO</h5>
                </div> */}

                {/* Overlay Image + Tour Info */}
                <div className="about-image-2">
                  <img
                    src="/img/about/02.png"
                    alt="Vaishnavi Tours"
                    className="wow img-custom-anim-top"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                  />
                  <div className="plane-shape float-bob-y">
                    <img src="/img/about/plane-shape.png" alt="plane" />
                  </div>
                  <div className="about-tour">
                    <div className="icon">
                      <img src="/img/icon/10.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h4>Luxury Tour</h4>
                      <span>25+ Years of Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Explore with Us
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Discover India with <br />
                    Vaishnavi Travels
                  </h2>
                </div>

                <div className="about-area mt-4 mt-md-0">
                  <div className="line-image">
                    <img src="/img/about/Line-image.png" alt="line" />
                  </div>

                  {/* Items */}
                  <div
                    className="about-items wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="icon">
                      <img src="/img/icon/05.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h5>Tailored Tour Packages</h5>
                      <p>
                        Customized travel experiences <br />
                        across India to suit every traveler.
                      </p>
                    </div>
                  </div>

                  <div
                    className="about-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <img src="/img/icon/06.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h5>Comfort & Safety</h5>
                      <p>
                        Modern fleet with trained drivers <br />
                        to ensure your safety and comfort.
                      </p>
                    </div>
                  </div>

                  <div
                    className="about-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="icon">
                      <img src="/img/icon/07.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h5>Expert Guidance</h5>
                      <p>
                        Local insights and professional <br />
                        tour guides to enhance your journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
