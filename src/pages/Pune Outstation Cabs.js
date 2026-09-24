
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Puneoutstationcabs() {



  const cardData =
  {
    keyword: '  Pune Outstation Cabs',
    heading: 'Vaishnavi Travels: Pune Outstation Cabs',
    headingDescription: 'Vaishnavi Travels provides affordable and reliable Pune Outstation Cabs, making long-distance travel smooth and convenient for families, corporate groups, and tourists. Our cabs are well-maintained with spacious seating, strong air-conditioning, and ample luggage capacity to ensure a comfortable ride on every journey. With professional chauffeurs, timely pickups, and flexible booking options, we make outstation trips stress-free and enjoyable. Whether it’s a weekend getaway, religious yatra, family function, or corporate tour, Vaishnavi Travels guarantees safe, dependable, and comfortable outstation cab services from Pune to all major destinations.',

    top: 'Top Places to Visit in Pune Outstation with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Lonavala & Khandala",
    "description": "Lonavala and Khandala, just 65 km from Pune, are twin hill stations famous for their misty hills, waterfalls, and forts. Popular spots include Bhushi Dam, Tiger’s Leap, and Duke’s Nose. Trekkers love exploring Lohagad and Rajmachi Fort. The region is also known for Karla and Bhaja Buddhist caves. Monsoon makes the valleys come alive with greenery and streams. Lonavala and Khandala are Pune’s favorite weekend hill getaways."
  },
  {
    "title": "Mahabaleshwar",
    "description": "Mahabaleshwar, around 120 km from Pune, is a scenic hill station nestled in the Sahyadris. Famous for Venna Lake, Arthur’s Seat, and Mapro Garden, it offers panoramic views and strawberry delights. Tourists enjoy boating, trekking, and shopping for jams and syrups. Monsoon and winter make the valleys magical. The historic Pratapgad Fort nearby adds heritage charm. Mahabaleshwar is Pune’s refreshing escape of hills and flavors."
  },
  {
    "title": "Lavasa",
    "description": "Lavasa, 60 km from Pune, is a modern planned hill city modeled on Italian architecture. Its colorful lakeside promenade, adventure sports park, and nature trails attract families and couples. Warasgaon Lake offers boating, kayaking, and peaceful sunsets. Wellness resorts and spas make it popular for luxury getaways. The monsoon season adds waterfalls and misty charm. Lavasa is Pune’s stylish retreat blending leisure and adventure."
  },
  {
    "title": "Shirdi",
    "description": "Shirdi, 200 km from Pune, is one of India’s most sacred pilgrim towns, dedicated to Sai Baba. The Sai Baba Samadhi Mandir attracts millions of devotees every year. Important spots include Dwarkamai, Chavadi, and Lendi Baug. The town also has Sai Heritage Village and Wet N Joy Water Park. Shirdi is often combined with Shani Shingnapur nearby. It is Pune’s spiritual outstation destination of devotion and faith."
  },
  {
    "title": "Bhimashankar",
    "description": "Bhimashankar, about 110 km from Pune, is one of the 12 Jyotirlingas dedicated to Lord Shiva. Nestled in the Sahyadri hills, it is also a wildlife sanctuary home to the Indian giant squirrel. The temple attracts pilgrims year-round, especially during Mahashivratri. Trekkers enjoy the trails through forests, valleys, and waterfalls. Monsoon enhances its beauty with lush greenery. Bhimashankar is Pune’s sacred blend of devotion and nature."
  },
  {
    "title": "Goa",
    "description": "Goa, around 450 km from Pune, is India’s beach paradise and a popular long-trip destination. Tourists enjoy Calangute, Baga, and Palolem beaches, along with Fort Aguada and Chapora. Water sports, beach parties, and seafood shacks make it lively. Heritage lovers explore Old Goa’s churches like Basilica of Bom Jesus. Dudhsagar Waterfalls add adventure to the trip. Goa is Pune’s favorite coastal escape for fun and relaxation."
  },
  {
    "title": "Matheran",
    "description": "Matheran, 120 km from Pune, is India’s only automobile-free hill station. Famous for its red-soil trails, toy train, and viewpoints like Panorama Point, it offers peace away from city chaos. Tourists enjoy horse rides, trekking, and sunset views. The cool climate and green forests make it a year-round favorite. Photography and nature walks are popular activities. Matheran is Pune’s eco-friendly heritage hill getaway."
  },
  {
    "title": "Nashik & Trimbakeshwar",
    "description": "Nashik, 210 km from Pune, is a city of temples, vineyards, and heritage. The Trimbakeshwar Temple, one of the 12 Jyotirlingas, is its biggest spiritual draw. Nashik is also famous for Sula Vineyards, Panchavati, and Ramkund. Pilgrims and tourists enjoy the blend of devotion and leisure. The Kumbh Mela held here every 12 years is world-renowned. Nashik is Pune’s spiritual and wine tourism outstation gem."
  },
  {
    "title": "Alibaug",
    "description": "Alibaug, 145 km from Pune, is a coastal town known as the 'Goa of Maharashtra.' Beaches like Alibaug, Kashid, and Nagaon attract tourists for relaxation and water sports. Kolaba Fort adds historical flavor to the trip. Beach resorts and homestays make it ideal for weekend getaways. Fresh seafood enhances the coastal charm. Alibaug is Pune’s seaside escape of sun, sand, and heritage."
  },
  {
    "title": "Ajanta & Ellora Caves",
    "description": "Ajanta and Ellora, near Sambhajinagar (Aurangabad), are UNESCO World Heritage Sites about 240 km from Pune. Ajanta is famous for its Buddhist paintings and sculptures dating to the 2nd century BCE. Ellora has 34 caves representing Hindu, Buddhist, and Jain traditions, with Kailasa Temple as its highlight. Art, history, and architecture lovers find the caves mesmerizing. These sites are Pune’s ultimate cultural and heritage outstation treasures."
  }
],


     "services": [
    {
      "name": "Outstation Taxi Service Pune",
      "description": "Plan seamless outstation trips from Pune with our reliable taxi services, ideal for personal, family, or corporate travel. Our outstation cabs are available for all major cities and tourist destinations across India, featuring experienced drivers, clean vehicles, and flexible booking options to match your travel needs. Whether it’s a weekend getaway or a long vacation, we ensure comfort and punctuality throughout the journey."
    },
    {
      "name": "Long Distance Cab Booking",
      "description": "Book long-distance cabs from Pune to cities across Maharashtra and neighboring states. Our long-haul taxi service is designed for intercity and multi-day travel, with well-maintained cars, drivers experienced in highway routes, and convenient pick-up/drop-off options. Ideal for business tours, weddings, family visits, and remote destination travel with total peace of mind."
    },
    {
      "name": "AC Outstation Cab",
      "description": "Travel in cool comfort with our AC outstation cab services from Pune. Designed for extended journeys, these cabs feature plush interiors and efficient climate control to ensure passengers stay refreshed throughout the trip. Perfect for both short and long trips to hill stations, beaches, heritage towns, or pilgrimage sites."
    },
    {
      "name": "Non AC Outstation Taxi",
      "description": "Affordable and practical, our non-AC outstation taxis are best suited for budget-conscious travelers who prioritize value without compromising safety. These vehicles offer reliable transportation for moderate climates and short distances, with experienced drivers and transparent fares included."
    },
    {
      "name": "Family Outstation Cabs",
      "description": "Our family-friendly outstation cabs from Pune come equipped with spacious seating, safety features, and courteous drivers who understand the unique needs of traveling with children or elders. Whether it's a holiday trip or a family function, we ensure the entire journey is smooth, enjoyable, and stress-free."
    },
    {
      "name": "Weekend Outstation Cab",
      "description": "Getaway from the city with our special weekend outstation cab services. Perfect for quick escapes to Lonavala, Mahabaleshwar, Alibaug, or other nearby destinations. Enjoy flexible scheduling, easy return options, and clean vehicles—making your weekend trip from Pune relaxing and memorable."
    },
    {
      "name": "Corporate Outstation Service",
      "description": "Professional outstation cab services tailored for corporate teams, business delegates, and employee transport. Choose from sedans, SUVs, or luxury cars based on your company’s travel policies. We provide timely pickups, invoicing support, and well-trained drivers to maintain the highest level of professionalism on your business travels."
    },
    {
      "name": "School Trip Outstation Cab",
      "description": "Safe and reliable outstation taxi services for school trips, educational tours, and college outings from Pune. Our drivers are background-verified and trained to handle student groups with care and responsibility. Vehicles include seat belts, first aid kits, and space for accompanying staff, ensuring a secure experience for educational travel."
    },
    {
      "name": "Tour Package Cabs Pune",
      "description": "Book complete tour package cabs from Pune for sightseeing trips, pilgrimage tours, nature excursions, or cultural travel. Our customizable packages include vehicle, driver, route planning, and optional hotel suggestions to provide a convenient and all-in-one travel solution tailored to your itinerary."
    },
    {
      "name": "Group Outstation Taxi",
      "description": "Travel with friends, family, or colleagues using our group outstation cab services. We offer multi-seater vehicles such as SUVs and tempo travellers with ample space for passengers and luggage. Great for events, weddings, or large group vacations where comfort and coordination are essential."
    },
    {
      "name": "Online Outstation Cab Booking",
      "description": "Easily book your outstation taxi from Pune online with our quick and secure platform. Choose your destination, vehicle type, and travel dates—all with instant confirmation and round-the-clock customer support. Manage your trip digitally with real-time updates and support just a click away."
    },
    {
      "name": "Budget Outstation Cabs",
      "description": "Save more on your long-distance travel with our budget outstation cab options from Pune. Get value-for-money service with no hidden charges, clean vehicles, and courteous drivers. Ideal for backpackers, students, and budget-conscious families looking for safe and economical travel options."
    },
    {
      "name": "24×7 Outstation Cab Pune",
      "description": "No matter the hour, our 24×7 outstation cab service from Pune is ready to serve. Perfect for night travel, early morning starts, and last-minute plans, we ensure timely pickups, safe journeys, and experienced drivers available round the clock for any outstation destination."
    }
  ],
  "tableData": [
    ["Outstation Taxi Service Pune", "Long Distance Cab Booking"],
    ["AC Outstation Cab", "Non AC Outstation Taxi"],
    ["Family Outstation Cabs", "Weekend Outstation Cab"],
    ["Corporate Outstation Service", "School Trip Outstation Cab"],
    ["Tour Package Cabs Pune", "Group Outstation Taxi"],
    ["Online Outstation Cab Booking", "Budget Outstation Cabs"],
    ["24×7 Outstation Cab Pune"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune Outstation Cabs",
    "WhyChoosedescription": "Vaishnavi Travels offers dependable and comfortable outstation cab services from Pune to all major destinations across Maharashtra and beyond."
  },
  {
    "WhyChooseheading": "Wide Network of Outstation Routes",
    "WhyChoosedescription": "Travel to popular destinations like Mahabaleshwar, Lonavala, Shirdi, Mumbai, Goa, Nashik, Aurangabad, and more with our expert drivers."
  },
  {
    "WhyChooseheading": "Variety of Vehicle Options",
    "WhyChoosedescription": "Choose from Swift Dzire, Ertiga, Innova, Urbania, and Tempo Traveller based on your group size and travel preferences."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Vehicles",
    "WhyChoosedescription": "All our cabs are regularly serviced and sanitized to ensure hygiene and comfort for your long-distance travel."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Route Expertise",
    "WhyChoosedescription": "Our drivers are well-versed with all major outstation routes for a smooth and safe travel experience."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "We offer clear and competitive pricing that includes fuel, tolls, parking, and driver allowances with no hidden charges."
  },
  {
    "WhyChooseheading": "Door-to-Door Pickup and Drop-off",
    "WhyChoosedescription": "Enjoy convenient service from your home, office, or hotel in Pune to your destination and back."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for All Your Travel Needs",
    "WhyChoosedescription": "Our round-the-clock support team is always available to assist with bookings, changes, and any travel-related queries."
  }
]


























  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide outstation cab services from Pune?',
      answer: 'Yes, Vaishnavi Travels offers reliable and comfortable outstation cab services from Pune to various destinations across Maharashtra and neighboring states.',
    },
    {
      question: 'What types of vehicles are available for Pune outstation cabs?',
      answer: 'We provide a range of vehicles including Swift Dzire, Ertiga, Innova, and Tempo Travellers to suit solo travelers, families, and larger groups.',
    },
    {
      question: 'What is the typical fare structure for Pune outstation cabs?',
      answer: 'Fares vary based on the destination, vehicle type, and trip duration. Starting fares generally begin at ₹3,500 for popular nearby outstation routes.',
    },
    {
      question: 'Can I book round trip or multi-day packages for outstation travel?',
      answer: 'Yes, Vaishnavi Travels offers flexible round trip and multi-day packages with customizable itineraries and transparent pricing.',
    },
    {
      question: 'How far in advance should I book an outstation cab from Pune?',
      answer: 'It is recommended to book at least 1-2 days in advance to ensure vehicle availability, especially during peak travel seasons and holidays.',
    },
    {
      question: 'Is doorstep pickup and drop-off available for Pune outstation cabs?',
      answer: 'Yes, Vaishnavi Travels provides convenient doorstep pickup and drop-off services anywhere in Pune and nearby areas.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Sandeep Shinde",
    position: "Frequent Traveler",
    feedback:
      "Vaishnavi Travels’ outstation cab service from Pune is excellent. The drivers are professional, and the vehicles are well-maintained and comfortable.",
    rating: 5,
  },
  {
    name: "Ms. Neha Kulkarni",
    position: "Traveler",
    feedback:
      "I used Vaishnavi Travels for an outstation trip from Pune, and the experience was seamless from booking to drop-off. Highly recommend their services!",
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


const puneOutstationCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Pune Outstation Cabs",
  "description": "Reliable outstation taxi service in Pune offering AC and Non AC cabs for long distance travel, family trips, corporate outings, school trips, and group tours. Book online 24x7 with budget options available.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "url": "https://vaishnavitravel.com/pune-outstation-cabs"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pune"
  },
  "serviceType": [
    "Outstation Taxi Service Pune",
    "Long Distance Cab Booking",
    "AC Outstation Cab",
    "Non AC Outstation Taxi",
    "Family Outstation Cabs",
    "Weekend Outstation Cab",
    "Corporate Outstation Service",
    "School Trip Outstation Cab",
    "Tour Package Cabs Pune",
    "Group Outstation Taxi",
    "Online Outstation Cab Booking",
    "Budget Outstation Cabs",
    "24×7 Outstation Cab Pune"
  ],
  "availability": "https://schema.org/InStock"
};




  return (
    <div>

<Helmet>
  <title>Pune Outstation Cabs | AC & Non AC Outstation Taxi Service Pune</title>
  <meta
    name="description"
    content="Reliable outstation taxi service in Pune offering AC and Non AC cabs for long distance travel, family trips, corporate outings, school trips, and group tours. Book online 24x7 with budget options available."
  />
  <meta
    name="keywords"
    content="Outstation Taxi Service Pune, Long Distance Cab Booking, AC Outstation Cab, Non AC Outstation Taxi, Family Outstation Cabs, Weekend Outstation Cab, Corporate Outstation Service, School Trip Outstation Cab, Tour Package Cabs Pune, Group Outstation Taxi, Online Outstation Cab Booking, Budget Outstation Cabs, 24×7 Outstation Cab Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneOutstationCabSchema)}
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
              <img src='/images/keyword/75.jpg' alt='img'  className='img-fluid'/>
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

export default Puneoutstationcabs;