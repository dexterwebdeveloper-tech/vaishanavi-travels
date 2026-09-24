import React from 'react';

const HomeServices = () => {
  const blogs = [

  {
    title: "17 Seater Force Urbania",
    imgSrc: "/images/gallery/6.jpg",
    description: "We offer the 17 Seater Force Urbania, perfect for corporate outings, group tours, and family trips. This premium vehicle features modern interiors, ample legroom, and reliable AC for a comfortable journey.",
    link: "/booking",
  },

  {
    title: "35 Seater Bus",
    imgSrc: "/images/gallery/16.png",
    description: "We offer 35-seater buses designed for large group travel with AC, push-back seats, and modern safety features. Ideal for tours, excursions, and corporate travel with comfort and reliability.",
    link: "/booking",
  },
  {
    title: "40 Seater Bus",
    imgSrc: "/images/gallery/15.png",
    description: "Our 40-seater buses are great for long journeys and corporate events. Featuring comfortable push-back seats, air conditioning, and ample storage, they are perfect for travel in large groups.",
    link: "/booking",
  },
  {
    title: "45 Seater Bus",
    imgSrc: "/images/gallery/9.jpg",
    description: "Hire our 45-seater bus for school trips, wedding transport, or large group tours. It comes with AC, spacious interiors, cushioned seats, and safety features to ensure a smooth and enjoyable trip.",
    link: "/booking",
  },
  {
    title: "50 Seater Bus",
    imgSrc: "/images/gallery/10.jpg",
    description: "We provide 50-seater buses that offer maximum space and comfort for big groups. Equipped with AC, ergonomic seating, and safety systems, it’s ideal for long-distance travel, events, and corporate outings.",
    link: "/booking",
  },
  {
    title: "AC Luxury Bus",
    imgSrc: "/images/gallery/11.jpg",
    description: "Travel in style with our AC Luxury Bus service. Featuring high-end interiors, push-back seats, entertainment systems, and professional drivers, this is perfect for VIP travel, corporate events, and luxury tours.",
    link: "/booking",
  }
];


  return (
    <>
     <div className="section-heading mb-3 text-center pt-md-3">
                <span>Our Services</span>
               
              </div>
      <section className="blog-list section-">
        <div className="container">
          <div className="row bg-infoo">
            {blogs.map((blog, index) => (
              <div key={index} className="col-xl-4 col-md-6 col-12 wow fadeInUp">
                <div className="blog_item borderr">
                  <div className="blog_image borderr">
                    <figure>
                      <img src={blog.imgSrc} alt={blog.title} />
                    </figure>
                  </div>

                  <div className="blog_content">
                    <h3 className='darkcolor text-center fontsize'>
                      <a className='darkcolor text-center'>{blog.title}</a>
                    </h3>
                    <p>{blog.description}</p>
                    
                    {/* Book Now Button */}
                    <div className="text-center mt-3">
                      <a
                        href={`https://wa.me/919765685295?text=I%20want%20to%20book%20${encodeURIComponent(blog.title)}`}
                        className="btn btn-primary "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
