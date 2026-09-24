
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busonrentinpune() {



  const cardData =
  {
    keyword: ' Bus On Rent in Pune',
    heading: 'Vaishnavi Travels: Bus On Rent in Pune',
    headingDescription: 'Vaishnavi Travels provides dependable and affordable Bus on Rent in Pune, ideal for weddings, corporate events, school trips, family functions, and outstation tours. Our fleet of well-maintained buses offers spacious seating, strong air-conditioning, and ample luggage space to ensure a smooth and comfortable journey for every passenger. With experienced drivers, punctual pickups, and flexible booking options, we make group travel simple and stress-free. Whether it’s a religious yatra, picnic, holiday tour, or local event, Vaishnavi Travels guarantees safe, reliable, and convenient bus rental services in Pune tailored to your travel needs.',

    top: 'Top Places to Visit in Pune with Vaishnavi Travels',

  "topPlaces": [
  {
    "title": "Shaniwar Wada",
    "description": "Built in 1732 by the Peshwas, Shaniwar Wada is Pune’s most iconic fort palace and a proud symbol of Maratha heritage. Once the seat of power of the Maratha Empire, its mighty gates, sprawling gardens, and ruined bastions narrate tales of valor and glory. Though partially destroyed by a fire in 1828, the fort still stands as a majestic landmark. The evening light-and-sound show recreates the romance of Bajirao and Mastani and the grandeur of the Peshwas. Thousands of visitors explore its corridors, courtyards, and gardens every day. Shaniwar Wada remains Pune’s proud cultural and historic centerpiece."
  },
  {
    "title": "Aga Khan Palace",
    "description": "The Aga Khan Palace, constructed in 1892, is a historic monument closely tied to India’s freedom struggle. It served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other leaders during the Quit India Movement. Today, it houses a museum displaying Gandhi’s personal belongings, photographs, and letters. Its majestic Italian arches, sprawling lawns, and colonial architecture make it a popular attraction. Tourists enjoy the calm and serene ambiance of its gardens while soaking in history. Aga Khan Palace stands as Pune’s inspirational monument of patriotism and sacrifice."
  },
  {
    "title": "Sinhagad Fort",
    "description": "Located about 25 km from Pune, Sinhagad Fort is famous for the 1670 battle in which Tanaji Malusare fought heroically for Chhatrapati Shivaji Maharaj. Perched atop a hill, it offers panoramic views of the Sahyadris and trekking opportunities for adventure lovers. The fort is dotted with ancient bastions, temples, and memorials echoing Maratha bravery. In monsoon, mist and waterfalls add a magical touch to the trek. Local villagers serve traditional pithla-bhakri, making the trip even more authentic. Sinhagad is Pune’s perfect mix of history, nature, and adventure."
  },
  {
    "title": "Dagdusheth Halwai Ganpati Temple",
    "description": "The Shreemant Dagdusheth Halwai Ganpati Temple is Pune’s most revered shrine dedicated to Lord Ganesha. Established more than 125 years ago, the temple is famous for its magnificent idol adorned with gold and jewels. During Ganesh Chaturthi, the temple becomes the epicenter of vibrant celebrations attracting lakhs of devotees. Beyond rituals, the temple is renowned for its charitable, cultural, and social initiatives. Tourists and devotees alike experience the spiritual energy and grandeur here. Dagdusheth Ganpati is Pune’s spiritual and cultural heart."
  },
  {
    "title": "Pataleshwar Cave Temple",
    "description": "Carved in the 8th century, the Pataleshwar Cave Temple is a rock-cut shrine dedicated to Lord Shiva. Featuring massive stone pillars, a sanctum, and a Nandi mandapa, it is a fine example of early Indian rock-cut architecture. Despite being located in the city center, the temple offers a peaceful and meditative environment. Evening prayers and chants fill the air with devotion and serenity. Tourists admire the craftsmanship and historical charm of this hidden heritage site. Pataleshwar Cave Temple is Pune’s spiritual retreat in the heart of the city."
  },
  {
    "title": "Raja Dinkar Kelkar Museum",
    "description": "The Raja Dinkar Kelkar Museum is a cultural treasure trove showcasing over 20,000 artifacts collected by Dr. Dinkar Kelkar. Its exhibits range from musical instruments, sculptures, and ornaments to everyday household objects of past centuries. The recreated Mastani Mahal is a highlight that fascinates history lovers. Students and tourists find the museum both educational and inspiring. It preserves India’s cultural traditions and artistry across eras. Raja Dinkar Kelkar Museum is Pune’s proud celebration of heritage, history, and art."
  },
  {
    "title": "Parvati Hill and Temple",
    "description": "Parvati Hill, one of Pune’s oldest heritage sites, offers a panoramic view of the city from its hilltop temple complex. The Parvati Temple, dedicated to Lord Shiva and Goddess Parvati, was built during the Peshwa era. Smaller temples and museums nearby add cultural depth to the visit. Visitors climb 103 stone steps to reach the top, combining devotion with a healthy trek. Sunrise and sunset views from here are truly mesmerizing. Parvati Hill is Pune’s sacred and scenic escape above the city."
  },
  {
    "title": "Osho Ashram",
    "description": "The Osho International Meditation Resort, located in Koregaon Park, is Pune’s global destination for spirituality, wellness, and mindfulness. Spread across beautifully landscaped gardens, it attracts seekers and tourists from across the world. The ashram offers meditation techniques, yoga practices, and personal growth workshops. Japanese Zen gardens and tranquil meditation halls create a serene atmosphere. Beyond spirituality, it promotes rejuvenation and holistic living. Osho Ashram is Pune’s international hub of peace, healing, and inner growth."
  },
  {
    "title": "Pu La Deshpande Garden (Okayama Friendship Garden)",
    "description": "Inspired by the famous Korakuen Garden in Japan, Pu La Deshpande Garden is Pune’s largest landscaped park. It is designed with flowing streams, stone bridges, manicured lawns, and seasonal flowers. Families enjoy picnics, peaceful walks, and photography in this lush setting. The garden is also a symbol of Indo-Japanese cultural friendship. Nature lovers find it refreshing throughout the year, especially in spring. Pu La Deshpande Garden is Pune’s green paradise of calm and beauty."
  },
  {
    "title": "Khadakwasla Dam",
    "description": "Khadakwasla Dam, built across the Mutha River, is a popular weekend spot just outside Pune. It not only supplies water to the city but also offers stunning views of hills, backwaters, and sunsets. In monsoon, the overflowing dam creates breathtaking sights. Locals and tourists enjoy roadside snacks like roasted corn and tea along the banks. It is also the starting point for trips to Sinhagad Fort. Khadakwasla is Pune’s refreshing natural getaway for families and travelers alike."
  }
],


 "services": [
  {
    "name": "Bus Rental Service Pune",
    "description": "Comprehensive bus rental services in Pune catering to diverse travel needs including family trips, corporate travel, school tours, and special events. We offer a range of buses from small to large capacity, all maintained for safety and comfort, with professional drivers ensuring timely service."
  },
  {
    "name": "Book Bus Online in Pune",
    "description": "Convenient online bus booking platform in Pune allowing customers to easily select bus types, compare prices, and reserve vehicles instantly. The platform offers real-time availability, instant confirmations, and multiple payment options for a hassle-free experience."
  },
  {
    "name": "AC & Non AC Bus Hire Pune",
    "description": "Flexible bus hire options in Pune with both air-conditioned and non-AC buses available to suit your budget and comfort preferences. Ideal for weddings, corporate events, local tours, and outstation trips with well-maintained vehicles and courteous drivers."
  },
  {
    "name": "Tourist Bus Booking Pune",
    "description": "Specialized tourist bus booking services in Pune providing comfortable and reliable transport for sightseeing tours, religious trips, and holiday excursions. Our buses come equipped with modern amenities to enhance the travel experience for groups of all sizes."
  },
  {
    "name": "Wedding Bus Hire Pune",
    "description": "Dedicated wedding bus rental services in Pune offering a variety of buses including luxury and standard options to transport guests comfortably. We provide timely pickups, customizable routes, and decorative options to add elegance to your wedding transport."
  },
  {
    "name": "Event Bus Service Pune",
    "description": "Professional event bus services in Pune for corporate functions, parties, conferences, and large gatherings. Our buses are spacious, well-maintained, and available on flexible rental terms to ensure smooth guest transportation."
  },
  {
    "name": "Corporate Bus Hire in Pune",
    "description": "Reliable corporate bus hire solutions in Pune designed for employee shuttles, business trips, and corporate events. We focus on punctuality, safety, and comfort, offering both short-term and monthly rental packages tailored to organizational needs."
  },
  {
    "name": "School Tour Bus Rental Pune",
    "description": "Safe and dependable school tour bus rentals in Pune for educational trips, excursions, and sports events. Our buses are equipped with child safety features and driven by experienced chauffeurs trained to ensure student comfort and security."
  },
  {
    "name": "Local & Outstation Bus Pune",
    "description": "Versatile bus rental options in Pune covering both local city travel and outstation journeys. Whether for daily commutes, weekend getaways, or long-distance trips, we offer well-maintained vehicles with professional drivers to meet your travel requirements."
  },
  {
    "name": "Tempo Traveller & Bus Rental Pune",
    "description": "Flexible rental options for Tempo Travellers and buses in Pune, perfect for small groups and family outings. Our fleet includes vehicles suitable for city tours, airport transfers, and short outstation trips with affordable pricing and reliable service."
  },
  {
    "name": "25 to 50 Seater Bus Pune",
    "description": "Wide range of bus options in Pune seating between 25 to 50 passengers, catering to medium and large group travel. Our buses come with comfortable seating, safety features, and professional drivers to ensure a smooth journey for any occasion."
  },
  {
    "name": "Easy Bus Booking Platform Pune",
    "description": "User-friendly bus booking platform in Pune that simplifies the reservation process with instant booking confirmation, transparent pricing, and customizable travel plans. Ideal for individuals, families, and businesses seeking efficient transportation solutions."
  },
  {
    "name": "Bus with Driver Hire Pune",
    "description": "Hire buses with professional drivers in Pune for hassle-free travel across the city and beyond. Our drivers are experienced, courteous, and familiar with local routes, ensuring safe and punctual transport tailored to your itinerary."
  }
],
"tableData": [
  ["Bus Rental Service Pune", "Book Bus Online in Pune"],
  ["AC & Non AC Bus Hire Pune", "Tourist Bus Booking Pune"],
  ["Wedding Bus Hire Pune", "Event Bus Service Pune"],
  ["Corporate Bus Hire in Pune", "School Tour Bus Rental Pune"],
  ["Local & Outstation Bus Pune", "Tempo Traveller & Bus Rental Pune"],
  ["25 to 50 Seater Bus Pune", "Easy Bus Booking Platform Pune"],
  ["Bus with Driver Hire Pune"]
],




 "whychoose": [
  {
    "WhyChooseheading": "Reliable Bus On Rent in Pune",
    "WhyChoosedescription": "Vaishnavi Travels offers dependable bus rental services in Pune, perfect for group travel, events, and excursions."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Seating",
    "WhyChoosedescription": "Our buses provide ample legroom and comfortable seating to ensure a pleasant journey for all passengers."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Each bus is regularly serviced and thoroughly cleaned to guarantee safety and hygiene for your travel."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Fit Your Needs",
    "WhyChoosedescription": "Choose from hourly, daily, or multi-day rental options tailored to your travel schedule and group size."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our skilled drivers ensure safe, timely, and courteous service, familiar with Pune and surrounding areas."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "All-inclusive pricing covers fuel, tolls, taxes, and driver allowances for a hassle-free experience."
  },
  {
    "WhyChooseheading": "Ideal for Corporate, Wedding, and Group Travel",
    "WhyChoosedescription": "Perfect for various occasions including corporate events, weddings, sightseeing, and group outings."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Seamless Booking",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer service to assist with bookings and travel inquiries."
  }
]






























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer buses on rent in Pune for all types of needs?',
      answer: 'Yes, Vaishnavi Travels provides buses on rent in Pune for a wide range of purposes including weddings, corporate events, school trips, family picnics, outstation tours, and local city travel. We offer flexible packages to match the occasion, distance, group size, and budget.',
    },
    {
      question: 'What bus options are available for rental in Pune?',
      answer: 'We offer a well-maintained fleet that includes 17-seater tempo travellers, 27 and 32-seater minibuses, and 50-seater large coaches. Both AC and non-AC buses are available based on your comfort preference and travel requirements.',
    },
    {
      question: 'Can I rent a bus for a few hours or just a one-way trip in Pune?',
      answer: 'Yes, we provide highly flexible rental options including hourly rentals, half-day and full-day bookings, one-way transfers, as well as round trips and multi-day rentals. Our goal is to offer convenience whether you need a bus for 2 hours or 2 days.',
    },
    {
      question: 'What is included in the bus rental service?',
      answer: 'Our rentals include the vehicle, professional driver, and fuel charges. Additional costs such as tolls, parking, interstate permits, and overnight driver allowances are based on your trip itinerary and will be transparently discussed before booking.',
    },
    {
      question: 'Is it possible to book a bus on short notice in Pune?',
      answer: 'Yes, we can often accommodate last-minute bookings based on vehicle availability. However, we recommend booking at least a few days in advance, especially during weekends or festive seasons, to get the best options.',
    },
    {
      question: 'Are your drivers experienced and familiar with Pune routes?',
      answer: 'Absolutely. All our drivers are licensed, well-trained, and experienced in handling local as well as outstation routes. They are courteous, punctual, and focused on ensuring passenger safety and comfort throughout the journey.',
    },
    {
      question: 'How do I book a bus on rent in Pune with Vaishnavi Travels?',
      answer: 'You can easily book through our website, mobile app, or by calling our support team. Just share your travel plan, group size, date and time, and our team will guide you through the booking process with suitable vehicle options and pricing.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Vishal Shetty",
    position: "IT Consultant",
    feedback:
      "I needed a bus on rent in Pune for a team offsite and Vaishnavi Travels delivered beyond expectations. The 32-seater AC bus was on time, extremely clean, and the driver was both friendly and professional. Booking was easy and the price was fair. Highly recommend for anyone needing hassle-free group transport.",
    rating: 5,
  },
  {
    name: "Ms. Tanvi Deshpande",
    position: "Freelance Event Planner",
    feedback:
      "Vaishnavi Travels has become my go-to for bus rentals in Pune. Their buses are in excellent condition, drivers are punctual and polite, and the customer support team is responsive and helpful. We recently hired a 50-seater coach for a wedding event, and everything went smoothly from start to finish. Truly dependable service!",
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
  "name": "Bus On Rent in Pune",
  "image": "https://vaishnavitravel.com/assets/images/bus-on-rent-pune.jpg",
  "description": "Book bus on rent in Pune with Vaishnavi Travels for weddings, corporate events, school tours, local and outstation trips. Choose from AC & Non AC buses with experienced drivers and easy online booking.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.85",
    "ratingCount": "4120"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4800",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-on-rent-in-pune"
  }
};




  return (
    <div>

<Helmet>
  <title>Bus On Rent in Pune | AC & Non AC Bus Hire | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book bus on rent in Pune with Vaishnavi Travels for weddings, corporate events, school tours, local and outstation trips. Choose from AC & Non AC buses with experienced drivers and easy online booking."
  />
  <meta
    name="keywords"
    content="Bus Rental Service Pune, Book Bus Online in Pune, AC & Non AC Bus Hire Pune, Tourist Bus Booking Pune, Wedding Bus Hire Pune, Event Bus Service Pune, Corporate Bus Hire in Pune, School Tour Bus Rental Pune, Local & Outstation Bus Pune, Tempo Traveller & Bus Rental Pune, 25 to 50 Seater Bus Pune, Easy Bus Booking Platform Pune, Bus with Driver Hire Pune"
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
              <img src='/images/keyword/14.jpg' alt='img'  className='img-fluid'/>
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

export default Busonrentinpune;