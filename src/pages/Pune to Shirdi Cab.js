
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Punetoshirdicab() {



  const cardData =
  {
    keyword: ' Pune to Shirdi Cab',
    heading: 'Vaishnavi Travels: Pune to Shirdi Cab',
    headingDescription: 'Vaishnavi Travels offers dependable and affordable Pune to Shirdi Cab service, specially designed for pilgrims, families, and small groups. Our cabs are well-maintained with comfortable seating, strong air-conditioning, and ample luggage space, ensuring a smooth and peaceful journey on the Pune–Shirdi route. With professional chauffeurs, timely pickups, and flexible booking options, we make your darshan trip convenient and stress-free. Whether it’s a one-day pilgrimage, weekend yatra, or extended stay, Vaishnavi Travels guarantees safe, reliable, and comfortable cab services from Pune to Shirdi.',

    top: 'Top Places to Visit in Shirdi with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Sai Baba Samadhi Mandir",
    "description": "The Sai Baba Samadhi Mandir is the holiest shrine in Shirdi, where the saint’s mortal remains rest. Built with marble and adorned with silver, gold, and intricate carvings, the temple attracts millions of devotees every year. Daily aartis and bhajans create a spiritually uplifting atmosphere. Devotees believe darshan here brings peace, blessings, and miracles. Managed by the Shri Saibaba Sansthan Trust, it also runs charitable activities. Sai Baba Samadhi Mandir is Shirdi’s sacred heart of devotion."
  },
  {
    "title": "Dwarkamai",
    "description": "Dwarkamai is the mosque where Sai Baba spent a major part of his life, blessing and guiding devotees. The eternal dhuni (sacred fire) lit by Baba still burns here, and its ash is considered holy. Pilgrims experience deep peace and humility inside this simple shrine. Sai Baba taught unity of religions here, making it a symbol of harmony. The mosque preserves Baba’s grinding stone and wooden post. Dwarkamai is Shirdi’s living embodiment of Sai’s teachings."
  },
  {
    "title": "Chavadi",
    "description": "Chavadi is the sacred place where Sai Baba used to spend every alternate night during his later years. The temple houses his palkhi, wooden bed, and other belongings. Every Thursday, a grand procession carrying Sai Baba’s portrait is taken from Dwarkamai to Chavadi. Pilgrims feel blessed to witness this traditional ritual continuing even today. The serene aura of Chavadi makes it a special spot for devotees. It is Shirdi’s shrine of memory and devotion."
  },
  {
    "title": "Sai Baba Museum",
    "description": "The Sai Baba Museum, managed by the Shri Saibaba Sansthan Trust, displays Baba’s personal belongings, including clothes, footwear, utensils, and photographs. Visitors gain insight into his simple lifestyle and selfless service. The museum also preserves letters and rare artifacts linked to Sai Baba’s life. Pilgrims find it both educational and devotional. It inspires faith and humility among visitors. The museum is Shirdi’s archive of Sai Baba’s legacy."
  },
  {
    "title": "Khandoba Temple",
    "description": "Khandoba Temple is historically important as it is where Sai Baba was first welcomed to Shirdi by the priest Mhalsapati with the words 'Aao Sai.' Dedicated to Lord Khandoba, the temple is simple yet spiritually significant. Pilgrims visit to pay homage to this divine beginning. Its association with Sai Baba makes it a must-visit site for devotees. The temple’s peaceful aura adds to Shirdi’s sacred circuit. Khandoba Temple is Shirdi’s gateway to Baba’s story."
  },
  {
    "title": "Gurusthan",
    "description": "Gurusthan, meaning 'place of the Guru,' is where Sai Baba was first seen meditating under a neem tree. A small shrine with a shivling and Sai Baba’s portrait now stands here. Devotees believe that lighting incense sticks at this spot cures ailments. The neem tree is considered sacred, and its leaves are distributed as prasad. Pilgrims feel a deep spiritual connection here. Gurusthan is Shirdi’s origin point of Sai Baba’s divine journey."
  },
  {
    "title": "Lendi Baug",
    "description": "Lendi Baug is a garden where Sai Baba used to spend time meditating and watering plants. The sacred Nanda Deep lamp lit by him still burns continuously. The garden has small shrines, fountains, and pathways where devotees find peace. Pilgrims believe the garden reflects Baba’s love for simplicity and nature. It offers a calm atmosphere away from the busy temple. Lendi Baug is Shirdi’s green retreat filled with Baba’s presence."
  },
  {
    "title": "Sai Heritage Village",
    "description": "Sai Heritage Village is a theme park and museum that recreates important moments from Sai Baba’s life. Life-size statues depict Baba blessing devotees, cooking, and healing the sick. The village also offers gardens, rides, and picnic spots, making it family-friendly. It is both devotional and educational, especially for children. Visitors enjoy seeing Shirdi as it was during Sai Baba’s time. Sai Heritage Village is Shirdi’s living tribute to Baba’s legacy."
  },
  {
    "title": "Wet N Joy Water Park",
    "description": "Wet N Joy Water Park, located near the temple town, is a modern attraction for families and kids. It features water slides, wave pools, and amusement rides. Tourists enjoy balancing spirituality with recreation here. Food courts and resting spaces make it a full-day outing. It is especially popular with families traveling with children. Wet N Joy is Shirdi’s fun-filled entertainment stop alongside devotion."
  },
  {
    "title": "Shani Shingnapur (Nearby)",
    "description": "Around 70 km from Shirdi, Shani Shingnapur is a unique temple dedicated to Lord Shani. The idol is an open-air black stone placed on a platform, worshipped without a roof. The village is famous for houses without doors, symbolizing faith in divine protection. Saturdays and Shani Amavasya attract large crowds of devotees. Many pilgrims combine Shirdi with Shani Shingnapur in their journey. Shani Shingnapur is Shirdi’s nearby outstation of trust and devotion."
  }
],


      "services": [
    {
      "name": "Pune to Shirdi Taxi Booking",
      "description": "Book reliable and comfortable taxis from Pune to Shirdi for hassle-free travel. Our fleet includes a range of vehicles suited for solo travelers, families, and groups, ensuring timely arrivals and smooth journeys to the holy town of Shirdi."
    },
    {
      "name": "AC Shirdi Cab Pune",
      "description": "Travel in cool comfort with our air-conditioned taxis from Pune to Shirdi. Perfect for long drives, our AC cabs are well-maintained, spacious, and driven by experienced chauffeurs who prioritize passenger safety and comfort."
    },
    {
      "name": "Round Trip Shirdi Taxi Pune",
      "description": "Convenient round trip taxi service for pilgrims and tourists visiting Shirdi from Pune. Enjoy flexible pickup and drop-off timings with courteous drivers who provide local insights and ensure a pleasant travel experience."
    },
    {
      "name": "One Way Cab to Shirdi",
      "description": "Affordable one-way taxi rides from Pune to Shirdi, ideal for travelers who prefer a simple, no-frills option. Our one-way cabs offer punctual service and well-maintained vehicles for stress-free journeys."
    },
    {
      "name": "Budget Shirdi Cab Service",
      "description": "Cost-effective taxi services from Pune to Shirdi for budget-conscious travelers. Our economy cabs deliver dependable transport without compromising on safety or comfort, suitable for solo travelers and small families."
    },
    {
      "name": "SUV Cab Pune to Shirdi",
      "description": "Spacious SUV taxis available for Pune to Shirdi trips, perfect for larger families or groups who require extra luggage space and a comfortable ride. Vehicles are well-equipped with modern amenities for a relaxed journey."
    },
    {
      "name": "Group Cab for Shirdi Darshan",
      "description": "Organize group trips to Shirdi with our group cab services, offering multiple vehicles and coordinated schedules. Ideal for religious tours, corporate outings, and family gatherings seeking seamless group transportation."
    },
    {
      "name": "Non AC Shirdi Cab Pune",
      "description": "Non-air-conditioned cab options from Pune to Shirdi for travelers looking for basic, economical travel solutions. Vehicles are regularly serviced and driven by professional drivers ensuring safe travel."
    },
    {
      "name": "Family Shirdi Cab Hire",
      "description": "Family-friendly cab rentals for Shirdi trips, offering vehicles with comfortable seating arrangements, safety features, and reliable drivers to ensure a pleasant journey for all age groups."
    },
    {
      "name": "Online Shirdi Cab Booking Pune",
      "description": "Convenient online platform to book Shirdi taxis from Pune with instant confirmation, easy payment options, and 24/7 customer support, making travel planning smooth and hassle-free."
    },
    {
      "name": "Shirdi Temple Taxi Fare",
      "description": "Transparent fare estimates for Pune to Shirdi taxi rides, helping travelers plan their budgets with no hidden charges. Competitive pricing for various vehicle types and travel durations."
    },
    {
      "name": "Private Cab to Shirdi",
      "description": "Exclusive private cab services for Pune to Shirdi trips, offering personalized travel schedules, privacy, and flexibility. Ideal for VIP travelers and those seeking premium transport experiences."
    },
    {
      "name": "24/7 Shirdi Taxi Pune",
      "description": "Round-the-clock taxi services for Shirdi from Pune, available any time of the day or night. Perfect for early morning or late-night travelers needing reliable and prompt transportation."
    }
  ],
  "tableData": [
    ["Pune to Shirdi Taxi Booking", "AC Shirdi Cab Pune"],
    ["Round Trip Shirdi Taxi Pune", "One Way Cab to Shirdi"],
    ["Budget Shirdi Cab Service", "SUV Cab Pune to Shirdi"],
    ["Group Cab for Shirdi Darshan", "Non AC Shirdi Cab Pune"],
    ["Family Shirdi Cab Hire", "Online Shirdi Cab Booking Pune"],
    ["Shirdi Temple Taxi Fare", "Private Cab to Shirdi"],
    ["24/7 Shirdi Taxi Pune"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune to Shirdi Cab Service",
    "WhyChoosedescription": "Vaishnavi Travels offers safe, reliable, and comfortable cab services from Pune to Shirdi – ideal for pilgrimages, family trips, and group travel."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicles Available",
    "WhyChoosedescription": "Choose from Swift Dzire, Ertiga, Innova, Urbania, and Tempo Traveller based on your group size and travel needs."
  },
  {
    "WhyChooseheading": "Well-Maintained & Sanitized Cars",
    "WhyChoosedescription": "All our cabs are thoroughly cleaned and regularly serviced to ensure safety, hygiene, and a smooth journey."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with the Route",
    "WhyChoosedescription": "Our professional drivers are well-acquainted with the Pune–Shirdi route, ensuring timely and safe travel with stops as needed."
  },
  {
    "WhyChooseheading": "Door-to-Door Pickup & Drop Service",
    "WhyChoosedescription": "Enjoy hassle-free pickup from your home, hotel, or office and direct drop at the temple or hotel in Shirdi."
  },
  {
    "WhyChooseheading": "Affordable, Transparent Pricing",
    "WhyChoosedescription": "We offer fixed, all-inclusive pricing — covering fuel, tolls, parking, and driver allowance with no hidden charges."
  },
  {
    "WhyChooseheading": "Perfect for One-Day Trips or Overnight Stays",
    "WhyChoosedescription": "Our flexible packages suit both quick darshan trips and extended visits with stay options in Shirdi."
  },
  {
    "WhyChooseheading": "24/7 Booking & Travel Support",
    "WhyChoosedescription": "Our support team is available round-the-clock to help with bookings, itinerary planning, and travel assistance."
  }
]













  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide cab services from Pune to Shirdi?',
      answer: 'Yes, Vaishnavi Travels offers reliable and comfortable cab services from Pune to Shirdi, perfect for pilgrimages, family trips, or spiritual getaways to Sai Baba Temple.',
    },
    {
      question: 'What types of cabs are available for the Pune to Shirdi route?',
      answer: 'We offer a variety of vehicles including Swift Dzire, Ertiga, Innova, and Tempo Travellers to suit different group sizes and comfort preferences.',
    },
    {
      question: 'Are the drivers familiar with the Pune to Shirdi route?',
      answer: 'Absolutely! Our experienced and courteous drivers are well-acquainted with the Pune–Shirdi route, ensuring a safe, smooth, and timely journey.',
    },
    {
      question: 'What is the fare for a cab from Pune to Shirdi?',
      answer: 'Cab fares typically start from ₹4,000 for a one-way trip in a sedan like Swift Dzire. Rates vary depending on vehicle type, trip duration, and return requirements.',
    },
    {
      question: 'Can I book a round trip cab from Pune to Shirdi with a same-day return?',
      answer: 'Yes, we offer flexible round trip packages for same-day or next-day returns, with clear and transparent pricing.',
    },
    {
      question: 'How far in advance should I book a Pune to Shirdi cab?',
      answer: 'It’s recommended to book at least 1-2 days in advance, especially on weekends or during festive periods, to ensure availability.',
    },
    {
      question: 'Is doorstep pickup and drop available for Pune to Shirdi cabs?',
      answer: 'Yes, Vaishnavi Travels provides doorstep pickup and drop-off in Pune and surrounding areas, with direct drop at your location in Shirdi.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Sandeep More",
    position: "Sai Devotee",
    feedback:
      "We booked a cab from Vaishnavi Travels for a family trip to Shirdi. The car was clean, the driver was respectful, and everything went smoothly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ms. Pooja Bhosale",
    position: "Traveler",
    feedback:
      "The Pune to Shirdi cab from Vaishnavi Travels was very comfortable. On-time pickup, professional driver, and no hidden charges. Will definitely book again!",
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
  "@type": "Service",
  "name": "Pune to Shirdi Cab",
  "description": "Book reliable Pune to Shirdi taxi service offering AC and Non-AC cabs, round trip and one way, SUV and budget options, perfect for group and family Shirdi Darshan.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "areaServed": "Pune, Shirdi",
    "url": "https://vaishnavitravel.com/pune-to-shirdi-cab"
  },
  "serviceType": "Taxi Service",
  "areaServed": {
    "@type": "City",
    "name": "Pune"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1500",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/pune-to-shirdi-cab"
  }
};



  return (
    <div>
<Helmet>
  <title>Pune to Shirdi Cab | AC & Non-AC Taxi Service</title>
  <meta
    name="description"
    content="Book reliable Pune to Shirdi taxi service offering AC and Non-AC cabs, round trip and one way, SUV and budget options, perfect for group and family Shirdi Darshan."
  />
  <meta
    name="keywords"
    content="Pune to Shirdi Taxi Booking, AC Shirdi Cab Pune, Round Trip Shirdi Taxi Pune, One Way Cab to Shirdi, Budget Shirdi Cab Service, SUV Cab Pune to Shirdi, Group Cab for Shirdi Darshan, Non AC Shirdi Cab Pune, Family Shirdi Cab Hire, Online Shirdi Cab Booking Pune, Shirdi Temple Taxi Fare, Private Cab to Shirdi, 24/7 Shirdi Taxi Pune"
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
              <img src='/images/keyword/57.jpg' alt='img'  className='img-fluid'/>
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

export default Punetoshirdicab;