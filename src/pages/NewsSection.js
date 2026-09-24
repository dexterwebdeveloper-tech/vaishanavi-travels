import React from "react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      img: "/images/keyword/24.jpg",
      date: "September 6, 2024",
      comments: 0,
      title: "Pune to Shirdi Bus Hire",
      link: "/pune-to-shirdi-bus-hire",
    },
    {
      id: 2,
      img: "/images/keyword/52.jpg",
      date: "September 6, 2024",
      comments: 0,
      title: "Pune to Bhimashankar Cab",
      link: "/pune-to-bhimashankar-cab",
    },
    {
      id: 3,
      img: "/images/keyword/61.jpg",
      date: "September 6, 2024",
      comments: 0,
      title: "Pune to Mahabaleshwar Cabs",
      link: "/pune-to-mahabaleshwar-cabs",
    }
  ];

  return (
    <section className="news-section-2 section-padding fix">
      <div className="container-fluid">
        {/* Section Title */}
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">News & Updates</span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Latest News & Articles
          </h2>
        </div>

        {/* News Items */}
        <div className="row">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="col-xxl-4 col-xl-4 col-md-6 col-lg-6 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
            >
              <div className="news-card-items-2">
                <div className="news-image">
                  <img src={item.img} alt="news" />
                </div>
                <div className="news-content">
               
                  <h4>
                    <a className="darkcolor" href={item.link}>{item.title} </a>
                  </h4>
                  <div className="news-info">
                    <a href={item.link} className="link-btn style-2 ">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                    <div className="group-image">
                      <img src="/img/about/group.png" alt="group" />
                    </div>
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

export default NewsSection;
