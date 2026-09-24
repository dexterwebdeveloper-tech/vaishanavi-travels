
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Puneonlinecabbooking() {



  const cardData =
  {
    keyword: '  Pune Online Cab Booking',
    heading: 'Vaishnavi Travels: Pune Online Cab Booking',
    headingDescription: 'Vaishnavi Travels offers convenient and affordable Pune Online Cab Booking, making travel simple and stress-free for every occasion. Our well-maintained cabs come with spacious seating, strong air-conditioning, and ample luggage capacity, ensuring a smooth and comfortable ride. With easy online booking, professional chauffeurs, and timely pickups, we provide reliable transportation for local rides, airport transfers, weddings, corporate events, and outstation journeys. Whether it’s a short city trip, business travel, family outing, or religious yatra, Vaishnavi Travels guarantees safe, comfortable, and hassle-free cab services in Pune with just a few clicks.',

    top: 'Top Places to Visit in Pune with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Shaniwar Wada",
    "description": "Shaniwar Wada, built in 1732 by the Peshwas, is Pune’s grand fort palace and a symbol of Maratha pride. Once the seat of the Maratha Empire, its massive gates, fountains, and courtyards echo with history. Though partially destroyed by fire in 1828, it still draws thousands of visitors daily. The evening light-and-sound show brings alive tales of Bajirao and Mastani. Tourists love exploring its hidden pathways and gardens. Shaniwar Wada is Pune’s crown jewel of heritage and culture."
  },
  {
    "title": "Aga Khan Palace",
    "description": "The Aga Khan Palace, built in 1892, is a monument of national importance linked to India’s freedom struggle. Mahatma Gandhi, Kasturba Gandhi, and other leaders were imprisoned here during the Quit India Movement. Today, it houses a museum showcasing Gandhi’s personal belongings, photographs, and letters. Its Italian arches and landscaped gardens add serene charm. Students and tourists find it both inspirational and peaceful. Aga Khan Palace is Pune’s proud landmark of patriotism and sacrifice."
  },
  {
    "title": "Sinhagad Fort",
    "description": "Sinhagad Fort, located 25 km from Pune, is a hilltop stronghold known for the 1670 battle where Tanaji Malusare fought for Chhatrapati Shivaji Maharaj. Trekkers climb to the fort for stunning views of the Sahyadris. The fort still has bastions, temples, and memorials that narrate Maratha valor. In monsoon, mist and waterfalls make the climb enchanting. Local stalls serve rustic pithla-bhakri to visitors. Sinhagad Fort is Pune’s mix of history, trekking, and scenic charm."
  },
  {
    "title": "Dagdusheth Halwai Ganpati Temple",
    "description": "The Shreemant Dagdusheth Halwai Ganpati Temple is Pune’s most famous shrine dedicated to Lord Ganesha. The grand idol, adorned with gold and jewels, attracts lakhs of devotees every year. During Ganesh Chaturthi, the temple becomes the epicenter of grand celebrations. Known for its cultural and charitable contributions, it blends faith with service. Devotees feel immense spiritual energy here. Dagdusheth Temple is Pune’s divine and cultural heartbeat."
  },
  {
    "title": "Pataleshwar Cave Temple",
    "description": "The Pataleshwar Cave Temple, carved in the 8th century, is an ancient rock-cut shrine dedicated to Lord Shiva. Massive stone pillars, a sanctum, and a Nandi mandapa highlight its architecture. Despite being in the city center, it offers peace and meditation. Evening chants add to its spiritual aura. History lovers admire its craftsmanship and simplicity. Pataleshwar Cave Temple is Pune’s hidden spiritual heritage gem."
  },
  {
    "title": "Raja Dinkar Kelkar Museum",
    "description": "The Raja Dinkar Kelkar Museum is a cultural treasure housing over 20,000 artifacts collected by Dr. Dinkar Kelkar. Exhibits include ornaments, sculptures, musical instruments, and everyday antiques. A highlight is the recreated Mastani Mahal, reflecting Maratha romance and history. Students and tourists find the museum highly educational. It preserves centuries of Indian traditions in one place. Raja Dinkar Kelkar Museum is Pune’s proud showcase of culture and art."
  },
  {
    "title": "Parvati Hill and Temple",
    "description": "Parvati Hill, one of Pune’s oldest landmarks, offers panoramic views of the city. The hilltop temple complex is dedicated to Lord Shiva and Goddess Parvati, built during the Peshwa era. Smaller shrines and a museum nearby add cultural depth. Pilgrims climb 103 steps to reach the temple, blending devotion with scenic charm. Sunrise and sunset views here are captivating. Parvati Hill is Pune’s sacred and scenic retreat."
  },
  {
    "title": "Osho Ashram",
    "description": "The Osho International Meditation Resort in Koregaon Park is Pune’s global hub for wellness and spirituality. Spread across serene gardens, it attracts seekers from around the world. Meditation sessions, yoga practices, and workshops on personal growth are conducted here. Its Zen gardens and tranquil halls enhance the experience. Beyond spirituality, it is also a rejuvenation retreat. Osho Ashram is Pune’s international destination for peace and mindfulness."
  },
  {
    "title": "Pu La Deshpande Garden",
    "description": "Pu La Deshpande Garden, also known as the Okayama Friendship Garden, is Pune’s largest landscaped park. Inspired by Japan’s Korakuen Garden, it features streams, bridges, and manicured lawns. Families enjoy picnics, photography, and peaceful walks here. Seasonal flowers and greenery add vibrant charm. It also symbolizes Indo-Japanese friendship. Pu La Deshpande Garden is Pune’s green paradise of tranquility."
  },
  {
    "title": "Khadakwasla Dam",
    "description": "Khadakwasla Dam, built on the Mutha River, is a popular weekend retreat near Pune. It supplies water to the city while offering scenic backdrops of hills and flowing waters. During monsoon, the overflowing dam creates a mesmerizing sight. Families gather here for roasted corn and tea at roadside stalls. It also serves as the gateway to Sinhagad Fort. Khadakwasla Dam is Pune’s refreshing natural escape."
  }
],


     "services": [
    {
      "name": "Online Taxi Booking Pune",
      "description": "Experience the convenience of booking your taxi online in Pune through our easy-to-use platform. Whether you need a local ride, airport transfer, or outstation trip, our online booking service allows you to select your preferred vehicle type, schedule your trip, and receive instant confirmation. Benefit from transparent pricing, secure payment options, and 24/7 customer support to make your travel planning effortless and reliable."
    },
    {
      "name": "Pune Cab App",
      "description": "Download the Pune Cab App for seamless ride-hailing anytime, anywhere within the city. The app offers real-time vehicle tracking, upfront fare estimates, and multiple payment methods including digital wallets. With user-friendly features and driver ratings, the Pune Cab App enhances safety and convenience for daily commuters, tourists, and business travelers alike."
    },
    {
      "name": "Book Cab Online Pune",
      "description": "Quickly book a cab online in Pune using our secure platform designed for hassle-free travel arrangements. Choose from a variety of vehicle options such as sedans, SUVs, and mini-cabs, and customize your trip details including pickup time and location. Instant confirmation and easy cancellation policies ensure a flexible and user-friendly experience."
    },
    {
      "name": "24×7 Online Cab Service",
      "description": "Our 24×7 online cab service in Pune guarantees availability at all hours, catering to early morning flights, late-night rides, and emergency travel needs. The online platform ensures rapid response times with access to a large fleet of drivers ready to provide safe and punctual transportation whenever you need it."
    },
    {
      "name": "Instant Cab Booking App Pune",
      "description": "Get a cab instantly with the booking app designed specifically for Pune commuters. With features like real-time driver assignment, GPS tracking, and fare transparency, this app eliminates waiting and uncertainty. It’s perfect for spontaneous travel plans or urgent rides, ensuring quick, reliable, and secure taxi bookings at your fingertips."
    },
    {
      "name": "Affordable Online Cab Pune",
      "description": "Choose from a wide range of affordable online cab options in Pune that balance cost-effectiveness with quality service. These cabs cater to budget-conscious travelers without compromising on safety, punctuality, or vehicle condition. Easily compare fares, select budget-friendly rides, and book online with confidence and convenience."
    },
    {
      "name": "Sedan/SUV Online Booking Pune",
      "description": "Book your preferred sedan or SUV online in Pune for tailored travel experiences. Sedans offer comfort and fuel efficiency for solo travelers or small families, while SUVs provide spacious interiors and enhanced ride quality for larger groups or luggage-heavy trips. Our online platform lets you select the perfect vehicle type to suit your travel requirements."
    },
    {
      "name": "Pune City Cab App",
      "description": "Navigate Pune effortlessly with the Pune City Cab App, designed to provide quick access to city taxis, mini cabs, and auto rickshaws. The app includes features like route optimization, fare estimates, and driver ratings, helping you make informed decisions for daily commutes, sightseeing, or shopping trips within the city."
    },
    {
      "name": "Outstation Cab App Pune",
      "description": "Plan your outstation trips conveniently using the Outstation Cab App in Pune. Select your destination, vehicle type, and trip duration, then receive instant quotes and driver details. The app supports both round-trip and one-way bookings, with options for AC and non-AC vehicles, making long-distance travel comfortable and easy."
    },
    {
      "name": "AC Cab Booking App Pune",
      "description": "Stay cool on Pune’s roads by booking AC cabs through our dedicated app. Perfect for hot weather and longer journeys, the app allows you to filter for air-conditioned vehicles, ensuring a refreshing and comfortable ride. Enjoy hassle-free bookings with real-time tracking and prompt driver assignments."
    },
    {
      "name": "Family Cab Online Pune",
      "description": "Book family-friendly cabs online in Pune, offering spacious vehicles equipped with safety features and comfortable seating. Ideal for outings, airport transfers, and group travel, this service ensures your family rides together with ease and convenience. The online platform provides flexible scheduling and driver assistance to accommodate family needs."
    },
    {
      "name": "Corporate Cab App Pune",
      "description": "Manage corporate travel efficiently with the Corporate Cab App in Pune, designed for business professionals requiring punctual, comfortable, and discreet transportation. Features include centralized billing, ride scheduling, and priority support. Choose from luxury sedans, SUVs, and chauffeur services tailored for meetings, events, and client visits."
    },
    {
      "name": "Fast Online Taxi Pune",
      "description": "Book fast and reliable online taxis in Pune that prioritize quick pickups and direct routes to your destination. Ideal for urgent travel needs or tight schedules, these taxis are dispatched promptly through our online platform or app, backed by experienced drivers and GPS-enabled navigation for efficient and timely rides."
    }
  ],
  "tableData": [
    ["Online Taxi Booking Pune", "Pune Cab App"],
    ["Book Cab Online Pune", "24×7 Online Cab Service"],
    ["Instant Cab Booking App Pune", "Affordable Online Cab Pune"],
    ["Sedan/SUV Online Booking Pune", "Pune City Cab App"],
    ["Outstation Cab App Pune", "AC Cab Booking App Pune"],
    ["Family Cab Online Pune", "Corporate Cab App Pune"],
    ["Fast Online Taxi Pune"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune Online Cab Booking",
    "WhyChoosedescription": "Vaishnavi Travels offers seamless and convenient online cab booking services in Pune, making your travel planning hassle-free."
  },
  {
    "WhyChooseheading": "Easy and Quick Booking Process",
    "WhyChoosedescription": "Book your cab online in just a few clicks through our user-friendly website or app."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from Swift Dzire, Ertiga, Innova, Urbania, and Tempo Traveller according to your travel needs."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Our fleet is regularly serviced and sanitized to ensure your safety and comfort."
  },
  {
    "WhyChooseheading": "Experienced Drivers and Professional Service",
    "WhyChoosedescription": "Our drivers are trained, courteous, and familiar with all Pune routes to provide a smooth travel experience."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "We offer all-inclusive pricing with no hidden charges, covering fuel, tolls, and driver allowances."
  },
  {
    "WhyChooseheading": "Flexible Pickup and Drop-off Locations",
    "WhyChoosedescription": "Get door-to-door service from anywhere in Pune at your convenience."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Hassle-Free Assistance",
    "WhyChoosedescription": "Our dedicated support team is available round-the-clock to help with bookings and travel inquiries."
  }
]




















  }




const faqData = [
  [
    {
      question: 'Can I book a cab online with Vaishnavi Travels in Pune?',
      answer: 'Yes, Vaishnavi Travels offers a simple and hassle-free online cab booking system through our website and WhatsApp. You can choose your preferred vehicle, pickup time, and destination in just a few clicks.',
    },
    {
      question: 'What details do I need to provide for online cab booking?',
      answer: 'You’ll need to provide your pickup and drop locations, date & time of travel, preferred vehicle type, and contact information. For outstation trips, we may also ask for return details.',
    },
    {
      question: 'Is it safe to book a cab online with Vaishnavi Travels?',
      answer: 'Absolutely! We use secure booking channels and never share your data. All our drivers are verified, and you receive confirmation with trip details before the ride.',
    },
    {
      question: 'What types of cabs can I book online from Pune?',
      answer: 'Our online booking portal allows you to book Swift Dzire, Ertiga, Innova, and Tempo Travellers for local, airport, and outstation trips based on your group size and travel need.',
    },
    {
      question: 'How early should I book a cab online for my Pune trip?',
      answer: 'It’s best to book at least 12–24 hours in advance, especially during weekends or festival seasons. Last-minute bookings are also accepted based on availability.',
    },
    {
      question: 'Can I modify or cancel an online cab booking?',
      answer: 'Yes, bookings can be modified or canceled easily by contacting our customer support. We have a flexible cancellation policy with no hidden charges.',
    },
    {
      question: 'Is doorstep pickup available for online cab bookings?',
      answer: 'Yes, we offer 100% doorstep pickup and drop-off anywhere in Pune and nearby areas. You’ll receive driver and vehicle details before your trip.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Rohit Pawar",
    position: "IT Professional",
    feedback:
      "Booked a cab online from Vaishnavi Travels for an urgent airport transfer. The process was quick, the cab arrived on time, and the fare was very reasonable. Highly dependable!",
    rating: 5,
  },
  {
    name: "Ms. Aarti Nimbalkar",
    position: "Frequent Traveler",
    feedback:
      "I love how easy it is to book online with Vaishnavi Travels. No app needed — just sent a message on WhatsApp and my cab was confirmed. Smooth experience every time.",
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

const puneOnlineCabBookingSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Pune Online Cab Booking",
  "description": "Book cabs online in Pune with instant booking apps offering 24x7 service. Affordable sedan and SUV taxis for city rides, outstation trips, family travel, and corporate bookings.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "url": "https://vaishnavitravel.com/pune-online-cab-booking"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pune"
  },
  "serviceType": [
    "Online Taxi Booking",
    "Instant Cab Booking",
    "Sedan and SUV Cabs",
    "24x7 Cab Service",
    "Outstation Cab Booking",
    "Family Cab Service",
    "Corporate Cab Booking"
  ],
  "availability": "https://schema.org/InStock"
};




  return (
    <div>


<Helmet>
  <title>Online Cab Booking in Pune | 24x7 Instant Taxi App Service</title>
  <meta
    name="description"
    content="Book cabs online in Pune with instant booking apps offering 24x7 service. Affordable sedan and SUV taxis for city rides, outstation trips, family travel, and corporate bookings."
  />
  <meta
    name="keywords"
    content="Online Taxi Booking Pune, Pune Cab App, Book Cab Online Pune, 24×7 Online Cab Service, Instant Cab Booking App Pune, Affordable Online Cab Pune, Sedan/SUV Online Booking Pune, Pune City Cab App, Outstation Cab App Pune, AC Cab Booking App Pune, Family Cab Online Pune, Corporate Cab App Pune, Fast Online Taxi Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneOnlineCabBookingSchema)}
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
              <img src='/images/keyword/65.jpg' alt='img'  className='img-fluid'/>
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

export default Puneonlinecabbooking;