
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busserviceforschooltrips() {



  const cardData =
  {
    keyword: ' Bus Rentals for School Trips in Pune',
    heading: 'Vaishnavi Travels: Bus Rentals for School Trips in Pune',
    headingDescription: 'Vaishnavi Travels offers safe and affordable Bus Rentals for School Trips in Pune, ensuring a comfortable and reliable travel experience for students, teachers, and staff. Our buses are well-maintained with spacious seating, strong air-conditioning, and ample luggage space to handle bags and supplies with ease. Safety is our top priority, with professional drivers and disciplined service that parents and schools can trust. Whether it’s an educational tour, picnic, cultural event, or long outstation trip, Vaishnavi Travels provides timely pickups, smooth journeys, and stress-free group travel, making every school trip enjoyable and worry-free.',

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
    "name": "School Bus Hire Pune",
    "description": "Reliable school bus hire services in Pune designed to provide safe and comfortable transport for students. Our buses are regularly maintained, equipped with safety features, and driven by experienced drivers to ensure punctual and secure school commute and event travel."
  },
  {
    "name": "Educational Trip Bus Rental Pune",
    "description": "Specialized bus rental service for educational trips in Pune, offering well-equipped buses with ample seating and luggage space. Perfect for school excursions, study tours, and inter-school events, ensuring students travel comfortably and arrive on time."
  },
  {
    "name": "Student Transport Bus Booking",
    "description": "Convenient student transport bus booking service in Pune that caters to daily school routes as well as special outings. Features include child-friendly seating arrangements, GPS tracking, and flexible scheduling to match academic calendars."
  },
  {
    "name": "School Excursion Bus Pune",
    "description": "Safe and affordable school excursion bus rentals in Pune for day trips, picnics, and educational outings. Our buses include both AC and non-AC options and are driven by professional chauffeurs trained in student safety protocols."
  },
  {
    "name": "Bus for School Outing Pune",
    "description": "Efficient bus services in Pune for school outings, equipped to handle groups of various sizes. Ideal for sports events, cultural programs, and field trips with customized itineraries and timely pick-up/drop-off services."
  },
  {
    "name": "AC Bus for School Trips",
    "description": "Air-conditioned school buses in Pune providing a comfortable and cool environment for students during summer or long-distance trips. Buses come with clean interiors, comfortable seating, and entertainment options to make travel enjoyable."
  },
  {
    "name": "Non AC School Bus Rental",
    "description": "Cost-effective non-AC school bus rental options in Pune, suitable for short-distance travel and daily routes. These buses are well-maintained to ensure student safety and comfort without extra costs."
  },
  {
    "name": "Primary School Trip Bus Pune",
    "description": "Dedicated bus rental service for primary school trips in Pune, emphasizing child safety with seat belts, trained staff, and appropriate supervision. Vehicles are clean, secure, and suitable for younger children."
  },
  {
    "name": "College Tour Bus Pune",
    "description": "Spacious and comfortable buses for college tours in Pune, offering a variety of seating capacities and amenities such as AC, music systems, and luggage compartments. Ideal for multi-day trips, educational tours, and group travels."
  },
  {
    "name": "Field Trip Bus Hire Pune",
    "description": "Dependable bus hire service for school field trips in Pune, featuring reliable vehicles and experienced drivers. Our buses support flexible routes and timing, ensuring that field trips are executed smoothly and safely."
  },
  {
    "name": "Safety Certified School Bus Rental",
    "description": "Safety-certified school bus rentals in Pune with vehicles inspected regularly for compliance with safety standards. Equipped with emergency exits, first aid kits, and GPS tracking, providing peace of mind to parents and schools alike."
  },
  {
    "name": "School Trip Transportation Pune",
    "description": "Comprehensive school trip transportation solutions in Pune that include route planning, group coordination, and on-time pickups. Suitable for academic trips, sports events, and extracurricular activities with professional support throughout the journey."
  },
  {
    "name": "School Picnic Bus Booking Pune",
    "description": "Affordable and reliable bus booking services for school picnics in Pune, offering both AC and non-AC options. Buses come with clean seating, safety measures, and experienced drivers ensuring a fun and secure travel experience for students."
  }
],
"tableData": [
  ["School Bus Hire Pune", "Educational Trip Bus Rental Pune"],
  ["Student Transport Bus Booking", "School Excursion Bus Pune"],
  ["Bus for School Outing Pune", "AC Bus for School Trips"],
  ["Non AC School Bus Rental", "Primary School Trip Bus Pune"],
  ["College Tour Bus Pune", "Field Trip Bus Hire Pune"],
  ["Safety Certified School Bus Rental", "School Trip Transportation Pune"],
  ["School Picnic Bus Booking Pune"]
],




  "whychoose": [
  {
    "WhyChooseheading": "Safe and Reliable Bus Rentals for School Trips in Pune",
    "WhyChoosedescription": "Vaishnavi Travels provides secure and dependable bus rentals designed specifically for school excursions across Pune."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Seating for Students",
    "WhyChoosedescription": "Our buses offer ample space and comfortable seating to ensure a pleasant and safe journey for all students."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Each bus undergoes thorough cleaning and maintenance before every trip, prioritizing student safety and hygiene."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Suit School Schedules",
    "WhyChoosedescription": "Choose from hourly, full-day, or multi-day rental options tailored to your school trip itinerary."
  },
  {
    "WhyChooseheading": "Experienced Drivers Trained for School Trips",
    "WhyChoosedescription": "Our professional drivers are skilled in safe driving and handling groups of young passengers responsibly."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "All costs including fuel, tolls, and driver allowance are included in our pricing for straightforward budgeting."
  },
  {
    "WhyChooseheading": "Ideal for Educational Tours and Extracurricular Activities",
    "WhyChoosedescription": "Perfect for school field trips, educational tours, sports events, and other student group outings."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Smooth Booking and Assistance",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock support to help schools manage bookings and address any travel concerns."
  }
]

























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide bus rentals for school trips in Pune?',
      answer: 'Yes, Vaishnavi Travels offers specialized bus rental services for school trips across Pune. Whether it’s a day outing, educational tour, or sports event, our buses ensure safe, comfortable, and timely transportation for students and accompanying staff.',
    },
    {
      question: 'What types of buses are available for school trip rentals?',
      answer: 'We provide a variety of buses including 17-seater tempo travellers, 27 and 32-seater minibuses, and larger 50-seater coaches. All vehicles are well-maintained, clean, and equipped with safety features suitable for school children.',
    },
    {
      question: 'Are the buses safe for transporting children?',
      answer: 'Absolutely. Our buses undergo regular safety inspections, are equipped with seat belts, and are driven by experienced, background-verified drivers who prioritize the safety and comfort of young passengers throughout the journey.',
    },
    {
      question: 'Can I book a bus for half-day or full-day school trips?',
      answer: 'Yes, we offer flexible rental options including hourly, half-day, full-day, and multi-day packages to suit the duration and itinerary of your school trip.',
    },
    {
      question: 'Do you provide buses with driver and fuel included?',
      answer: 'Yes, our rental packages include professional drivers and fuel costs. Additional charges may apply for tolls, parking, and other incidental expenses depending on the trip details.',
    },
    {
      question: 'Can the bus pick up students from multiple locations?',
      answer: 'Yes, we can arrange pickups from multiple points to accommodate students coming from different areas, ensuring smooth coordination and timely departures.',
    },
    {
      question: 'How far in advance should I book a bus for a school trip?',
      answer: 'We recommend booking at least 1 to 2 weeks in advance, especially during peak school activity seasons, to ensure vehicle availability and proper planning. However, we also accommodate last-minute requests based on availability.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Sanjay Kulkarni",
    position: "School Principal",
    feedback:
      "Vaishnavi Travels has been our go-to for school trip transport for the past two years. Their buses are always clean, safe, and comfortable for our students. The drivers are responsible and patient, which is crucial when traveling with children. We appreciate their professionalism and punctuality, which makes organizing trips hassle-free.",
    rating: 5,
  },
  {
    name: "Ms. Priya Mehta",
    position: "School Trip Coordinator",
    feedback:
      "We hired Vaishnavi Travels for a science excursion to Pune’s museums, and the experience was wonderful. The bus was spacious and well-maintained, and the driver was courteous and careful. Their team helped us with flexible timing and multiple pickup points, making the entire trip smooth and enjoyable for students and staff alike.",
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
  "name": "Bus Rentals for School Trips in Pune",
  "image": "https://vaishnavitravel.com/assets/images/school-trip-bus-rental-pune.jpg",
  "description": "Book school trip bus rentals in Pune with Vaishnavi Travels. Safe and certified AC/Non-AC buses available for educational tours, picnics, and field trips. Ideal for schools and colleges. Affordable rates and reliable drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "3150"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4200",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-rentals-for-school-trips-in-pune"
  }
};



  return (
    <div>

<Helmet>
  <title>Bus Rentals for School Trips in Pune | Safe & Certified Transport | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book school trip bus rentals in Pune with Vaishnavi Travels. Safe and certified AC/Non-AC buses available for educational tours, picnics, and field trips. Ideal for schools and colleges. Affordable rates and reliable drivers."
  />
  <meta
    name="keywords"
    content="School Bus Hire Pune, Educational Trip Bus Rental Pune, Student Transport Bus Booking, School Excursion Bus Pune, Bus for School Outing Pune, AC Bus for School Trips, Non AC School Bus Rental, Primary School Trip Bus Pune, College Tour Bus Pune, Field Trip Bus Hire Pune, Safety Certified School Bus Rental, School Trip Transportation Pune, School Picnic Bus Booking Pune"
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
              <img src='/images/keyword/8.jpg' alt='img'  className='img-fluid'/>
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

export default Busserviceforschooltrips;