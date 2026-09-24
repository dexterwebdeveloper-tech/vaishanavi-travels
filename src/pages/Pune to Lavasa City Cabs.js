
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Punetolavasacitycabs() {



  const cardData =
  {
    keyword: ' Pune to Lavasa City Cabs',
    heading: 'Vaishnavi Travels: Pune to Lavasa City Cabs',
    headingDescription: 'Vaishnavi Travels offers convenient and affordable Pune to Lavasa City Cabs, perfect for family trips, weekend getaways, corporate outings, and leisure tours. Our cabs are well-maintained with spacious seating, strong air-conditioning, and ample luggage capacity, ensuring a smooth and comfortable journey on the scenic Pune–Lavasa route. With professional chauffeurs, timely pickups, and flexible booking options, we make your travel stress-free and enjoyable. Whether it’s a short one-day trip or an overnight stay, Vaishnavi Travels guarantees safe, reliable, and comfortable cab services from Pune to Lavasa City.',

    top: 'Top Places to Visit in Lavasa with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Lakeside Promenade",
    "description": "The Lakeside Promenade is Lavasa’s most popular attraction, stretching along the Warasgaon Lake. Tourists enjoy peaceful walks, cycling, and vibrant cafés overlooking the water. The colorful buildings add a European charm, making it a favorite photography spot. Families love boating and kids’ play zones here. The evening sunset creates a magical ambiance by the lake. Lakeside Promenade is Lavasa’s hub of leisure and beauty."
  },
  {
    "title": "Warasgaon Lake",
    "description": "Warasgaon Lake, surrounding Lavasa, is an artificial reservoir that adds scenic charm to the city. Tourists indulge in boating, kayaking, and jet skiing on its calm waters. The lake is surrounded by hills, offering panoramic views ideal for photography. Nature lovers enjoy the peaceful setting and fresh air. The reflections of colorful buildings on the lake enhance its beauty. Warasgaon Lake is Lavasa’s centerpiece of adventure and relaxation."
  },
  {
    "title": "Adventure Sports Park",
    "description": "Lavasa offers thrilling activities at its Adventure Sports Park, making it a paradise for adrenaline seekers. Visitors enjoy zip-lining, rappelling, rock climbing, and paintball. The hilly terrain adds a natural challenge to outdoor adventures. Families and groups love spending a fun-filled day here. Professional instructors ensure safety for all activities. Lavasa’s Adventure Park is the city’s hotspot of excitement and energy."
  },
  {
    "title": "Temghar Dam",
    "description": "Temghar Dam, located near Lavasa, is a massive structure built on the Mutha River. It offers breathtaking views of backwaters and surrounding hills. Monsoon makes the dam even more scenic with overflowing waters and mist. Tourists enjoy roadside stalls serving hot corn and tea while admiring the scenery. It is a peaceful escape away from the city’s buzz. Temghar Dam is Lavasa’s nearby retreat of nature and tranquility."
  },
  {
    "title": "Bamboosa",
    "description": "Bamboosa is Lavasa’s unique art and cultural center dedicated to bamboo craftsmanship. Visitors explore bamboo furniture, décor, and handicrafts created by local artisans. The gallery also displays live workshops, teaching the importance of eco-friendly living. Tourists love buying souvenirs and supporting rural craftsmanship. The initiative promotes sustainability and creativity. Bamboosa is Lavasa’s cultural hub of art and environment."
  },
  {
    "title": "Waterfall Safari",
    "description": "During monsoon, Lavasa transforms into a waterfall paradise, and the Waterfall Safari is a must-experience activity. Tourists travel in jeeps through winding trails, visiting cascading waterfalls hidden in the hills. The thrill of off-roading combined with lush greenery makes it unforgettable. Families and couples enjoy photography and scenic halts. The experience showcases Lavasa’s natural charm at its best. Waterfall Safari is Lavasa’s adventurous monsoon delight."
  },
  {
    "title": "Indoor Sports Complex",
    "description": "Lavasa’s Indoor Sports Complex offers a range of activities for fitness and fun. Visitors enjoy badminton, squash, table tennis, and a modern gym. Families with kids use recreational zones for safe play. The facility is well-maintained and ideal for group activities. It balances outdoor adventure with indoor leisure. Lavasa’s Sports Complex is the city’s active lifestyle destination."
  },
  {
    "title": "Nature Trails and Trekking",
    "description": "Lavasa is surrounded by lush green Sahyadri hills, offering multiple trekking and nature trails. Visitors enjoy guided treks through forests, waterfalls, and hilltops with panoramic views. Birdwatchers find the region rich in avian species. Monsoon adds mist and freshness to the treks, making them even more exciting. The trails suit both beginners and seasoned hikers. Lavasa’s trekking paths are its natural adventure playground."
  },
  {
    "title": "Dasve Viewpoint",
    "description": "Dasve Viewpoint offers breathtaking views of Lavasa city and the Warasgaon Lake below. Tourists love capturing panoramic shots of colorful buildings and serene waters. The viewpoint is especially charming at sunrise and sunset. Couples and families visit to soak in the peaceful atmosphere. It is one of the most photographed spots in Lavasa. Dasve Viewpoint is the city’s scenic window to beauty."
  },
  {
    "title": "Wellness Resorts and Spas",
    "description": "Lavasa is home to luxury resorts and spas that offer world-class wellness treatments. Visitors rejuvenate with Ayurvedic therapies, massages, and yoga sessions. The serene lakeside and hilltop locations enhance relaxation. Couples enjoy romantic spa getaways, while families seek leisure retreats. The calm environment makes it ideal for stress-free holidays. Lavasa’s spas and resorts are the city’s hubs of relaxation and rejuvenation."
  }
],


        "services": [
    {
      "name": "Pune to Lavasa Taxi Booking",
      "description": "Convenient and reliable taxi booking service from Pune to Lavasa, ideal for solo travelers, families, and groups. Enjoy a comfortable ride in well-maintained vehicles with professional drivers familiar with the best routes to Lavasa."
    },
    {
      "name": "One Way Cab to Lavasa",
      "description": "Book one-way taxi rides from Pune to Lavasa for hassle-free transfers. Perfect for day trips or one-directional travel plans, with flexible pick-up timings and easy booking options."
    },
    {
      "name": "Round Trip Lavasa Cab Pune",
      "description": "Round-trip taxi services to Lavasa from Pune with inclusive waiting time, allowing you to explore the city at your own pace before returning. Drivers are courteous and knowledgeable about local sightseeing spots."
    },
    {
      "name": "AC Cab for Lavasa Tour",
      "description": "Travel in cool comfort with air-conditioned taxis from Pune to Lavasa. Ideal for summer visits, these AC cabs offer a refreshing journey with smooth suspension and clean interiors for a relaxing experience."
    },
    {
      "name": "Budget Cab Pune to Lavasa",
      "description": "Affordable and economical cab options for Pune to Lavasa trips. These budget-friendly vehicles ensure you get value without compromising on safety or service quality, great for cost-conscious travelers."
    },
    {
      "name": "SUV Cab to Lavasa",
      "description": "Spacious and powerful SUV cabs available for Pune to Lavasa travel, perfect for families or groups with extra luggage. Enjoy enhanced comfort, safety, and off-road capabilities suitable for the scenic drive to Lavasa."
    },
    {
      "name": "Family Lavasa Trip Cab",
      "description": "Specialized taxi services catering to family trips from Pune to Lavasa, with vehicles equipped for child safety, ample space, and entertainment options. Drivers trained for family-friendly service ensure a smooth and pleasant journey."
    },
    {
      "name": "Corporate Taxi Lavasa Pune",
      "description": "Professional and punctual taxi services for corporate clients traveling between Pune and Lavasa. Ideal for business meetings, corporate retreats, or team outings, with options for branded vehicles and priority bookings."
    },
    {
      "name": "Online Cab to Lavasa Booking",
      "description": "Easy and instant online booking for taxis from Pune to Lavasa through mobile apps or websites. Secure payment options and real-time tracking enhance the convenience and transparency of your ride."
    },
    {
      "name": "Lavasa Sightseeing Cab Pune",
      "description": "Guided sightseeing taxi packages within Lavasa, including visits to popular attractions, nature trails, and leisure spots. Customize your itinerary while enjoying comfortable transport and expert driver advice."
    },
    {
      "name": "Driver Included Cab for Lavasa",
      "description": "Hire taxis from Pune to Lavasa with professional drivers included. Drivers ensure safe navigation, local insights, and timely pick-ups/drop-offs, making your travel worry-free and enjoyable."
    },
    {
      "name": "Offbeat Trip Taxi Pune",
      "description": "Explore the offbeat and lesser-known scenic spots around Lavasa with our specialized taxi services. Perfect for travelers seeking unique experiences beyond the usual tourist circuit."
    },
    {
      "name": "Lavasa Weekend Cab Service",
      "description": "Weekend-focused cab packages from Pune to Lavasa, designed for quick getaways. Flexible scheduling, affordable rates, and comfortable vehicles make your weekend trips easy and memorable."
    }
  ],
  "tableData": [
    ["Pune to Lavasa Taxi Booking", "One Way Cab to Lavasa"],
    ["Round Trip Lavasa Cab Pune", "AC Cab for Lavasa Tour"],
    ["Budget Cab Pune to Lavasa", "SUV Cab to Lavasa"],
    ["Family Lavasa Trip Cab", "Corporate Taxi Lavasa Pune"],
    ["Online Cab to Lavasa Booking", "Lavasa Sightseeing Cab Pune"],
    ["Driver Included Cab for Lavasa", "Offbeat Trip Taxi Pune"],
    ["Lavasa Weekend Cab Service"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune to Lavasa City Cabs",
    "WhyChoosedescription": "Vaishnavi Travels offers comfortable and reliable cab services from Pune to Lavasa City, perfect for weekend getaways, family outings, and romantic trips."
  },
  {
    "WhyChooseheading": "Various Cab Options for Every Group",
    "WhyChoosedescription": "Choose from Swift Dzire, Ertiga, Innova, and Urbania to suit your travel party size and comfort preferences."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Our cabs are regularly serviced and sanitized, ensuring a safe and clean journey to Lavasa."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with the Route",
    "WhyChoosedescription": "Our professional drivers know the best routes between Pune and Lavasa for a smooth and timely trip."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Enjoy fixed fares inclusive of fuel, tolls, parking, and driver allowance with no hidden charges."
  },
  {
    "WhyChooseheading": "Flexible Pickup and Drop-off",
    "WhyChoosedescription": "We offer door-to-door service with flexible timings to fit your schedule."
  },
  {
    "WhyChooseheading": "Ideal for Leisure Trips and Corporate Outings",
    "WhyChoosedescription": "Perfect for families, friends, and business groups looking to explore Lavasa comfortably."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Hassle-Free Booking",
    "WhyChoosedescription": "Our customer service team is available round-the-clock to assist with bookings, changes, and travel inquiries."
  }
]















  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide cab services from Pune to Lavasa City?',
      answer: 'Yes, Vaishnavi Travels offers comfortable and affordable cab services from Pune to Lavasa City, ideal for weekend getaways, family trips, or romantic outings in the hill city.',
    },
    {
      question: 'What types of cabs are available for the Pune to Lavasa route?',
      answer: 'We provide a range of vehicles including Swift Dzire, Ertiga, Innova, and Tempo Travellers based on the number of passengers and travel requirements.',
    },
    {
      question: 'Are the drivers familiar with the route to Lavasa?',
      answer: 'Absolutely! Our drivers are well-experienced and familiar with the ghat roads and scenic routes leading to Lavasa, ensuring a smooth and safe drive.',
    },
    {
      question: 'What is the fare for a cab from Pune to Lavasa City?',
      answer: 'Fares generally start from ₹2,800 for a one-way trip in a sedan like Swift Dzire. Rates may vary depending on the vehicle type and whether you opt for a round trip.',
    },
    {
      question: 'Can I book a same-day return cab from Pune to Lavasa?',
      answer: 'Yes, we offer flexible round trip packages for same-day or next-day return journeys with clear and transparent pricing.',
    },
    {
      question: 'How early should I book a cab to Lavasa from Pune?',
      answer: 'It’s advisable to book at least 1 day in advance, especially on weekends or holidays when Lavasa sees more visitors.',
    },
    {
      question: 'Is doorstep pickup and drop available for Pune to Lavasa cabs?',
      answer: 'Yes, we provide convenient doorstep pickup and drop-off services anywhere in Pune and surrounding areas for your Lavasa trip.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Aditya Deshmukh",
    position: "Weekend Traveler",
    feedback:
      "Booked a cab with Vaishnavi Travels for a quick getaway to Lavasa. The driver was friendly, the car was clean, and the journey was smooth. Great experience!",
    rating: 5,
  },
  {
    name: "Ms. Priya Nene",
    position: "Photographer",
    feedback:
      "Our Pune to Lavasa trip with Vaishnavi Travels was excellent. The cab arrived on time, and the scenic drive was very relaxing. Would definitely recommend!",
    rating: 5,
    style: "style-2",
  }
];












































































































  const Images = [
    {
      place: "/images/keyword/1.jpg",
      text: "Bus Booking for Marriage",
      link: "bus-booking-for-marriage"
    },
    {
      place: "/images/keyword/2.jpg",
      text: "Bus Hire for Wedding in Pune",
      link: "bus-hire-for-wedding-in-pune"
    },
    {
      place: "/images/keyword/3.jpg",
      text: "Bus Hire Near Me Pune",
      link: "bus-hire-near-me-pune"
    },
    {
      place: "/images/keyword/4.jpg",
      text: "Bus Hire for Outstation",
      link: "bus-hire-for-outstation"
    },
    {
      place: "/images/keyword/5.jpg",
      text: "Bus Service for Corporate Pune",
      link: "bus-service-for-corporate-pune"
    },
    {
      place: "/images/keyword/6.jpg",
      text: "Bus Service for Corporate Events",
      link: "bus-service-for-corporate-events"
    },
    {
      place: "/images/keyword/7.jpg",
      text: "Bus Service for Picnic in Pune",
      link: "bus-service-for-picnic-in-pune"
    },
    {
      place: "/images/keyword/8.jpg",
      text: "Bus Rentals for School Trips in Pune",
      link: "bus-rentals-for-school-trips-in-pune"
    },
    {
      place: "/images/keyword/9.jpg",
      text: "Bus Hire for School Trips in Pune",
      link: "bus-hire-for-school-trips-in-pune"
    },
    {
      place: "/images/keyword/10.jpg",
      text: "Bus Rental for Tour Packages",
      link: "bus-rental-for-tour-packages"
    },
    {
      place: "/images/keyword/11.jpg",
      text: "Bus on Rent for Event in Pune",
      link: "bus-on-rent-for-event-in-pune"
    },
    {
      place: "/images/keyword/12.jpg",
      text: "Non AC Bus Rental Service in Pune",
      link: "non-ac-bus-rental-service-in-pune"
    },
    {
      place: "/images/keyword/13.jpg",
      text: "AC Bus On Rent in Pune",
      link: "ac-bus-on-rent-in-pune"
    },
    {
      place: "/images/keyword/14.jpg",
      text: "Pune Local Bus on Rent",
      link: "pune-local-bus-on-rent"
    },
    {
      place: "/images/keyword/15.jpg",
      text: "Bus On Rent in Pimpri Chinchwad",
      link: "bus-on-rent-in-pimpri-chinchwad"
    },
    {
      place: "/images/keyword/16.jpg",
      text: "25 Seater Tempo Traveller on Rent in Pune",
      link: "25-seater-tempo-traveller-on-rent-in-pune"
    },
    {
      place: "/images/keyword/17.jpg",
      text: "32 Seater Bus Rent in Pune",
      link: "32-seater-bus-rent-in-pune"
    },
    {
      place: "/images/keyword/18.jpg",
      text: "35 Seater Bus on Rent in Pune",
      link: "35-seater-bus-on-rent-in-pune"
    },
    {
      place: "/images/keyword/19.jpg",
      text: "40 Seater Bus on Rent in Pune",
      link: "40-seater-bus-on-rent-in-pune"
    },
    {
      place: "/images/keyword/20.jpg",
      text: "45 Seater Bus on Rent in Pune",
      link: "45-seater-bus-on-rent-in-pune"
    },
    {
      place: "/images/keyword/21.jpg",
      text: "50 Seater Bus on Rent in Pune",
      link: "50-seater-bus-on-rent-in-pune"
    },
    {
      place: "/images/keyword/22.jpg",
      text: "32 Seater Tempo Traveller Service",
      link: "32-seater-tempo-traveller-service"
    },
    {
      place: "/images/keyword/23.jpg",
      text: "Pune to Mumbai Darshan Bus on Rent",
      link: "pune-to-mumbai-darshan-bus-on-rent"
    },
    {
      place: "/images/keyword/24.jpg",
      text: "Pune to Shirdi Bus Hire",
      link: "pune-to-shirdi-bus-hire"
    },
    {
      place: "/images/keyword/25.jpg",
      text: "Pune to Ganpatipule Beach Bus Rental Service",
      link: "pune-to-ganpatipule-beach-bus-rental-service"
    }
  ];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Pune to Lavasa City Cabs",
  "description": "Book reliable and affordable cabs from Pune to Lavasa for one-way, round trip, family trips, corporate travel, and sightseeing tours. AC and SUV cabs available with driver included.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "areaServed": "Pune, Lavasa",
    "url": "https://vaishnavitravel.com/pune-to-lavasa-cab-service"
  },
  "serviceType": "Taxi Service",
  "areaServed": [
    {
      "@type": "City",
      "name": "Pune"
    },
    {
      "@type": "City",
      "name": "Lavasa"
    }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/pune-to-lavasa-cab-service"
  }
};




  return (
    <div>

<Helmet>
  <title>Pune to Lavasa City Cabs | Reliable Taxi Service</title>
  <meta
    name="description"
    content="Book reliable and affordable cabs from Pune to Lavasa for one-way, round trip, family trips, corporate travel, and sightseeing tours. AC and SUV cabs available with driver included."
  />
  <meta
    name="keywords"
    content="Pune to Lavasa Taxi Booking, One Way Cab to Lavasa, Round Trip Lavasa Cab Pune, AC Cab for Lavasa Tour, Budget Cab Pune to Lavasa, SUV Cab to Lavasa, Family Lavasa Trip Cab, Corporate Taxi Lavasa Pune, Online Cab to Lavasa Booking, Lavasa Sightseeing Cab Pune, Driver Included Cab for Lavasa, Offbeat Trip Taxi Pune, Lavasa Weekend Cab Service"
  />
  <script type="application/ld+json">
    {JSON.stringify(serviceSchema)}
  </script>
</Helmet>


      <section
        className="breadcrumb-wrapper fix bg-cover"
        style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <h2>{cardData.keyword}</h2>

            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container-fluid" >
          <div className="row container-fluid">
            <div className="col-12 col-md-7 bg-foootr">
              <img src='/images/keyword/59.jpg' alt='img'  className='img-fluid'/>
              <h3 className="py-1"
                style={{
                  color: '#062349', // Red color for the title 
                  textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                  fontWeight: 'bold'
                }}


              >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
              <div className="topPlaces">
                <p className="sectionLead">{cardData.top}</p>

                {cardData.topPlaces.map((place, index) => (
                  <article key={index} className="placeCard" tabIndex="0">
                    <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                    <div className="placeBody">
                      <h4 className="placeTitle">{place.title}</h4>
                      <p className="placeDesc">{place.description}</p>
                    </div>

                    <span className="placeArrow" aria-hidden>›</span>
                  </article>
                ))}
              </div>
              <div className="services-section">
                {cardData.services.map((service, index) => (
                  <div key={index} className="service-row">
                    <div className="service-icon">
                      🚖
                    </div>
                    <div>
                      <h4 className="service-title">{service.name}</h4>
                      <p className="service-desc">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>


              <table className="table table-responsive Border-key my-2">
                <tbody className=' Border-key'>
                  {cardData.tableData.map((row, rowIndex) => (
                    <tr className='Border-key ' key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
              <BusRatesTable />

              <div id="why-choose-section" className="why-choose-section">


                {/* Section Title */}
                <h2 className="section-title">
                  Why Choose <span>Vaishnavi Travels</span>
                </h2>

                {/* Cards */}
                <div className="cards-grid">
                  {cardData.whychoose.map((item, index) => (
                    <div key={index} className="why-card">
                      <div className="icon-circle">{index + 1}</div>
                      <h4 className="card-heading">{item.WhyChooseheading}</h4>
                      <p className="card-desc">{item.WhyChoosedescription}</p>
                    </div>
                  ))}
                </div>
              </div>



              <div className="row twm-faq-section-1 m-b30">


                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                  <div className="twm-faq-info-wrap">

                    <div className="section-head left">
                      <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Vaishnavi Travels </h2>
                    </div>


                    <div className="twm-faq-info">
                      <div className="accordion twm-acdn" id="sf-faq-accordion">
                        <FaqSectionn idPrefix="faq-section-1" faqItems={faqData} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <TestimonialSectionkey
                title="Our Clients Feedback"
                subtitle="Testimonial"
                testimonials={testimonials}
              />

              <ContactShowcase />
            </div>

            <div className='col-12 col-md-4' >
              <div className="routeList">
                {Images.map((e, i) => {
                  const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                  const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                  return (
                    <a
                      key={e.link || i}
                      href={href}
                      className="routeItem"
                      aria-label={e.text}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <div className="routeThumb">
                        <img src={e.place} alt="" loading="lazy" />
                      </div>

                      <div className="routeMeta">
                        <h6 className="routeTitle">{e.text}</h6>
                        <span className="routeUnderline" />
                      </div>

                      <span className="routeArrow" aria-hidden>›</span>
                    </a>
                  );
                })}
              </div>




              <div>
                <FleetHighway />
              </div>
              <div className="pc-contact">
                <h4 className="pc-title">Contact Information</h4>

                <div className="pc-grid">
                  {/* Phones */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="bi bi-telephone-fill"></i>
                      <span>Phone Numbers</span>
                    </header>

                    <div className="pc-list">
                      <a href="tel:+919765685295" className="pc-call">+91 9765685295</a>
                      <a href="tel:+919881872524" className="pc-call">+91 9881872524</a>
                    </div>

                    <div className="pc-cta">
                      <a
                        href="https://wa.me/919765685295"
                        target="_blank" rel="noopener noreferrer"
                        className="pc-whats"
                      >
                        <i className="bi bi-whatsapp me-1"></i> WhatsApp
                      </a>
                      <a href="tel:+919765685295" className="pc-primary">
                        Call Now
                      </a>
                    </div>
                  </section>

                  {/* Email */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="bi bi-envelope-fill"></i>
                      <span>Email</span>
                    </header>

                    <a href="mailto:booking@vaishnavitravel.com" className="pc-email">
                      booking@vaishnavitravel.com
                    </a>
                  </section>

                  {/* Address */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="bi bi-house-fill"></i>
                      <span>Address</span>
                    </header>

                    <address className="pc-address">
                      <strong>Vaishnavi Travels</strong><br />
                      Shop No 5, HQPJ+3J3, New DP Rd, near Cell Petroleum, Akshay Nagar Society, Nandanwan Society, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune, Maharashtra 411027
                    </address>
                  </section>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Punetolavasacitycabs;