import React from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <section className="counter-section theme-bg fix section-bg-3">
      <div className="container">
        <div className="counter-wrapper-3">

          {/* Counter 1: Happy Customers */}
          <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
              <img src="/img/icon/35.svg" alt="Happy Customers" />
            </div>
            <div className="counter-content">
              <h2>
                <CountUp end={19000} duration={3} separator="," />+
              </h2>
              <p>Happy Customers</p>
            </div>
          </div>

          {/* Counter 2: Successful Trips */}
          <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
            <div className="icon">
              <img src="/img/icon/36.svg" alt="Successful Trips" />
            </div>
            <div className="counter-content">
              <h2>
                <CountUp end={12000} duration={3} separator="," />+
              </h2>
              <p>Successful Trips</p>
            </div>
          </div>

          {/* Counter 3: Vehicle Fleets */}
          <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <img src="/img/icon/37.svg" alt="Vehicle Fleets" />
            </div>
            <div className="counter-content">
              <h2>
                <CountUp end={50} duration={2} />+
              </h2>
              <p>Vehicle Fleets</p>
            </div>
          </div>

          {/* Counter 4: Years in Service */}
          <div
            className="counter-items style-2 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="icon">
              <img src="/img/icon/38.svg" alt="Years in Service" />
            </div>
            <div className="counter-content">
              <h2>
                <CountUp end={12} duration={2} />+
              </h2>
              <p>Years in Service</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CounterSection;
