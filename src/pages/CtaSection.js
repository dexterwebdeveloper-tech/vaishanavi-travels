// import React from "react";

// const CtaSection = () => {
//   return (
//     <section className="cta-section section-padding">
//       {/* Mobile Shape */}
//       <div className="mobile-shape">
//         <img src="/img/mobile.png" alt="mobile-shape" />
//       </div>

//       <div className="container">
//         <div className="row g-4">
//           {/* CTA 1 */}
//           <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
//             <div className="cta-items">
//               <div className="cta-text">
//                 <h2>35% OFF</h2>
//                 <p>
//                   Explore The World tour <br />
//                   Hotel Booking.
//                 </p>
//               </div>
//               <a href="/booking" className="theme-btn">
//                 BOOK NOW <i className="fas fa-arrow-right"></i>
//               </a>
//               <div className="cta-image">
//                 <img src="/img/bag-shape.png" alt="bag-shape" />
//               </div>
//             </div>
//           </div>

//           {/* CTA 2 */}
//           <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
//             <div className="cta-items style-2">
//               <div className="cta-text">
//                 <h2>35% OFF</h2>
//                 <p>
//                   On Flight Ticket Grab <br />
//                   This Now.
//                 </p>
//               </div>
//               <a href="/booking" className="theme-btn">
//                 BOOK NOW <i className="fas fa-arrow-right"></i>
//               </a>
//               <div className="cta-image">
//                 <img src="/img/plane-shape.png" alt="plane-shape" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CtaSection;

import React from "react";

const CtaSection = () => {
  return (
    <section className="cta-section section-padding">
      <div className="mobile-shape">
        <img src="/img/mobile.png" alt="mobile-shape" />
      </div>

      <div className="container">
        <div className="row g-4">
          {/* CTA 1 - Cab Booking */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="cta-items">
              <div className="cta-text">
                <h2>5% OFF</h2>
                <p>
                  Book Your Cab Now <br />
                  For City & Outstation Travel
                </p>
              </div>
              <a href="/booking" className="theme-btn">
                BOOK NOW <i className="fas fa-arrow-right"></i>
              </a>
              <div className="cta-image">
                <i className="fas fa-taxi fa-4x textblue"></i>
              </div>
            </div>
          </div>

          {/* CTA 2 - Bus Booking */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="cta-items style-2">
              <div className="cta-text">
                <h2>5% OFF</h2>
                <p>
                  Group Travel Made Easy <br />
                  Book AC & Non-AC Buses
                </p>
              </div>
              <a href="/booking" className="theme-btn">
                BOOK NOW <i className="fas fa-arrow-right"></i>
              </a>
              <div className="cta-image">
                <i className="fas fa-bus-alt fa-4x textblue"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
