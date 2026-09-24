import React from 'react';

const packages = [
  {
    id: 1,
    title: 'Swift Dzire',
    location: '4 Seater - Comfortable Ride',
    seater: '4',
    price: 18,
    oldPrice: 20,
    nightHaltPrice: 250,
    image: '/images/gallery/1.jpg',
  },
  
   {
    id: 2,
    title: 'Innova Crysta',
    location: '7 Seater - Smooth and Stylish',
    seater: '7',
    price: 22,
    oldPrice: 15,
    nightHaltPrice: 250,
    image: '/images/gallery/21.jpeg',
  },
   {
    id: 2,
    title: 'Innova hycross',
    location: '7 Seater - Smooth and Stylish',
    seater: '7',
    price: 25,
    oldPrice: 15,
    nightHaltPrice: 250,
    image: '/images/gallery/20.jpeg',
  },
  {
    id: 2,
    title: 'Ertiga',
    location: '7 Seater - Smooth and Stylish',
    seater: '7',
    price: 12,
    oldPrice: 15,
    nightHaltPrice: 250,
    image: '/images/gallery/2.jpg',
  },
  {
    id: 3,
    title: '25 Seater Tempo Traveller',
    location: '13 Seater - Compact and Efficient',
    seater: '25',
    price: 18,
    oldPrice: 20,
    nightHaltPrice: 250,
    image: '/images/gallery/3.jpg',
  },

  {
    id: 5,
    title: '32 Seater Tempo Traveller',
    location: '25 Seater - Premium Ride',
    seater: '32',
    price: 20,
    oldPrice: 25,
    nightHaltPrice: 250,
    image: '/images/gallery/5.jpg',
  },
  {
    id: 6,
    title: '17 Seater Force Urbania',
    location: '32 Seater - Spacious and Luxurious',
    seater: '17',
    price: 17,
    oldPrice: 20,
    nightHaltPrice: 250,
    image: '/images/gallery/6.jpg',
  },

    {
    id: 4,
    title: '32 Seater Bus',
    location: '17 Seater - Family Comfort',
    seater: '32',
    price: 15,
    oldPrice: 18,
    nightHaltPrice: 250,
    image: '/images/gallery/4.jpg',
  },
  {
    id: 7,
    title: '35 Seater Bus',
    location: '32 Seater - Comfort for Groups',
    seater: '35',
    price: 18,
    oldPrice: 22,
    nightHaltPrice: 250,
    image: '/images/gallery/16.png',
  },
  {
    id: 8,
    title: '40 Seater Bus',
    location: '35 Seater - Group Travel',
    seater: '40',
    price: 25,
    oldPrice: 30,
    nightHaltPrice: 500,
    image: '/images/gallery/15.png',
  },
  {
    id: 9,
    title: '45 Seater Bus',
    location: '42 Seater - Large Group Travel',
    seater: '45',
    price: "-",
    oldPrice: 0,
    nightHaltPrice: 500,
    image: '/images/gallery/19.png',
  },
  {
    id: 10,
    title: '50 Seater Bus',
    location: '45 Seater - Comfortable Group Travel',
    seater: '50',
    price: "-",
    oldPrice: 22,
    nightHaltPrice: 500,
    image: '/images/gallery/10.jpg',
  },
  {
    id: 11,
    title: 'AC Luxury Bus',
    location: '50 Seater - Large Capacity Travel',
    seater: '50',
    price: "-",
    oldPrice: 30,
    nightHaltPrice: 500,
    image: '/images/gallery/11.jpg',
  },
  {
    id: 12,
    title: 'Non AC Bus',
    location: '52 Seater - Premium Luxury Travel',
    seater: '52',
    price: "-",
    oldPrice: 0,
    nightHaltPrice: 500,
    image: '/images/gallery/12.jpg',
  },
];


const Booking = () => {
  const handleWhatsApp = (cabName) => {
    const message = `Hi, I am interested in booking the ${cabName}. Could you please provide more details?`;
    const phoneNumber = '919765685295';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };



  return (
    <>

     <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Booking</h2>
            
          </div>
        </div>
      </div>
    </section>

   

      <section className="vs-tour-package style-3 bg-third-theme-14 space border">
  

        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6 col-xxl-5">
              {/* Additional Content */}
            </div>
          </div>

          <div className="row mt-4">
            {packages.map((pkg) => (
              <div className="col-md-6 col-lg-4 py-2" key={pkg.id}>
                <div
                  className="tour-package-box bg-white-color"
                  style={{
                    border: '2px solid #327BDB',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="tour-package-thumb borderrr">
                    <img src={pkg.image} alt={pkg.title} className="w-100" />
                  </div>
                  <div className="tour-package-content " style={{ padding: '20px' }}>
                    <h5
                      className="title line-clamp-2 text-center bg-warn"
                      style={{ color: '#327BDB', fontWeight: 'bold' }}
                    >
                      <a
                        href={pkg.link}
                        
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        {pkg.title}
                      </a>
                    </h5>
                    <p
                      style={{
                        color: '#666',
                        fontSize: '14px',
                        marginBottom: '10px',
                      }}
                    >
                      {/* {pkg.location} */}
                    </p>
                    <div className="pricing-container" style={{ marginBottom: '15px' }}>
                      <div className="package-time">
                        <div className="package-detail">
                          <span className="package-label" style={{ color: '#327BDB' }}>
                            Seater:
                          </span>
                          <span className="package-value">{pkg.seater}</span>
                        </div>
                        <div className="package-detail">
                          <span className="package-label" style={{ color: '#327BDB' }}>
                            Per Km:
                          </span>
                          <span
                            className="package-value"
                            style={{ color: '#327BDB', fontWeight: 'bold' }}
                          >
                            ₹{pkg.price}
                          </span>
                        </div>
                        <div className="package-detail">
                          <span className="package-label" style={{ color: '#327BDB' }}>
                            Extra Hr:
                          </span>
                          <span className="package-value">₹150</span>
                        </div>
                        <div className="package-detail">
                          <span className="package-label" style={{ color: '#327BDB' }}>
                            Night Halt:
                          </span>
                          <span className="package-value">₹{pkg.nightHaltPrice}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleWhatsApp(pkg.title)}
                      className="vs-btn style7 w-100"
                      style={{
                        backgroundColor: '#F59B29',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 15px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                      }}
                    >
                      Book Now
                    </button>
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

export default Booking;
