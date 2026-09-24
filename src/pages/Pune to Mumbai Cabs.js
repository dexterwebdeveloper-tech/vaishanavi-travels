
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Punetomumbaicabs() {



  const cardData =
  {
    keyword: '  Pune to Mumbai Cabs',
    heading: 'Vaishnavi Travels: Pune to Mumbai Cabs',
    headingDescription: 'Vaishnavi Travels offers dependable and affordable Pune to Mumbai Cabs, perfect for business trips, family travel, airport transfers, and weekend getaways. Our cabs are well-maintained with spacious seating, strong air-conditioning, and ample luggage capacity, ensuring a smooth and comfortable ride on the Pune–Mumbai route. With professional chauffeurs, punctual pickups, and flexible booking options, we make intercity travel hassle-free and reliable. Whether it’s a one-way drop, round trip, or urgent travel need, Vaishnavi Travels guarantees safe, comfortable, and convenient cab services from Pune to Mumbai.',

    top: 'Top Places to Visit in Mumbai with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Gateway of India",
    "description": "The Gateway of India, built in 1924, is Mumbai’s most iconic landmark overlooking the Arabian Sea. Constructed in Indo-Saracenic style, it commemorates the visit of King George V and Queen Mary. Today, it serves as a popular tourist hub with ferries to Elephanta Caves. At night, the monument glows beautifully with the Taj Mahal Palace Hotel in the backdrop. Street vendors, performers, and photographers add vibrancy to the area. Gateway of India is Mumbai’s proud symbol of history and grandeur."
  },
  {
    "title": "Marine Drive",
    "description": "Marine Drive, also called the Queen’s Necklace, is a 3.6 km boulevard curving along the Arabian Sea. At night, its streetlights resemble a sparkling necklace, creating a romantic ambiance. Locals and tourists enjoy evening walks, jogging, and watching sunsets here. During monsoon, crashing waves make it dramatic and lively. Its proximity to Chowpatty Beach adds to the charm. Marine Drive is Mumbai’s most beloved seaside promenade."
  },
  {
    "title": "Elephanta Caves",
    "description": "Elephanta Caves, a UNESCO World Heritage Site, lie on Elephanta Island just 11 km from Mumbai. These 5th–8th century caves are dedicated to Lord Shiva, with the Trimurti sculpture being the highlight. Visitors reach the caves by ferry from Gateway of India. The intricate carvings and rock-cut halls showcase ancient artistry. Surrounded by lush greenery, it blends heritage with nature. Elephanta Caves are Mumbai’s timeless treasure of faith and culture."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    "description": "CSMT, formerly Victoria Terminus, is a UNESCO World Heritage Site and Mumbai’s busiest railway station. Built in 1887, it blends Gothic Revival and Indian styles with domes, stained glass windows, and carvings. At night, the station glows with spectacular lights, making it a must-see. It remains the lifeline of Mumbai’s suburban rail network. Tourists admire its grandeur and historic importance. CSMT is Mumbai’s living symbol of colonial heritage and connectivity."
  },
  {
    "title": "Juhu Beach",
    "description": "Juhu Beach is Mumbai’s most popular beach, famous for its golden sands and lively atmosphere. Families and tourists flock here for sunsets, street food, and leisure walks. Vendors serve pav bhaji, bhel puri, and ice gola, making it a foodie’s paradise. Bollywood stars residing nearby often visit, adding glamour to the place. Festivals and cultural events make it even more vibrant. Juhu Beach is Mumbai’s seaside hotspot for fun and relaxation."
  },
  {
    "title": "Siddhivinayak Temple",
    "description": "The Siddhivinayak Temple in Prabhadevi is Mumbai’s most revered shrine dedicated to Lord Ganesha. Built in 1801, it attracts lakhs of devotees, including celebrities and politicians. The idol’s right-turned trunk is considered highly auspicious. Tuesdays see massive crowds seeking darshan and blessings. The temple is also known for its charitable activities. Siddhivinayak Temple is Mumbai’s divine center of faith and devotion."
  },
  {
    "title": "Haji Ali Dargah",
    "description": "Haji Ali Dargah, built in 1431, is a beautiful mosque and tomb standing on an islet in the Arabian Sea. Dedicated to Pir Haji Ali Shah Bukhari, it symbolizes faith and unity. A narrow causeway connects the shrine to the mainland, accessible during low tide. Thousands of devotees visit irrespective of religion. The evening view with the sun setting over the sea is breathtaking. Haji Ali Dargah is Mumbai’s iconic spiritual landmark."
  },
  {
    "title": "Colaba Causeway",
    "description": "Colaba Causeway is Mumbai’s bustling shopping street, filled with stalls selling clothes, jewelry, antiques, and souvenirs. Tourists love bargaining here while exploring its colorful vibe. Iconic cafés like Leopold Café and Café Mondegar add to the charm. The street is also lined with heritage buildings, enhancing its old-world feel. It is one of the city’s most vibrant cultural hubs. Colaba Causeway is Mumbai’s ultimate street shopping and hangout destination."
  },
  {
    "title": "Girgaon Chowpatty",
    "description": "Girgaon Chowpatty, also called Chowpatty Beach, is a cultural hotspot in South Mumbai. It is famous for Ganesh Visarjan immersions where thousands gather during festivals. Families visit to enjoy street food like pav bhaji, kulfi, and gola while relaxing by the sea. Fairs and cultural events make the beach lively year-round. Sunsets here are especially enchanting. Girgaon Chowpatty is Mumbai’s seaside celebration of culture and community."
  },
  {
    "title": "Sanjay Gandhi National Park",
    "description": "Sanjay Gandhi National Park, spread over 100 sq km, is one of the world’s largest national parks within a metro city. It is home to leopards, deer, monkeys, and hundreds of bird species. The park also houses the ancient Kanheri Caves, a group of Buddhist rock-cut monuments. Visitors enjoy safaris, boating, and nature trails here. Its greenery offers a refreshing break from city life. Sanjay Gandhi National Park is Mumbai’s natural oasis of wildlife and history."
  }
],


       "services": [
    {
      "name": "Pune Mumbai Cab Booking",
      "description": "Book safe, comfortable, and reliable cabs for your travel between Pune and Mumbai. Whether you're commuting for business, family, or leisure, our taxi service offers a range of vehicle options, punctual drivers, and flexible pick-up/drop-off times to ensure a hassle-free intercity journey on your terms."
    },
    {
      "name": "AC Taxi Pune to Mumbai",
      "description": "Enjoy a relaxed journey in our air-conditioned taxis from Pune to Mumbai. Perfect for long-distance travel, our AC cabs come equipped with comfortable seating, clean interiors, and efficient cooling systems to ensure you stay fresh throughout your trip—no matter the weather or traffic."
    },
    {
      "name": "One Way Pune Mumbai Cab",
      "description": "Ideal for travelers with a single-leg journey, our one-way Pune to Mumbai cab service is affordable, convenient, and includes professional drivers, clean vehicles, and transparent pricing. Whether you're heading to Mumbai airport, a hotel, or a business meeting, we’ve got you covered."
    },
    {
      "name": "Round Trip Cab",
      "description": "Plan your Pune-Mumbai-Pune trip with ease using our round-trip cab service. Great for day trips, business meetings, or weekend getaways, our service includes wait time, return flexibility, and the convenience of having the same driver for the entire journey."
    },
    {
      "name": "Budget Cab Pune Mumbai",
      "description": "Looking for an economical ride? Our budget cab services from Pune to Mumbai offer clean, well-maintained vehicles at pocket-friendly prices. Perfect for students, solo travelers, or small families who want to travel affordably without compromising on safety or reliability."
    },
    {
      "name": "SUV Cab Pune to Mumbai",
      "description": "Spacious and powerful, our SUV cabs are ideal for families, groups, or travelers carrying extra luggage. Enjoy superior comfort, better road grip on the highway, and extra space for a relaxed Pune to Mumbai ride in premium SUVs like Ertiga, Innova, or Xylo."
    },
    {
      "name": "Corporate Cab Service Pune Mumbai",
      "description": "Specialized corporate taxi services for professionals commuting between Pune and Mumbai. Choose from premium sedans and SUVs, get invoicing support, priority bookings, and drivers who understand the value of punctuality and professionalism in corporate travel."
    },
    {
      "name": "Family Cab Pune Mumbai",
      "description": "Designed for family travel, our Pune to Mumbai family cabs come with child-friendly features, ample luggage space, and patient drivers. Travel in comfort and safety with your loved ones, whether you're visiting relatives, attending a wedding, or going on vacation."
    },
    {
      "name": "Online Cab Booking Pune",
      "description": "Instantly book your Pune to Mumbai cab online using our easy-to-use platform. Choose your preferred vehicle, schedule your pick-up time, and get immediate confirmation. Our 24/7 support ensures your intercity booking is smooth, secure, and hassle-free."
    },
    {
      "name": "Highway Cab Pune Mumbai",
      "description": "Our highway cab service specializes in long-distance Pune-Mumbai travel, offering vehicles built for smooth highway cruising, professional drivers familiar with expressway routes, and safe driving practices for a quick, efficient journey across the Pune-Mumbai Expressway."
    },
    {
      "name": "Mini Cab Service",
      "description": "Looking for a small, affordable cab for 1–3 passengers? Our mini cab service offers hatchbacks and compact sedans perfect for solo or couple travelers. Save on costs without compromising on comfort, especially for one-way or short-notice bookings."
    },
    {
      "name": "Cab with Driver Mumbai Trip",
      "description": "Hire a cab with an experienced driver for your Pune to Mumbai journey. Our trained chauffeurs ensure stress-free travel, assist with navigation, luggage handling, and provide smooth pickups and drop-offs, whether it’s at your doorstep or at the airport."
    },
    {
      "name": "24×7 Cab Pune Mumbai",
      "description": "Round-the-clock cab service from Pune to Mumbai available any time—day or night. Ideal for early morning flights, late-night returns, or emergency travel. Our drivers operate on a shift basis to ensure availability and safety 24/7 across all routes."
    }
  ],
  "tableData": [
    ["Pune Mumbai Cab Booking", "AC Taxi Pune to Mumbai"],
    ["One Way Pune Mumbai Cab", "Round Trip Cab"],
    ["Budget Cab Pune Mumbai", "SUV Cab Pune to Mumbai"],
    ["Corporate Cab Service Pune Mumbai", "Family Cab Pune Mumbai"],
    ["Online Cab Booking Pune", "Highway Cab Pune Mumbai"],
    ["Mini Cab Service", "Cab with Driver Mumbai Trip"],
    ["24×7 Cab Pune Mumbai"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune to Mumbai Cabs",
    "WhyChoosedescription": "Vaishnavi Travels provides reliable and comfortable cab services from Pune to Mumbai, ideal for business trips, airport transfers, and family travel."
  },
  {
    "WhyChooseheading": "Multiple Vehicle Options for Every Need",
    "WhyChoosedescription": "Choose from Swift Dzire, Ertiga, Innova, Urbania, and Tempo Traveller depending on your group size and travel preferences."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Fleet",
    "WhyChoosedescription": "All our vehicles undergo regular maintenance and sanitization to ensure a safe and hygienic journey."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Route Expertise",
    "WhyChoosedescription": "Our professional drivers are well-versed with the Pune-Mumbai Expressway and alternate routes, ensuring smooth and timely travel."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer all-inclusive fares with no hidden charges, covering tolls, fuel, parking, and driver allowance."
  },
  {
    "WhyChooseheading": "Flexible Pickup and Drop-off Options",
    "WhyChoosedescription": "Enjoy doorstep pickup from anywhere in Pune and convenient drop-off at your preferred location in Mumbai."
  },
  {
    "WhyChooseheading": "Perfect for One-Way and Round Trips",
    "WhyChoosedescription": "Ideal for travelers needing a one-way transfer, round-trip, or same-day return from Mumbai."
  },
  {
    "WhyChooseheading": "24/7 Booking and Customer Support",
    "WhyChoosedescription": "Our dedicated support team is available around the clock to help with cab bookings, rescheduling, or travel assistance."
  }
]

























  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide cab services from Pune to Mumbai?',
      answer: 'Yes, Vaishnavi Travels offers comfortable and reliable cab services from Pune to Mumbai, suitable for business trips, sightseeing, and airport transfers.',
    },
    {
      question: 'What types of cabs are available for the Pune to Mumbai route?',
      answer: 'We provide a variety of vehicles including Swift Dzire, Ertiga, Innova, and Tempo Travellers to fit solo travelers, families, and groups.',
    },
    {
      question: 'What is the typical fare for a cab from Pune to Mumbai?',
      answer: 'Fares generally start from ₹2,500 for a one-way trip in a sedan like Swift Dzire. Rates vary based on vehicle type, trip duration, and additional services.',
    },
    {
      question: 'How long does the journey from Pune to Mumbai usually take?',
      answer: 'The trip typically takes about 3.5 to 5 hours depending on traffic and route, mostly via the Pune-Mumbai Expressway.',
    },
    {
      question: 'Can I book a round trip cab from Pune to Mumbai?',
      answer: 'Yes, Vaishnavi Travels offers flexible round trip packages for same-day or multi-day stays with transparent pricing and customizable itineraries.',
    },
    {
      question: 'How far in advance should I book a Pune to Mumbai cab?',
      answer: 'It is recommended to book at least 1-2 days in advance, especially during weekends and holiday seasons to ensure vehicle availability.',
    },
    {
      question: 'Is doorstep pickup and drop-off available for Pune to Mumbai cabs?',
      answer: 'Yes, Vaishnavi Travels provides convenient doorstep pickup and drop-off services anywhere in Pune and Mumbai.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Rajesh Patil",
    position: "Business Traveler",
    feedback:
      "Vaishnavi Travels provided excellent cab service from Pune to Mumbai. The driver was punctual and the journey was smooth and comfortable.",
    rating: 5,
  },
  {
    name: "Ms. Kavita Joshi",
    position: "Tourist",
    feedback:
      "I booked a cab with Vaishnavi Travels for Pune to Mumbai. The vehicle was clean and the service was very professional. Highly recommended!",
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

const puneToMumbaiCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Pune to Mumbai Cabs",
  "description": "Book AC and budget cabs from Pune to Mumbai for one way, round trip, corporate, family, and highway travel. Online booking available 24x7 with SUV, mini cab, and driver options.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "url": "https://vaishnavitravel.com/pune-to-mumbai-cabs"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Pune"
    },
    {
      "@type": "City",
      "name": "Mumbai"
    }
  ],
  "serviceType": [
    "Pune Mumbai Cab Booking",
    "AC Taxi Pune to Mumbai",
    "One Way Pune Mumbai Cab",
    "Round Trip Cab",
    "Budget Cab Pune Mumbai",
    "SUV Cab Pune to Mumbai",
    "Corporate Cab Service Pune Mumbai",
    "Family Cab Pune Mumbai",
    "Online Cab Booking Pune",
    "Highway Cab Pune Mumbai",
    "Mini Cab Service",
    "Cab with Driver Mumbai Trip",
    "24×7 Cab Pune Mumbai"
  ],
  "availability": "https://schema.org/InStock"
};





  return (
    <div>

<Helmet>
  <title>Pune to Mumbai Cabs | AC & Budget Taxi Booking Pune Mumbai</title>
  <meta
    name="description"
    content="Book AC and budget cabs from Pune to Mumbai for one way, round trip, corporate, family, and highway travel. Online booking available 24x7 with SUV, mini cab, and driver options."
  />
  <meta
    name="keywords"
    content="Pune Mumbai Cab Booking, AC Taxi Pune to Mumbai, One Way Pune Mumbai Cab, Round Trip Cab, Budget Cab Pune Mumbai, SUV Cab Pune to Mumbai, Corporate Cab Service Pune Mumbai, Family Cab Pune Mumbai, Online Cab Booking Pune, Highway Cab Pune Mumbai, Mini Cab Service, Cab with Driver Mumbai Trip, 24×7 Cab Pune Mumbai"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToMumbaiCabSchema)}
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
              <img src='/images/keyword/71.jpg' alt='img'  className='img-fluid'/>
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
                      Prathmesh Park Baner, Pune Maharashtra 411045
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

export default Punetomumbaicabs;