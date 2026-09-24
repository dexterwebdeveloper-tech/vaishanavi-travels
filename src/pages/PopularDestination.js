import React from "react";

const destinations = [
  {
    img: "/img/destination/01.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Brooklyn Beach Resort Tour",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/02.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Pak Chumphon Town Tour",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/03.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Java & Bali One Life Adventure",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/04.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Places To Travel In November",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/05.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Brooklyn Beach Resort Tour",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/06.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Pak Chumphon Town Tour",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/07.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Brooklyn Beach Resort Tour",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
  {
    img: "/img/destination/08.jpg",
    location: "Indonesia",
    rating: "4.7",
    title: "Java & Bali One Life Adventure",
    days: "10 Days",
    people: "50+",
    price: "$59.00",
    link: "tour-details.html",
  },
];

const PopularDestination = () => {
  return (
    <section className="popular-destination-section section-padding pt-0">
      {/* Car Shape */}
      <div className="car-shape float-bob-x">
        <img src="/img/destination/car.png" alt="car-shape" />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title-area justify-content-between">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">Best Recommended Places</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Popular Destination we offer for all
            </h2>
          </div>
         
        </div>

        {/* Destination Cards */}
        <div className="row">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
            >
              <div className="destination-card-items">
                <div className="destination-image">
                  <img src={dest.img} alt={dest.title} />
                  <div className="heart-icon">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="destination-content">
                  <ul className="meta">
                    <li>
                      <i className="fa-thin fa-location-dot"></i>
                      {dest.location}
                    </li>
                    <li className="rating">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>{dest.rating}</p>
                    </li>
                  </ul>
                  <h5>
                    <a href={dest.link}>{dest.title}</a>
                  </h5>
                  <ul className="info">
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      {dest.days}
                    </li>
                    <li>
                      <i className="fa-thin fa-users"></i>
                      {dest.people}
                    </li>
                  </ul>
                  <div className="price">
                    <h6>
                      {dest.price}
                      <span>/Per day</span>
                    </h6>
                    <a href={dest.link} className="theme-btn style-2">
                      Book Now <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
