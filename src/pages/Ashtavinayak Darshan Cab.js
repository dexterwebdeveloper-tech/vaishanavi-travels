
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Ashtavinayakdarshancabs() {



  const cardData =
  {
    keyword: '  Ashtavinayak Darshan Cab',
    heading: 'Vaishnavi Travels: Ashtavinayak Darshan Cab',
    headingDescription: 'Vaishnavi Travels provides convenient and affordable Ashtavinayak Darshan Cab service, specially designed for pilgrims and families seeking a smooth spiritual journey. Our cabs are well-maintained with spacious seating, strong air-conditioning, and ample luggage space, ensuring a comfortable ride across all eight sacred Ashtavinayak temples. With professional chauffeurs, timely pickups, and flexible booking options, we make your pilgrimage stress-free and reliable. Whether it’s a one-day yatra or a planned multi-day trip, Vaishnavi Travels guarantees safe, dependable, and comfortable cab services for the complete Ashtavinayak Darshan tour.',

    top: 'Top Places to Visit in Ashtavinayak with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Shri Mayureshwar Temple, Morgaon",
    "description": "Shri Mayureshwar Temple in Morgaon is the first and most important stop of the Ashtavinayak Yatra. Dedicated to Lord Ganesha seated on a peacock, the temple is built in black stone with a unique Mughal-style architecture. It is believed that visiting here completes all pilgrimages. Devotees start and end the yatra at this temple, symbolizing completeness. The spiritual energy and vibrant rituals inspire deep devotion. Morgaon is the heart of the Ashtavinayak journey."
  },
  {
    "title": "Shri Siddhivinayak Temple, Siddhatek",
    "description": "Located on the banks of the Bhima River, Siddhatek is home to Shri Siddhivinayak Temple, believed to bless devotees with spiritual strength and fulfillment of wishes. The temple is surrounded by scenic hills and requires crossing the river for darshan, making it a serene experience. Legends say Lord Vishnu himself worshipped Ganesha here. Pilgrims visit in large numbers during Angarki Chaturthi. Siddhatek is Ashtavinayak’s sacred shrine of power and peace."
  },
  {
    "title": "Shri Ballaleshwar Temple, Pali",
    "description": "Shri Ballaleshwar Temple in Pali is unique as it is the only temple named after a devotee of Lord Ganesha, Ballal. The temple has a distinctive architecture resembling a palace with golden domes. Its idol has diamond-studded eyes and a naturally formed background. Devotees believe sincere prayers here remove hardships and fulfill desires. Festivals like Ganesh Chaturthi are celebrated grandly. Ballaleshwar Temple is Ashtavinayak’s shrine of devotion and blessings."
  },
  {
    "title": "Shri Varadvinayak Temple, Mahad",
    "description": "Shri Varadvinayak Temple in Mahad is known as the giver of boons (Varad). It is one of the few temples where devotees are allowed to touch the idol and offer garlands directly. Surrounded by a peaceful pond and lush greenery, it is an ideal place for meditation. The temple’s simplicity enhances its divine charm. Thousands of devotees visit especially on Angarki Sankashti Chaturthi. Varadvinayak is Ashtavinayak’s temple of blessings and peace."
  },
  {
    "title": "Shri Chintamani Temple, Theur",
    "description": "Shri Chintamani Temple in Theur is famous for removing worries and granting peace of mind. The temple is associated with the legend of Sage Kapila and the Chintamani gem. It has a spacious courtyard with beautiful stone carvings and a sacred lake nearby. Devotees believe darshan here grants mental clarity and prosperity. The temple bustles with activity during Ganesh Jayanti and Chaturthi. Theur’s Chintamani Temple is Ashtavinayak’s shrine of calmness and wisdom."
  },
  {
    "title": "Shri Girijatmaj Temple, Lenyadri",
    "description": "Located amidst caves in the Lenyadri hills, Shri Girijatmaj Temple is unique as it is carved entirely out of a single rock. Devotees climb 307 steps to reach the temple, which is also a Buddhist cave complex. The temple is associated with Goddess Parvati’s penance and Ganesha’s childhood. The surrounding hills and valleys create a serene atmosphere. It is both a pilgrimage and trekking destination. Lenyadri is Ashtavinayak’s temple of devotion and endurance."
  },
  {
    "title": "Shri Vighnahar Temple, Ozar",
    "description": "Shri Vighnahar Temple in Ozar is dedicated to Ganesha as the remover of obstacles. The temple is fortified with stone walls and has a beautiful courtyard and deepmalas (lamp towers). It is known for grand celebrations of Ganesh Jayanti. The idol is adorned with precious jewels and armor. Pilgrims believe darshan here brings success and removes difficulties. Ozar’s Vighnahar Temple is Ashtavinayak’s shrine of protection and victory."
  },
  {
    "title": "Shri Mahaganapati Temple, Ranjangaon",
    "description": "Shri Mahaganapati Temple in Ranjangaon is the final stop of the Ashtavinayak Yatra. Dedicated to Ganesha in his powerful Mahaganapati form with 10 trunks and 20 arms, it symbolizes ultimate strength and wisdom. The temple was expanded by Madhavrao Peshwa and has a majestic shikhara. Pilgrims end their journey here with gratitude and fulfillment. Festivals see grand celebrations and huge gatherings. Ranjangaon is Ashtavinayak’s temple of power and completion."
  }
],


     "services": [
    {
      "name": "Pune to Ashtavinayak Cab Booking",
      "description": "Book trusted and comfortable cab services from Pune to the sacred Ashtavinayak temples. Our cabs are ideal for solo travelers, families, and groups seeking a spiritual journey across all eight revered Ganpati shrines. Enjoy well-maintained vehicles, professional drivers, and flexible scheduling options that allow you to complete your temple yatra smoothly and respectfully."
    },
    {
      "name": "AC Cab for Temple Darshan",
      "description": "Travel in cool comfort with our AC cab service for Ashtavinayak Darshan. Perfect for long temple circuits, our air-conditioned vehicles ensure a peaceful, comfortable journey as you visit all eight Ganesh temples across Maharashtra. Stay refreshed and relaxed during your spiritual tour."
    },
    {
      "name": "Round Trip Ashtavinayak Taxi",
      "description": "Convenient round trip cab services from Pune covering the entire Ashtavinayak route. This full-day or multi-day package includes pick-up and drop-off in Pune, multiple halts at each temple, and a driver familiar with the sacred route. Ideal for completing the entire yatra in one seamless trip."
    },
    {
      "name": "Budget Ashtavinayak Cab",
      "description": "Affordable cab service from Pune to Ashtavinayak temples designed for pilgrims on a budget. These cost-effective taxis provide reliable, safe transportation while maintaining basic comforts. A perfect option for individuals or small groups who want a spiritual experience without high travel expenses."
    },
    {
      "name": "SUV Temple Tour Cab",
      "description": "Spacious and sturdy SUV cab rentals for your Ashtavinayak temple tour. These vehicles offer ample room for families and groups, extra luggage space, and excellent road handling — making them ideal for the varied terrains along the Ashtavinayak pilgrimage circuit."
    },
    {
      "name": "Family Pilgrimage Cab Pune",
      "description": "Dedicated family cab services from Pune for the Ashtavinayak Darshan, offering clean, comfortable, and safe vehicles. Our courteous drivers assist with temple timings and stops, allowing families to travel together in peace and spiritual harmony on this sacred journey."
    },
    {
      "name": "Corporate Ashtavinayak Cab",
      "description": "Professional cab services for corporate groups looking to undertake the Ashtavinayak pilgrimage. Ideal for spiritual retreats, group bookings, or employee tours — our corporate package includes flexible scheduling, premium vehicles, and courteous drivers for a meaningful team experience."
    },
    {
      "name": "Online Darshan Taxi Booking",
      "description": "Easily book your Ashtavinayak Darshan cab online with instant confirmation and transparent fare estimates. Our platform offers multiple cab types, route customizations, and 24×7 customer support to ensure a smooth and stress-free booking experience for your pilgrimage."
    },
    {
      "name": "One Way Temple Cab",
      "description": "Flexible one-way cab service for travelers visiting selected Ashtavinayak temples without returning to Pune. Ideal for pilgrims who plan to continue their journey elsewhere or stay overnight near a specific temple destination. Choose your preferred drop-off point with ease."
    },
    {
      "name": "Group Darshan Taxi Service",
      "description": "Specialized cab service for large groups undertaking the Ashtavinayak Yatra. These vehicles are equipped for group travel, with ample seating and luggage space, experienced drivers, and customizable routes for a coordinated and comfortable temple tour experience."
    },
    {
      "name": "Cab with Driver Ashtavinayak",
      "description": "Hire a cab with an experienced and respectful driver familiar with the Ashtavinayak route and temple customs. This service ensures you can focus on your spiritual journey while the driver handles navigation, parking, and temple timings with care and professionalism."
    },
    {
      "name": "Multi Temple Cab Pune",
      "description": "Plan your multi-temple pilgrimage with our customized cab service from Pune covering Ashtavinayak and other regional temples. We help you optimize routes and schedules while offering a comfortable travel experience across multiple sacred destinations."
    },
    {
      "name": "Luxury Pilgrimage Cab",
      "description": "Experience the Ashtavinayak Darshan in premium comfort with our luxury cab options. Featuring plush interiors, top-tier amenities, and professional chauffeurs, these cabs are ideal for senior citizens, VIP guests, or anyone who desires a spiritual journey in style."
    }
  ],
  "tableData": [
    ["Pune to Ashtavinayak Cab Booking", "AC Cab for Temple Darshan"],
    ["Round Trip Ashtavinayak Taxi", "Budget Ashtavinayak Cab"],
    ["SUV Temple Tour Cab", "Family Pilgrimage Cab Pune"],
    ["Corporate Ashtavinayak Cab", "Online Darshan Taxi Booking"],
    ["One Way Temple Cab", "Group Darshan Taxi Service"],
    ["Cab with Driver Ashtavinayak", "Multi Temple Cab Pune"],
    ["Luxury Pilgrimage Cab"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Ashtavinayak Darshan Cab",
    "WhyChoosedescription": "Vaishnavi Travels offers dedicated cab services for Ashtavinayak Darshan, covering all 8 revered Ganpati temples in Maharashtra comfortably and efficiently."
  },
  {
    "WhyChooseheading": "Customizable Darshan Packages",
    "WhyChoosedescription": "Choose from 1-day, 2-day, or multi-day packages based on your schedule and temple visit preferences."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Select from Swift Dzire, Ertiga, Innova, Urbania, and Tempo Traveller as per your group size and comfort requirements."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Our vehicles are regularly serviced and thoroughly sanitized to ensure hygiene and safety during your spiritual journey."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Temple Route Knowledge",
    "WhyChoosedescription": "Our drivers are familiar with the Ashtavinayak route and temple timings to help you complete the darshan smoothly."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Enjoy fixed, all-inclusive pricing with no hidden costs – covering tolls, fuel, parking, and driver charges."
  },
  {
    "WhyChooseheading": "Pickup and Drop-off from Any Location in Pune",
    "WhyChoosedescription": "We offer door-to-door service from your home, hotel, or desired location in Pune for maximum convenience."
  },
  {
    "WhyChooseheading": "24/7 Support for Booking and Trip Assistance",
    "WhyChoosedescription": "Our customer support team is available round-the-clock to help you with bookings, route planning, and travel queries."
  }
]
























  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide cab services for Ashtavinayak Darshan?',
      answer: 'Yes, Vaishnavi Travels offers comfortable and reliable cab services for Ashtavinayak Darshan, covering all eight sacred Ganapati temples in Maharashtra.',
    },
    {
      question: 'What types of vehicles are available for Ashtavinayak Darshan cab service?',
      answer: 'We provide a range of vehicles including Swift Dzire, Ertiga, Innova, and Tempo Travellers to accommodate solo travelers, families, and larger groups.',
    },
    {
      question: 'What is the typical fare for an Ashtavinayak Darshan cab with Vaishnavi Travels?',
      answer: 'Fares generally start from ₹6,000 for a one-day trip in a sedan. Rates vary depending on vehicle type, trip duration, and whether it is a single-day or multi-day package.',
    },
    {
      question: 'Can I book a round trip or multi-day package for Ashtavinayak Darshan?',
      answer: 'Yes, we offer flexible packages for single-day or multi-day Ashtavinayak tours with customizable itineraries and transparent pricing.',
    },
    {
      question: 'How far in advance should I book the Ashtavinayak Darshan cab?',
      answer: 'It is recommended to book at least 2-3 days in advance, especially during festival seasons, weekends, and holidays to ensure availability.',
    },
    {
      question: 'Is doorstep pickup and drop-off available for Ashtavinayak Darshan cabs?',
      answer: 'Yes, Vaishnavi Travels provides convenient doorstep pickup and drop-off services anywhere in Pune and nearby locations.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Manoj Kulkarni",
    position: "Devotee",
    feedback:
      "Vaishnavi Travels made our Ashtavinayak Darshan memorable and hassle-free. The driver was knowledgeable about the temples and the journey was comfortable throughout.",
    rating: 5,
  },
  {
    name: "Ms. Sneha Patil",
    position: "Pilgrim",
    feedback:
      "Excellent service by Vaishnavi Travels for Ashtavinayak Darshan. Timely pickup, clean vehicle, and the driver helped us with temple timings and routes. Highly recommended!",
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


const ashtavinayakDarshanCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Ashtavinayak Darshan Cab",
  "description": "Book Pune to Ashtavinayak cab for temple darshan with AC, budget, SUV, and luxury options. Round trip, one way, group bookings, and corporate travel available.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "url": "https://vaishnavitravel.com/ashtavinayak-darshan-cab"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Pune"
    },
    {
      "@type": "Place",
      "name": "Ashtavinayak Temple Circuit"
    }
  ],
  "serviceType": [
    "Pune to Ashtavinayak Cab Booking",
    "AC Cab for Temple Darshan",
    "Round Trip Ashtavinayak Taxi",
    "Budget Ashtavinayak Cab",
    "SUV Temple Tour Cab",
    "Family Pilgrimage Cab Pune",
    "Corporate Ashtavinayak Cab",
    "Online Darshan Taxi Booking",
    "One Way Temple Cab",
    "Group Darshan Taxi Service",
    "Cab with Driver Ashtavinayak",
    "Multi Temple Cab Pune",
    "Luxury Pilgrimage Cab"
  ],
  "availability": "https://schema.org/InStock"
};



  return (
    <div>

<Helmet>
  <title>Ashtavinayak Darshan Cab | Pune to Ashtavinayak Taxi Booking</title>
  <meta
    name="description"
    content="Book Pune to Ashtavinayak cab for temple darshan with AC, budget, SUV, and luxury options. Round trip, one way, group bookings, and corporate travel available."
  />
  <meta
    name="keywords"
    content="Pune to Ashtavinayak Cab Booking, AC Cab for Temple Darshan, Round Trip Ashtavinayak Taxi, Budget Ashtavinayak Cab, SUV Temple Tour Cab, Family Pilgrimage Cab Pune, Corporate Ashtavinayak Cab, Online Darshan Taxi Booking, One Way Temple Cab, Group Darshan Taxi Service, Cab with Driver Ashtavinayak, Multi Temple Cab Pune, Luxury Pilgrimage Cab"
  />
  <script type="application/ld+json">
    {JSON.stringify(ashtavinayakDarshanCabSchema)}
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
              <img src='/images/keyword/70.jpg' alt='img'  className='img-fluid'/>
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

export default Ashtavinayakdarshancabs;