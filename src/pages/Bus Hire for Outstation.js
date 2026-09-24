
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Bushireforoutstation() {



  const cardData =
  {
    keyword: ' Bus Hire for Outstation',
    heading: 'Vaishnavi Travels: Bus Hire for Outstation',
    headingDescription: 'Vaishnavi Travels offers dependable and affordable Bus Hire for Outstation journeys, ensuring comfortable and stress-free travel for large groups. Our fleet includes well-maintained buses with spacious seating, powerful air-conditioning, and ample luggage space, making them ideal for family functions, corporate trips, school excursions, and long-distance tours. With professional drivers, on-time pickups, and flexible booking options, we guarantee a smooth travel experience across cities and states. Whether it’s a pilgrimage, holiday tour, or destination wedding, Vaishnavi Travels provides safe, reliable, and convenient outstation bus hire services tailored to your travel needs.',

    top: 'Top Places to Visit in Pune with Vaishnavi Travels',

   "topPlaces": [
  {
    "title": "Lonavala and Khandala",
    "description": "Just 65 km from Pune, the twin hill stations of Lonavala and Khandala are the most loved weekend getaways. Famous for misty hills, lush valleys, and cascading waterfalls, they offer a refreshing escape from city life. Tourists enjoy attractions like Bhushi Dam, Tiger’s Leap, Karla Caves, and Rajmachi Fort. The scenic drive through the Mumbai-Pune Expressway adds to the charm. Monsoon brings out the best greenery here. Lonavala and Khandala are Pune’s top outstation retreats for families and friends."
  },
  {
    "title": "Mahabaleshwar",
    "description": "Located 120 km from Pune, Mahabaleshwar is a picturesque hill station in the Sahyadris. Known for its strawberry farms, viewpoints like Arthur’s Seat, and boating at Venna Lake, it offers a mix of leisure and adventure. The old Mahabaleshwar temple adds a spiritual touch. Its cool climate makes it an all-season favorite, especially in summer. Tourists love scenic drives through Panchgani and Tapola nearby. Mahabaleshwar is Pune’s refreshing outstation paradise."
  },
  {
    "title": "Shirdi",
    "description": "Shirdi, around 200 km from Pune, is a world-renowned pilgrimage center dedicated to Sai Baba. The Samadhi Mandir attracts millions of devotees every year, offering peace and devotion. The complex also includes Dwarkamai, Chavadi, and museums narrating Sai Baba’s life. Frequent outstation cab services connect Pune to Shirdi conveniently. Spiritual seekers find solace in the temple’s aura. Shirdi is Pune’s sacred outstation journey for faith and blessings."
  },
  {
    "title": "Shani Shingnapur",
    "description": "Shani Shingnapur, 160 km from Pune, is a unique village where Lord Shani is worshipped in an open-air temple. The village is famous for its houses without doors, symbolizing trust and divine protection. Pilgrims combine Shirdi and Shani Shingnapur in one trip. The atmosphere is filled with devotion and discipline. Outstation buses and cabs make travel easy. Shani Shingnapur is Pune’s spiritual outstation landmark of faith and tradition."
  },
  {
    "title": "Lavasa",
    "description": "About 60 km from Pune, Lavasa is India’s first planned hill city modeled on an Italian town. Nestled by the Warasgaon Lake, it offers lakeside promenades, adventure sports, and luxury resorts. Couples enjoy romantic boat rides and evening strolls. Adventure seekers try zip-lining, cycling, and trekking. Its colorful buildings and scenic backdrops make it perfect for photography. Lavasa is Pune’s modern outstation escape for leisure and fun."
  },
  {
    "title": "Alibaug",
    "description": "Alibaug, 140 km from Pune, is a coastal town famous for its clean beaches and forts. Tourists relax at Alibaug, Kashid, and Nagaon beaches while enjoying water sports. The historic Kolaba Fort adds heritage charm to the seaside beauty. Fresh seafood and beach resorts enhance the coastal experience. Weekend travelers often combine Alibaug with Murud-Janjira Fort. Alibaug is Pune’s favorite outstation beachside retreat."
  },
  {
    "title": "Nashik",
    "description": "Situated about 210 km from Pune, Nashik is known as India’s wine capital and a holy city on the banks of the Godavari. It hosts the world-famous Kumbh Mela and temples like Trimbakeshwar Jyotirlinga. Tourists also explore vineyards and enjoy wine tours at Sula. Its mix of spirituality and modern leisure attracts all types of travelers. Nashik is Pune’s versatile outstation trip for both devotion and relaxation."
  },
  {
    "title": "Kolhapur",
    "description": "Kolhapur, 230 km from Pune, is a historic city known for the Mahalaxmi Temple and Maratha heritage. Panhala Fort, Rankala Lake, and New Palace Museum are major attractions. The city is also famous for spicy Kolhapuri cuisine and handcrafted chappals. Pilgrims, foodies, and history lovers alike flock here. Kolhapur is Pune’s culturally rich outstation journey filled with tradition and taste."
  },
  {
    "title": "Goa",
    "description": "Around 450 km from Pune, Goa is India’s most popular beach destination. Famous for its golden beaches, churches, nightlife, and Portuguese heritage, it attracts both youngsters and families. North Goa offers vibrant parties and water sports, while South Goa is known for calm beaches and luxury resorts. The drive from Pune via Kolhapur is scenic and enjoyable. Goa is Pune’s ultimate outstation vacation spot for fun and relaxation."
  },
  {
    "title": "Bhimashankar",
    "description": "Bhimashankar, 110 km from Pune, is one of the 12 Jyotirlingas of Lord Shiva. Nestled in the Sahyadri hills, it combines spiritual significance with natural beauty. The surrounding wildlife sanctuary is home to the Indian Giant Squirrel. Trekkers enjoy lush green trails, especially in monsoon. Pilgrims find divine peace at the temple, while nature lovers enjoy the scenic valleys. Bhimashankar is Pune’s sacred and adventurous outstation getaway."
  }
],


    "services": [
  {
    "name": "Outstation Bus Hire Pune",
    "description": "Reliable outstation bus hire services in Pune ideal for long-distance travel to cities, hill stations, religious sites, and tourist destinations. Vehicles are equipped with comfortable seating, overhead luggage space, and experienced drivers familiar with intercity routes. Suitable for group tours, weddings, and business trips."
  },
  {
    "name": "Long Distance Bus on Rent Pune",
    "description": "Specialized long-distance bus rental from Pune with options ranging from 17 to 50-seaters. These buses are designed for endurance, with pushback seats, air suspension, and entertainment systems to make long trips comfortable. Includes route planning, toll management, and optional sleeper setups."
  },
  {
    "name": "Intercity Bus Rental Pune",
    "description": "Intercity bus rental services from Pune for group travel to destinations across Maharashtra and India. Perfect for educational tours, destination weddings, or multi-day pilgrimages. Includes AC/non-AC options, multiple pickup points, and flexible return schedules for convenience."
  },
  {
    "name": "AC Bus for Outstation Pune",
    "description": "Air-conditioned buses available for outstation travel from Pune, ensuring passengers remain comfortable in varying weather conditions. Ideal for corporate groups, families, or tour organizers who value both comfort and cleanliness over long travel hours. Comes with fully serviced interiors and charging points."
  },
  {
    "name": "40 Seater Outstation Bus Hire",
    "description": "Spacious 40-seater bus hire in Pune for outstation trips. Offers reclining seats, large windows, onboard storage, and experienced long-route drivers. Ideal for medium-sized wedding groups, school tours, or company team outings heading to nearby cities or attractions."
  },
  {
    "name": "Pune to Outstation Trip Bus",
    "description": "Point-to-point outstation bus rental services from Pune to major tourist or business hubs such as Mumbai, Nashik, Mahabaleshwar, Goa, and more. Choose your departure time, route, and amenities while we manage the logistics, route planning, and on-road support for a smooth journey."
  },
  {
    "name": "Bus Rental for Family Tour Pune",
    "description": "Family tour bus rentals in Pune for weekend getaways, pilgrimages, or holiday packages. Designed for safety, comfort, and relaxation, with professional drivers, curated travel routes, optional music systems, and enough space for kids and elders to travel together with ease."
  },
  {
    "name": "Wedding Outstation Bus Booking",
    "description": "Wedding-specific outstation bus booking from Pune to your destination venue, ensuring guests arrive on time and in comfort. These buses can be decorated and customized with refreshments, special signage, and assigned guest seating. A perfect fit for destination weddings and baraat travel."
  },
  {
    "name": "Corporate Outstation Bus Hire Pune",
    "description": "Outstation bus hire for corporate groups in Pune heading to retreats, conferences, or team-building getaways. Vehicles include WiFi (on request), power outlets, business-friendly seating, and itinerary support for punctual, professional group travel across cities or states."
  },
  {
    "name": "Outstation Bus with Driver Pune",
    "description": "Full-service outstation buses with trained, verified drivers from Pune to any destination in India. Drivers are experienced in long-distance, multi-stop travel and are available for round trips or one-way journeys. Vehicles are GPS-tracked and safety compliant for peace of mind."
  },
  {
    "name": "Tourist Bus Hire for Outstation",
    "description": "Tourist-focused bus rentals in Pune for outstation exploration, sightseeing trips, and group holidays. Includes amenities like on-board guides (on request), route customization, AC or deluxe seating, and enough storage for travel gear. Great for large families or travel agencies."
  },
  {
    "name": "Book Outstation Bus Online Pune",
    "description": "Instant online outstation bus booking platform in Pune where you can compare vehicle types, check availability, get pricing, and confirm in minutes. Offers secure payment, digital receipts, cancellation options, and real-time support for changes in travel plans."
  },
  {
    "name": "Deluxe Outstation Bus Pune",
    "description": "High-end deluxe buses for outstation travel from Pune offering luxurious interiors, AC, entertainment systems, cushioned seats, and personalized support. Ideal for VIP guests, high-end tours, or corporate leadership teams looking for extra comfort over long distances."
  }
],
"tableData": [
  ["Outstation Bus Hire Pune", "Long Distance Bus on Rent Pune"],
  ["Intercity Bus Rental Pune", "AC Bus for Outstation Pune"],
  ["40 Seater Outstation Bus Hire", "Pune to Outstation Trip Bus"],
  ["Bus Rental for Family Tour Pune", "Wedding Outstation Bus Booking"],
  ["Corporate Outstation Bus Hire Pune", "Outstation Bus with Driver Pune"],
  ["Tourist Bus Hire for Outstation", "Book Outstation Bus Online Pune"],
  ["Deluxe Outstation Bus Pune"]
],




   "whychoose": [
  {
    "WhyChooseheading": "Reliable Bus Hire for Outstation Trips",
    "WhyChoosedescription": "Vaishnavi Travels offers dependable and comfortable buses for outstation travel, ideal for long-distance group journeys."
  },
  {
    "WhyChooseheading": "Comfortable Buses for Long-Distance Travel",
    "WhyChoosedescription": "Our outstation buses come with spacious seating, ample luggage space, and modern amenities to ensure a smooth ride."
  },
  {
    "WhyChooseheading": "Well-Maintained Fleet for Safe Travel",
    "WhyChoosedescription": "Every bus is regularly serviced and inspected to guarantee safe and hassle-free travel across states and cities."
  },
  {
    "WhyChooseheading": "Customizable Outstation Travel Packages",
    "WhyChoosedescription": "Choose rental options that suit your journey—one-way, round-trip, or multi-day packages available for all destinations."
  },
  {
    "WhyChooseheading": "Experienced Drivers for Intercity Routes",
    "WhyChoosedescription": "Our skilled drivers are familiar with major outstation routes, ensuring timely arrivals and smooth highway travel."
  },
  {
    "WhyChooseheading": "All-Inclusive Pricing with No Hidden Costs",
    "WhyChoosedescription": "Our transparent pricing includes fuel, tolls, permits, and driver charges—no surprises, just straightforward billing."
  },
  {
    "WhyChooseheading": "Ideal for Family Trips, Tours, and Corporate Travel",
    "WhyChoosedescription": "Whether it's a vacation, corporate retreat, or pilgrimage, our buses are perfect for any outstation group travel need."
  },
  {
    "WhyChooseheading": "24/7 Support for Emergency and Trip Assistance",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer service to support you during your entire outstation journey."
  }
]























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer bus hire services for outstation trips?',
      answer: 'Yes, Vaishnavi Travels provides dependable and comfortable bus hire services for outstation journeys from Pune to popular destinations like Mumbai, Nashik, Goa, Shirdi, Mahabaleshwar, and more. Our outstation services are ideal for family trips, corporate tours, pilgrimages, and weekend getaways, ensuring a relaxed and safe journey for all passengers.',
    },
    {
      question: 'What seating options are available for outstation bus hire?',
      answer: 'We offer a range of seating options including 17-seater tempo travellers, 27-seater minibuses, and larger 32 to 50-seater luxury coaches. Each vehicle is equipped with push-back seats, ample luggage space, and AC/non-AC options so you can travel in comfort over long distances.',
    },
    {
      question: 'Are your outstation buses suitable for overnight journeys?',
      answer: 'Absolutely. Our buses are designed for long-duration travel with features like reclining seats, reading lights, charging ports (on select models), and air-conditioning to provide a smooth and comfortable experience even on overnight journeys. We also provide night-travel experienced drivers to ensure safety and punctuality.',
    },
    {
      question: 'What is included in the fare for an outstation bus hire?',
      answer: 'Our outstation rental fare generally includes the vehicle charges and driver allowance. However, toll taxes, parking fees, and interstate permits (if applicable) are usually billed separately. We provide clear and transparent pricing upfront so there are no surprises later.',
    },
    {
      question: 'Can I plan a custom itinerary for my outstation trip?',
      answer: 'Yes, we fully support custom itineraries. Whether it’s a two-day trip or a week-long tour, just share your destinations, timings, and stops, and we’ll create a package tailored to your plan. Our experienced drivers are also flexible with route adjustments where feasible.',
    },
    {
      question: 'Is it safe to travel outstation with your buses?',
      answer: 'Safety is a top priority at Vaishnavi Travels. All our buses go through routine maintenance checks before every trip. Our drivers are background-verified, experienced in highway driving, and trained in safe driving practices to ensure a stress-free journey.',
    },
    {
      question: 'How early should I book a bus for outstation travel?',
      answer: 'For weekend or holiday trips, we recommend booking at least 5–7 days in advance to ensure vehicle availability. For peak seasons or longer group tours, booking 2–3 weeks ahead will give you more options in terms of vehicle type and pricing.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Rajeev Nair",
    position: "Team Lead - IT Services",
    feedback:
      "We booked a 32-seater AC bus from Vaishnavi Travels for a corporate offsite to Mahabaleshwar, and the experience was flawless. The bus was clean, spacious, and perfectly maintained. The driver was cooperative and knew the route well, which helped us avoid traffic and delays. Our team really appreciated the comfort during the long ride. Would highly recommend them for any outstation travel from Pune.",
    rating: 5,
  },
  {
    name: "Ms. Meenal Thombre",
    position: "School Administrator",
    feedback:
      "Vaishnavi Travels arranged a 50-seater bus for our school’s outstation picnic to Imagica, and the journey was extremely smooth. The bus arrived on time, was very clean, and had all the necessary amenities. The students and staff were comfortable throughout the journey, and the driver was courteous and patient. It’s rare to find such reliable transport partners these days. We’ll definitely book again for our next trip.",
    rating: 5,
    style: "style-2",
  },
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bus Hire for Outstation",
  "image": "https://vaishnavitravel.com/assets/images/bus-hire-for-outstation.jpg",
  "description": "Hire buses for outstation travel from Pune with Vaishnavi Travels. AC and Non-AC buses, 40-seaters, deluxe coaches, and tourist buses available for family tours, weddings, and corporate trips with experienced drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "4126"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "9800",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-hire-for-outstation"
  }
};





  return (
    <div>

<Helmet>
  <title>Bus Hire for Outstation | Intercity & Long Distance Trips | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Hire buses for outstation travel from Pune with Vaishnavi Travels. AC and Non-AC buses, 40-seaters, deluxe coaches, and tourist buses available for family tours, weddings, and corporate trips with experienced drivers."
  />
  <meta
    name="keywords"
    content="Outstation Bus Hire Pune, Long Distance Bus on Rent Pune, Intercity Bus Rental Pune, AC Bus for Outstation Pune, 40 Seater Outstation Bus Hire, Pune to Outstation Trip Bus, Bus Rental for Family Tour Pune, Wedding Outstation Bus Booking, Corporate Outstation Bus Hire Pune, Outstation Bus with Driver Pune, Tourist Bus Hire for Outstation, Book Outstation Bus Online Pune, Deluxe Outstation Bus Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
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
              <img src='/images/keyword/4.jpg' alt='img'  className='img-fluid'/>
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

export default Bushireforoutstation;