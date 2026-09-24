import React from "react";

const gallery = () => {
 const galleryData = [
  {
    id: 1,
    imgSrc: "/images/gallery/1.jpg",
    title: "Swift Desire",
    description:
      "Swift Dzire is a compact sedan known for its excellent fuel efficiency, smooth driving experience, and comfortable interior. Ideal for daily city commutes and family outings.",
    link: "/swift-desire",
  },
  {
    id: 2,
    imgSrc: "/images/gallery/2.jpg",
    title: "Ertiga",
    description:
      "Ertiga is a stylish and spacious MPV with comfortable seating for seven. Perfect for families and long trips, offering smooth performance and modern features.",
    link: "/ertiga",
  },
    {
    id: 2,
    imgSrc: "/images/gallery/21.jpeg",
    title: "Innova Crysta",
    description:
      "Innova Crysta is a premium and powerful MPV with spacious seating for seven. Ideal for families and long drives, offering smooth performance and advanced features.",
    link: "/ertiga",
  },
    {
    id: 2,
    imgSrc: "/images/gallery/20.jpeg",
    title: "Innova hycross",
    description:
      "Innova Hycross is a bold and efficient MPV with roomy seating for seven. Great for families and long journeys, offering hybrid power and modern tech features.",
    link: "/ertiga",
  },
  {
    id: 3,
    imgSrc: "/images/gallery/3.jpg",
    title: "25 Seater Tempo Traveller",
    description:
      "A versatile 25-seater Tempo Traveller, known for reliable performance and spacious design. Ideal for family trips, corporate outings, and long-distance travel.",
    link: "/25-seater-tempo-traveller",
  },
  {
    id: 4,
    imgSrc: "/images/gallery/4.jpg",
    title: "32 Seater Bus",
    description:
      "32-Seater Bus with spacious seating, safety features, and smooth performance. Perfect for school trips, corporate tours, and hassle-free group travel.",
    link: "/32-seater-bus",
  },
  {
    id: 5,
    imgSrc: "/images/gallery/5.jpg",
    title: "17 Seater Force Urbania",
    description:
      "Spacious 17-seater van for large groups. Powered by a strong diesel engine with modern amenities like AC vents and USB ports—ideal for long tours.",
    link: "/17-seater-urbania",
  },
  {
    id: 6,
    imgSrc: "/images/gallery/6.jpg",
    title: "13 Seater Force Urbania",
    description:
      "Force Urbania is a premium van designed for comfort, safety, and space. Perfect for group travel, tours, or business use with multiple seating options and modern features.",
    link: "/13-seater-urbania",
  },
  {
    id: 7,
    imgSrc: "/images/gallery/7.jpg",
    title: "35 Seater Bus",
    description:
      "The 35-seater bus offers spacious interiors, comfortable seating, and smooth handling. Great for corporate events, school transport, and long-distance travel.",
    link: "/35-seater-bus",
  },
  {
    id: 8,
    imgSrc: "/images/gallery/8.jpg",
    title: "40 Seater Bus",
    description:
      "This 40-seater bus ensures comfort and efficiency for group travel. Equipped with modern amenities and ideal for intercity commutes and group tours.",
    link: "/40-seater-bus",
  },
  {
    id: 9,
    imgSrc: "/images/gallery/9.jpg",
    title: "45 Seater Bus",
    description:
      "Perfect for large groups, this 45-seater bus offers a smooth ride, ample space, and essential safety features—great for tourism and institutional use.",
    link: "/45-seater-bus",
  },
  {
    id: 10,
    imgSrc: "/images/gallery/10.jpg",
    title: "50 Seater Bus",
    description:
      "The 50-seater bus is ideal for long-distance travel, providing maximum capacity, comfort, and reliable performance for big groups and organizations.",
    link: "/50-seater-bus",
  },
  {
    id: 11,
    imgSrc: "/images/gallery/11.jpg",
    title: "AC Luxury Bus",
    description:
      "Experience premium travel with our AC Luxury Bus—featuring plush seating, air conditioning, and modern amenities. Ideal for weddings, tours, and executive travel.",
    link: "/ac-luxury-bus",
  },
  {
    id: 12,
    imgSrc: "/images/gallery/12.jpg",
    title: "Non AC Bus",
    description:
      "Economical and reliable, the Non AC Bus offers spacious seating and solid performance. Best suited for local group travel and budget tours.",
    link: "/non-ac-bus",
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
            <h2>Our gallery</h2>
            
          </div>
        </div>
      </div>
    </section>

    

      {/* gallery Grid */}
      <section className="gallery-list section-padding" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            {galleryData.map((gallery) => (
              <div key={gallery.id} className="col-xl-4 col-md-6 col-12 mb-4">
                <div className="gallery_item">
                  <div className="gallery_image">
                    <img src={gallery.imgSrc} alt={gallery.title} />
                  </div>
                  <div className="gallery_content">
                    <h3>{gallery.title}</h3>
                    <p>{gallery.description}</p>
                    
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

export default gallery;
