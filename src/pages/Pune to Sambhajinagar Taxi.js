
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Punetosambhajinagartaxi() {



  const cardData =
  {
    keyword: ' Pune to Sambhajinagar Taxi',
    heading: 'Vaishnavi Travels: Pune to Sambhajinagar Taxi',
    headingDescription: 'Vaishnavi Travels offers reliable and budget-friendly Pune to Sambhajinagar Taxi service, ideal for family tours, business trips, pilgrimages, and outstation travel. Our taxis are well-maintained with comfortable seating, strong air-conditioning, and ample luggage space, ensuring a smooth and safe journey on the Pune–Sambhajinagar route. With professional chauffeurs, punctual pickups, and flexible booking options, we make long-distance travel convenient and stress-free. Whether it’s a visit to Ajanta–Ellora caves, Bibi Ka Maqbara, or a business meeting, Vaishnavi Travels guarantees dependable, comfortable, and hassle-free taxi services from Pune to Sambhajinagar.',

    top: 'Top Places to Visit in Sambhajinagar with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Ajanta Caves",
    "description": "The Ajanta Caves, a UNESCO World Heritage Site near Sambhajinagar, date back to the 2nd century BCE. These 30 Buddhist caves feature intricate frescoes, sculptures, and paintings depicting the life of Lord Buddha. The murals are considered masterpieces of ancient Indian art, retaining their brilliance even today. Surrounded by lush hills, the caves provide a spiritual and scenic retreat. Tourists, historians, and art lovers alike are captivated by their beauty. Ajanta Caves are Sambhajinagar’s timeless treasure of art and heritage."
  },
  {
    "title": "Ellora Caves",
    "description": "Ellora Caves, another UNESCO World Heritage Site near Sambhajinagar, house 34 rock-cut caves representing Hindu, Buddhist, and Jain traditions. The highlight is the Kailasa Temple, carved from a single monolithic rock and dedicated to Lord Shiva. The scale and detailing of this temple make it one of the greatest architectural wonders of the world. Pilgrims and history lovers admire its religious harmony and artistry. The caves are surrounded by natural beauty, making the visit even more memorable. Ellora is Sambhajinagar’s crown jewel of devotion and craftsmanship."
  },
  {
    "title": "Bibi Ka Maqbara",
    "description": "Bibi Ka Maqbara, often called the ‘Taj of the Deccan,’ was built in 1668 by Azam Shah in memory of his mother, Dilras Banu Begum. Its white marble dome and Mughal gardens resemble the Taj Mahal, though with Deccan influences. The monument looks spectacular under moonlight, attracting tourists and photographers. The gardens and pathways create a peaceful atmosphere for evening walks. It is the most photographed monument of Sambhajinagar. Bibi Ka Maqbara is the city’s Mughal-era masterpiece of love and architecture."
  },
  {
    "title": "Daulatabad Fort",
    "description": "Daulatabad Fort, located 15 km from Sambhajinagar, is a conical hill fortress renowned for its impregnable defense systems. Built in the 12th century, it was briefly the capital of the Tughlaq dynasty under Muhammad bin Tughlaq. The fort has moats, false gates, and rock-cut passages that fascinate visitors. Its Chand Minar, bastions, and hilltop views are architectural highlights. Trekkers enjoy exploring its rugged pathways. Daulatabad Fort is Sambhajinagar’s proud sentinel of history and strength."
  },
  {
    "title": "Aurangabad Caves",
    "description": "Aurangabad Caves, carved between the 6th and 8th centuries, are a group of 12 rock-cut Buddhist shrines located on the city’s outskirts. They feature Chaitya halls, Viharas, and intricate carvings of Buddha and Bodhisattvas. The caves provide panoramic views of Sambhajinagar city and Bibi Ka Maqbara. Less crowded than Ajanta and Ellora, they offer a peaceful exploration experience. The artistry reflects India’s ancient craftsmanship. Aurangabad Caves are Sambhajinagar’s hidden heritage gem."
  },
  {
    "title": "Panchakki",
    "description": "Panchakki, or the 17th-century water mill, is a unique engineering marvel built to grind grains for pilgrims and soldiers. Its underground water channel, sourced from a spring 6 km away, still astonishes visitors. The site also includes a garden, mosque, and dargah, adding cultural depth. Tourists enjoy its calm and historical ambiance. It showcases Mughal ingenuity in water management. Panchakki is Sambhajinagar’s fusion of science, history, and devotion."
  },
  {
    "title": "Grishneshwar Jyotirlinga",
    "description": "Grishneshwar Temple, located near Ellora, is one of the 12 Jyotirlingas of Lord Shiva. Rebuilt in the 18th century by Ahilyabai Holkar, the temple features red-stone carvings and traditional Hemadpanthi architecture. Devotees believe that worship here grants immense blessings and spiritual peace. The temple is especially crowded during Mahashivratri. Its proximity to Ellora makes it a popular dual pilgrimage and heritage visit. Grishneshwar is Sambhajinagar’s divine spiritual jewel."
  },
  {
    "title": "Salim Ali Lake and Bird Sanctuary",
    "description": "Salim Ali Lake and Bird Sanctuary, named after the famous ornithologist, is a green retreat within Sambhajinagar. The lake attracts migratory birds like flamingos, cranes, and herons, especially in winter. Birdwatchers and families enjoy peaceful walks and boating around the lake. Once part of the Mughal gardens, it combines history with nature. The sanctuary supports eco-tourism and education. Salim Ali Bird Sanctuary is Sambhajinagar’s refreshing natural escape."
  },
  {
    "title": "Himayat Bagh",
    "description": "Himayat Bagh is a 17th-century Mughal garden spread over 300 acres, now housing a fruit research station. Its fountains, pathways, and lush greenery make it perfect for peaceful strolls. The garden reflects Mughal-era landscaping combined with modern horticulture. Tourists enjoy its tranquil environment away from the busy city. Seasonal fruit trees and nurseries add charm to the visit. Himayat Bagh is Sambhajinagar’s heritage garden of relaxation."
  },
  {
    "title": "Goga Baba Hill",
    "description": "Goga Baba Hill is a popular trekking and viewpoint spot within Sambhajinagar. A small temple sits atop the hill, offering panoramic views of the city below. Locals and tourists visit for morning walks, fitness, and sunset views. During monsoon, the lush greenery and mist create breathtaking scenery. The climb is simple and enjoyable for families. Goga Baba Hill is Sambhajinagar’s peaceful escape of spirituality and nature."
  }
],


     "services": [
    {
      "name": "Pune to Sambhajinagar Cab Booking",
      "description": "Book a dependable cab from Pune to Sambhajinagar for your travel needs. Our service guarantees timely pickups, comfortable seating, and experienced drivers who ensure a safe and smooth journey. Ideal for business trips, leisure travel, and pilgrimages, our cabs cater to solo travelers and groups alike."
    },
    {
      "name": "AC Cab Pune Sambhajinagar",
      "description": "Travel in comfort with our air-conditioned cabs from Pune to Sambhajinagar. Perfect for hot weather and long journeys, these vehicles are equipped with powerful AC systems, plush interiors, and ergonomic seating to keep passengers cool and relaxed throughout the trip."
    },
    {
      "name": "Round Trip Sambhajinagar Taxi",
      "description": "Choose our round-trip taxi service for seamless travel from Pune to Sambhajinagar and back. Flexible scheduling, driver waiting options, and well-planned routes make this service ideal for day trips, business meetings, and family outings without worrying about return transport."
    },
    {
      "name": "One Way Cab Sambhajinagar",
      "description": "Our one-way taxi service from Pune to Sambhajinagar offers convenience for travelers with onward plans or multi-city itineraries. Enjoy hassle-free travel with clean, well-maintained vehicles and professional drivers familiar with all routes."
    },
    {
      "name": "Budget Taxi Pune to Sambhajinagar",
      "description": "Affordable and reliable budget taxi services from Pune to Sambhajinagar. These non-AC or basic AC vehicles provide a cost-effective option without compromising on safety, punctuality, or driver professionalism."
    },
    {
      "name": "SUV Cab Sambhajinagar Pune",
      "description": "Hire a spacious and robust SUV cab for Pune to Sambhajinagar trips, perfect for families or groups needing extra space and luggage capacity. These SUVs are equipped for rough roads and offer enhanced comfort with ample legroom and cushioned seats."
    },
    {
      "name": "Corporate Cab to Sambhajinagar",
      "description": "Professional corporate cab services from Pune to Sambhajinagar, designed for business travelers requiring punctuality and comfort. Our fleet includes premium sedans and SUVs, with clean interiors, Wi-Fi options, and courteous drivers to ensure productive travel."
    },
    {
      "name": "Family Taxi Pune Sambhajinagar",
      "description": "Plan your family trips with our dedicated taxi service from Pune to Sambhajinagar. Our family-friendly vehicles provide safety features, extra luggage space, and a comfortable cabin environment suitable for travelers of all ages."
    },
    {
      "name": "Online Sambhajinagar Cab Service",
      "description": "Conveniently book your Pune to Sambhajinagar cab online with instant confirmations, transparent pricing, and multiple vehicle options. Enjoy 24/7 customer support and flexible cancellation policies to make your booking worry-free."
    },
    {
      "name": "Sambhajinagar Road Trip Cab",
      "description": "Experience a scenic road trip from Pune to Sambhajinagar with our specially curated taxi service. Enjoy stops at popular tourist spots, roadside eateries, and photo points while traveling in a comfortable, well-equipped vehicle."
    },
    {
      "name": "Sambhajinagar Driving Cab Booking",
      "description": "Book a taxi with experienced drivers familiar with the Pune-Sambhajinagar route, ensuring safe and efficient travel. Drivers adhere to traffic regulations and provide courteous service to enhance your overall journey experience."
    },
    {
      "name": "Taxi with Driver Sambhajinagar",
      "description": "Hire a taxi with a professional driver for your Sambhajinagar trips, allowing you to relax and enjoy the ride without the stress of navigation. Our drivers are trained for safety, punctuality, and customer service excellence."
    },
    {
      "name": "Taxi Fare Pune Sambhajinagar",
      "description": "Get accurate fare estimates for Pune to Sambhajinagar taxi rides with transparent pricing, including distance, vehicle type, driver allowances, and taxes. Helps you budget your travel effectively and choose the right cab service."
    }
  ],
  "tableData": [
    ["Pune to Sambhajinagar Cab Booking", "AC Cab Pune Sambhajinagar"],
    ["Round Trip Sambhajinagar Taxi", "One Way Cab Sambhajinagar"],
    ["Budget Taxi Pune to Sambhajinagar", "SUV Cab Sambhajinagar Pune"],
    ["Corporate Cab to Sambhajinagar", "Family Taxi Pune Sambhajinagar"],
    ["Online Sambhajinagar Cab Service", "Sambhajinagar Road Trip Cab"],
    ["Sambhajinagar Driving Cab Booking", "Taxi with Driver Sambhajinagar"],
    ["Taxi Fare Pune Sambhajinagar"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune to Sambhajinagar Taxi Service",
    "WhyChoosedescription": "Vaishnavi Travels provides dependable and comfortable taxi service from Pune to Sambhajinagar (Aurangabad), ideal for business trips, family travel, and sightseeing."
  },
  {
    "WhyChooseheading": "Wide Range of Cabs to Choose From",
    "WhyChoosedescription": "Select from economy cars like Swift Dzire to spacious options like Ertiga, Innova, or Urbania, based on your group size and comfort preferences."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Vehicles",
    "WhyChoosedescription": "Our fleet is regularly serviced, sanitized, and maintained to ensure safety, cleanliness, and a smooth ride."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our courteous drivers are experienced in long-distance travel and familiar with the Pune–Sambhajinagar route."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Enjoy fixed, all-inclusive fares with no hidden charges — covering fuel, tolls, and driver allowance for both one-way and round trips."
  },
  {
    "WhyChooseheading": "Doorstep Pickup and Drop-off",
    "WhyChoosedescription": "We provide convenient pickup and drop at your home, hotel, or office in Pune and Sambhajinagar."
  },
  {
    "WhyChooseheading": "Ideal for Business, Family, or Heritage Tours",
    "WhyChoosedescription": "Perfect for visiting Ajanta-Ellora Caves, Bibi Ka Maqbara, or for meetings and family visits."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Easy Booking",
    "WhyChoosedescription": "Our team is available round-the-clock to assist with your booking, trip updates, or route queries."
  }
]










  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer taxi services from Pune to Sambhajinagar (Aurangabad)?',
      answer: 'Yes, Vaishnavi Travels provides comfortable and reliable taxi services from Pune to Sambhajinagar (formerly Aurangabad), ideal for business trips, family visits, or sightseeing tours.',
    },
    {
      question: 'What types of taxis are available for the Pune to Sambhajinagar route?',
      answer: 'We offer a variety of vehicles including Swift Dzire, Ertiga, Innova, and Tempo Traveller to suit your group size and travel preferences.',
    },
    {
      question: 'Are the taxis well-maintained and driven by professional drivers?',
      answer: 'Absolutely! Our taxis are regularly maintained and serviced. Each trip is handled by a professional, courteous driver familiar with the Pune–Sambhajinagar route.',
    },
    {
      question: 'What is the taxi fare from Pune to Sambhajinagar?',
      answer: 'Taxi fares for Pune to Sambhajinagar typically start from ₹5,500 for a one-way trip in a sedan. Prices vary depending on the vehicle type, trip duration, and return options.',
    },
    {
      question: 'Can I book a round trip taxi from Pune to Sambhajinagar?',
      answer: 'Yes, round-trip bookings are available with flexible return timing and clear pricing. Multi-day packages are also available for extended stays.',
    },
    {
      question: 'How far in advance should I book a Pune to Sambhajinagar taxi?',
      answer: 'We recommend booking at least 1-2 days in advance to ensure vehicle availability, especially during weekends or festive seasons.',
    },
    {
      question: 'Is doorstep pickup and drop-off available for the Pune to Sambhajinagar taxi service?',
      answer: 'Yes, Vaishnavi Travels offers convenient doorstep pickup and drop-off across Pune and surrounding areas for your comfort and convenience.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Ashok Jadhav",
    position: "Business Traveler",
    feedback:
      "I booked a Pune to Sambhajinagar taxi with Vaishnavi Travels for a client meeting. The car was clean, the driver was punctual, and the entire experience was smooth and professional.",
    rating: 5,
  },
  {
    name: "Ms. Lata Deshmukh",
    position: "Senior Citizen",
    feedback:
      "Vaishnavi Travels made our Pune to Sambhajinagar trip very comfortable. The driver was very polite and helpful throughout the journey. Highly satisfied!",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Sambhajinagar Taxi Service",
  "image": "https://vaishnavitravel.com/assets/images/pune-to-sambhajinagar-cab.jpg",
  "description": "Book AC and Non AC taxis from Pune to Sambhajinagar for one-way and round trips. Reliable SUV and budget taxi services for corporate, family, and group travel.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.6",
    "ratingCount": "95"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1900",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/pune-to-sambhajinagar-taxi"
  }
};


  return (
    <div>

<Helmet>
  <title>Pune to Sambhajinagar Taxi | AC & Non AC Cab Booking</title>
  <meta
    name="description"
    content="Book AC and Non AC taxis from Pune to Sambhajinagar for one-way and round trips. Reliable SUV and budget taxi services for corporate, family, and group travel."
  />
  <meta
    name="keywords"
    content="Pune to Sambhajinagar Cab Booking, AC Cab Pune Sambhajinagar, Round Trip Sambhajinagar Taxi, One Way Cab Sambhajinagar, Budget Taxi Pune to Sambhajinagar, SUV Cab Sambhajinagar Pune, Corporate Cab to Sambhajinagar, Family Taxi Pune Sambhajinagar, Online Sambhajinagar Cab Service, Sambhajinagar Road Trip Cab, Sambhajinagar Driving Cab Booking, Taxi with Driver Sambhajinagar, Taxi Fare Pune Sambhajinagar"
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
              <img src='/images/keyword/53.jpg' alt='img'  className='img-fluid'/>
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

export default Punetosambhajinagartaxi;