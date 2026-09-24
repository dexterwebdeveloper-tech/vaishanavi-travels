import React from "react";

const Service = () => {
  const blogs = [
    {
      id: 1,
      imgSrc: "/images/keyword/23.jpg",
      title: "Pune to Mumbai Darshan Bus on Rent",
      description:
        "Experience a comfortable and hassle-free trip with Vaishnavi Travels. Our Pune to Mumbai Darshan Bus on Rent service offers spacious buses and experienced drivers—ideal for your group outings, sightseeing tours, or special occasions.",
      link: "/pune-to-mumbai-darshan-bus-on-rent",
    },
    {
      id: 2,
      imgSrc: "/images/keyword/26.jpg",
      title: "Pune to Kolhapur Bus on Rent",
      description:
        "Experience a convenient and enjoyable journey with Vaishnavi Travels. Our Pune to Kolhapur Bus on Rent service provides well-maintained buses and skilled drivers—perfect for group travel, family trips, or business tours.",
      link: "/pune-to-kolhapur-bus-on-rent",
    },
    {
      id: 3,
      imgSrc: "/images/keyword/30.jpg",
      title: "Pune to Lonavala Bus Hire",
      description:
        "Experience a relaxing and reliable ride with Vaishnavi Travels. Our Pune to Lonavala Bus Hire service offers comfortable buses and professional drivers—ideal for your weekend retreats, family outings, or corporate trips.",
      link: "/pune-to-lonavala-bus-hire",
    },
    {
      id: 4,
      imgSrc: "/images/keyword/61.jpg",
      title: "Pune to Mahabaleshwar Cabs",
      description:
        "Experience a serene and dependable journey with Vaishnavi Travels. Our Pune to Mahabaleshwar Cabs service ensures a comfortable ride with well-maintained vehicles and skilled drivers—perfect for your hill station getaway or peaceful weekend escape.",
      link: "/pune-to-mahabaleshwar-cabs",
    },
    {
      id: 5,
      imgSrc: "/images/keyword/67.jpg",
      title: "Pune to Goa Cabs",
      description:
        "Experience a scenic and comfortable journey with Vaishnavi Travels. Our Pune to Goa Cabs service offers well-maintained vehicles and professional drivers—ideal for your beach vacation or weekend adventure.",
      link: "/pune-to-goa-cabs",
    },
    {
      id: 6,
      imgSrc: "/images/keyword/68.jpg",
      title: "Pune to Ajanta Ellora Cabs",
      description:
        "Experience a memorable and comfortable journey with Vaishnavi Travels. Our Pune to Ajanta Ellora Cabs service provides well-maintained vehicles and experienced drivers—perfect for your historical sightseeing and cultural exploration.",
      link: "/pune-to-ajanta-ellora-cabs",
    },
  ];

  return (
    <>


     <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Our Services</h2>
            
          </div>
        </div>
      </div>
    </section>


      {/* Services Grid */}
      <section className="blog-list section-padding" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-xl-4 col-md-6 col-12 mb-4">
                <div
                  className="blog_item shadow"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#fff",
                    transition: "0.3s ease",
                  }}
                >
                  {/* Image */}
                  <div className="blog_image">
                    <figure style={{ margin: 0 }}>
                      <img
                        src={blog.imgSrc}
                        alt="service"
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover",
                        }}
                      />
                    </figure>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#0D47A1" }}>
                      <a
                        href={blog.link}
                        style={{ textDecoration: "none", color: "#0D47A1" }}
                      >
                        {blog.title}
                      </a>
                    </h3>
                    <p style={{ fontSize: "15px", color: "#444", marginTop: "10px" }}>
                      {blog.description}
                    </p>
                    <a
                      href={blog.link}
                      style={{
                        display: "inline-block",
                        marginTop: "12px",
                        padding: "10px 18px",
                        borderRadius: "6px",
                        backgroundColor: "#FF9800",
                        color: "#fff",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      Read More →
                    </a>
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

export default Service;
