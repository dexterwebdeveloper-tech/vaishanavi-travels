import React from "react";
import CounterSection from "./CounterSection";
import TestimonialSectionAbou from "./TestimonialSectionAbout";
import Visionn from "./Visionn";

const AboutSection = () => {
  return (




<>










     <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>About Us</h2>
            
          </div>
        </div>
      </div>
    </section>







     <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">

            {/* Left Column - Images */}
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/img/about/03.jpg" alt="Vaishnavi Travels vehicle" />

                <div className="shape-image float-bob-y">
                  {/* <img src="/img/about/04.png" alt="Decorative shape" /> */}
                </div>

                <div className="group-image float-bob-x">
                  {/* <img src="/img/about/group.png" alt="Team at Vaishnavi Travels" /> */}
                </div>

                <div className="about-image-2">
                  <img src="/images/4.png" alt="Fleet vehicle" />

                  <div className="plane-shape">
                    <img src="/img/about/plane-shape2.png" alt="Travel route graphic" />
                  </div>

                  <div className="circle-image">
                    {/* <img src="/img/about/circle.png" alt="Decorative circle" /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">Get to Know Us</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Welcome to Vaishnavi Travels — <br /> Your Journey Begins with Us
                  </h2>
                </div>

                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Vaishnavi Travels is your trusted partner for reliable, comfortable, and affordable transportation services. 
                  With years of experience in the travel and transport industry, we are committed to offering a seamless travel experience across local, outstation, and customized tour packages. 
                  Our professionally trained drivers, well-maintained fleet, and 24/7 customer support ensure that your journey is not just a ride, but a part of your cherished memories.
                  <br /><br />
                  Whether you're planning a weekend getaway, daily commute, corporate travel, or airport transfer, 
                  Vaishnavi Travels ensures timely service, safety, and customer satisfaction at every mile.
                </p>

                {/* About Item 1 */}
                <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-icon-items">
                    <div className="icon">
                      <img src="/img/check.png" alt="Checkmark icon" />
                    </div>
                    <div className="content">
                      <h5>
                        Easy Booking <br /> System
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Book your ride in just a few clicks with our user-friendly platform — anytime, anywhere.
                    </p>
                  </div>
                </div>

                {/* About Item 2 */}
                <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                  <div className="about-icon-items">
                    <div className="icon">
                      <img src="/img/check.png" alt="Checkmark icon" />
                    </div>
                    <div className="content">
                      <h5>
                        Reliable & Safe <br /> Travel Experience
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Our fleet is well-maintained and our drivers are trained to ensure your safety and comfort.
                    </p>
                  </div>
                </div>

                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
<CounterSection/>
<Visionn/>
<TestimonialSectionAbou/>

</>
  );
};

export default AboutSection;
