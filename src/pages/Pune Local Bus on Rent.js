
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Punelocalbusonrent() {



  const cardData =
  {
    keyword: ' Pune Local Bus on Rent',
    heading: 'Vaishnavi Travels: Pune Local Bus on Rent',
    headingDescription: 'Vaishnavi Travels offers convenient and affordable Pune Local Bus on Rent, making it easy to manage group travel within the city. Our well-maintained buses come with spacious seating, powerful air-conditioning, and ample storage, ensuring a smooth and comfortable ride for weddings, school trips, family functions, and corporate events. With professional drivers, punctual service, and flexible booking options, we provide a hassle-free travel experience for all your local needs. Whether it’s shuttling guests between venues, city sightseeing, or short group transfers, Vaishnavi Travels guarantees safe, reliable, and comfortable local bus rental services in Pune..',

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
    "name": "Local Bus Hire Pune",
    "description": "Convenient local bus hire services in Pune offering flexible rental options for city travel, events, and daily commutes. Our buses are well-maintained, comfortable, and driven by experienced drivers to ensure safe and timely transport within Pune city limits."
  },
  {
    "name": "Short Distance Bus Rental Pune",
    "description": "Affordable short-distance bus rentals in Pune, perfect for quick trips, local errands, and short group outings. These buses offer reliable service with punctual pickups and drop-offs, suitable for schools, offices, and family groups."
  },
  {
    "name": "Hourly Bus Service Pune",
    "description": "Flexible hourly bus rental services in Pune, ideal for clients needing transportation on demand for functions, meetings, or casual outings. Choose from a variety of bus sizes with professional drivers ready to accommodate your schedule."
  },
  {
    "name": "City Tour Bus Booking Pune",
    "description": "Book city tour buses in Pune designed for sightseeing and leisure travel within the city. Our buses come with comfortable seating and knowledgeable drivers who can also serve as guides, making your local tour enjoyable and informative."
  },
  {
    "name": "Local Bus for Functions Pune",
    "description": "Reliable local bus hire services for various functions in Pune including weddings, parties, and cultural events. Our buses are spacious, clean, and available with customization options like decoration to suit your special occasions."
  },
  {
    "name": "College Transport Bus Pune",
    "description": "Dedicated bus rental services for college transport within Pune, ensuring safe and comfortable daily commutes for students. Our buses are equipped with safety features, punctual schedules, and experienced drivers familiar with college routes."
  },
  {
    "name": "Pune City Travel Bus",
    "description": "Efficient bus rental services for city travel in Pune, catering to business trips, family outings, and local group travels. Our buses offer smooth rides, easy booking, and timely service, making city commuting hassle-free."
  },
  {
    "name": "In-City Bus Hire Pune",
    "description": "Comprehensive in-city bus hire solutions in Pune for all local transportation needs. Whether it’s for corporate functions, family trips, or school activities, we provide clean buses with professional drivers to ensure a comfortable ride."
  },
  {
    "name": "Affordable Local Bus Rental",
    "description": "Budget-friendly local bus rental services in Pune without compromising on quality or safety. Perfect for cost-conscious groups needing efficient transportation for short distances within the city."
  },
  {
    "name": "Local Event Bus Booking Pune",
    "description": "Specialized bus services for local events in Pune, including corporate gatherings, social functions, and school events. Our buses can be booked with flexible timings and routes to fit event schedules smoothly."
  },
  {
    "name": "School Bus for Local Trips",
    "description": "Safe and reliable school bus rentals for local trips in Pune, ensuring student safety and comfort. Our vehicles undergo regular inspections and are driven by experienced chauffeurs trained for student transport."
  },
  {
    "name": "Office Staff Local Bus Hire",
    "description": "Efficient bus hire services for office staff commuting within Pune, offering scheduled pick-ups and drop-offs. Our local buses help companies provide convenient transport options for employees, enhancing punctuality and productivity."
  },
  {
    "name": "Family Group Local Bus Pune",
    "description": "Comfortable local bus rentals for family groups in Pune, ideal for outings, celebrations, and small trips within the city. Our buses provide ample space, clean interiors, and friendly drivers to make family travel enjoyable."
  }
],
"tableData": [
  ["Local Bus Hire Pune", "Short Distance Bus Rental Pune"],
  ["Hourly Bus Service Pune", "City Tour Bus Booking Pune"],
  ["Local Bus for Functions Pune", "College Transport Bus Pune"],
  ["Pune City Travel Bus", "In-City Bus Hire Pune"],
  ["Affordable Local Bus Rental", "Local Event Bus Booking Pune"],
  ["School Bus for Local Trips", "Office Staff Local Bus Hire"],
  ["Family Group Local Bus Pune"]
],




 "whychoose": [
  {
    "WhyChooseheading": "Convenient Pune Local Bus on Rent",
    "WhyChoosedescription": "Vaishnavi Travels offers reliable and affordable local bus rentals within Pune, perfect for group travel across the city."
  },
  {
    "WhyChooseheading": "Comfortable Seating for City Travel",
    "WhyChoosedescription": "Our buses provide spacious seating and a smooth ride, making your local travel in Pune comfortable and enjoyable."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Buses",
    "WhyChoosedescription": "Each bus is regularly serviced and sanitized to ensure a safe and hygienic environment for all passengers."
  },
  {
    "WhyChooseheading": "Flexible Rental Plans for Local Needs",
    "WhyChoosedescription": "Choose from hourly or full-day rentals tailored to your schedule and group size for hassle-free city travel."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Pune Roads",
    "WhyChoosedescription": "Our skilled drivers know the best routes and traffic patterns to ensure timely and efficient transportation."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Costs",
    "WhyChoosedescription": "All-inclusive pricing covers fuel, tolls, driver allowances, and taxes, providing clear and honest rates."
  },
  {
    "WhyChooseheading": "Ideal for Corporate, School, and Group Travel",
    "WhyChoosedescription": "Perfect for office commutes, school transport, sightseeing, and any local group travel within Pune."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Easy Booking",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer service to assist with bookings and travel inquiries."
  }
]






























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer local bus rental services in Pune?',
      answer: 'Yes, Vaishnavi Travels provides reliable and affordable local bus rental services within Pune. Whether you need transport for family functions, group travel, corporate staff movement, or city tours, our fleet is available for local use across the city.',
    },
    {
      question: 'What types of buses are available for local rentals in Pune?',
      answer: 'We offer 17-seater tempo travellers, 27 and 32-seater minibuses, and larger 50-seater coaches. Both AC and non-AC options are available, depending on your preference and group size.',
    },
    {
      question: 'Can I hire a bus for a few hours within Pune city?',
      answer: 'Absolutely. We offer hourly rental packages for local use. Whether you need the bus for 3 hours, 6 hours, or full-day local movement, we have flexible plans tailored to your requirements.',
    },
    {
      question: 'Is the local rental fare inclusive of fuel and driver charges?',
      answer: 'Yes, local rental fares typically include the vehicle, fuel, and professional driver charges for the booked duration. However, extra hours or distance beyond the agreed package may attract additional charges.',
    },
    {
      question: 'Can the bus make multiple stops within the city during the rental period?',
      answer: 'Yes, our local rental packages allow for multiple pick-up and drop-off points across Pune. This is ideal for events, group outings, and shuttle services where flexibility is required.',
    },
    {
      question: 'Are your local buses suitable for senior citizens or school groups?',
      answer: 'Yes, our buses are equipped with comfortable seating, easy boarding steps, and trained drivers—making them suitable for all age groups, including senior citizens and children.',
    },
    {
      question: 'How do I book a local bus on rent in Pune with Vaishnavi Travels?',
      answer: 'You can book quickly via our website, mobile app, or by calling our customer support team. Share your schedule, pickup points, and group size, and we’ll recommend the right vehicle and rental plan.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Ajay More",
    position: "Local Event Organizer",
    feedback:
      "We hired a 27-seater bus from Vaishnavi Travels for a city-wide religious event, and the experience was excellent. The driver was familiar with all local routes, handled multiple stops smoothly, and was very patient with our group. The bus was clean, spacious, and perfect for our needs. Great service for local travel within Pune.",
    rating: 5,
  },
  {
    name: "Ms. Pooja Naik",
    position: "Community Volunteer",
    feedback:
      "Vaishnavi Travels helped us organize local transportation for a senior citizen group visiting multiple temples in Pune. The AC bus was comfortable, and the driver was respectful and accommodating throughout the journey. Booking was easy, and the team was responsive to all our queries. Will definitely use them again for local rentals.",
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
  "name": "Pune Local Bus on Rent",
  "image": "https://vaishnavitravel.com/assets/images/pune-local-bus-rent.jpg",
  "description": "Rent local buses in Pune with Vaishnavi Travels for short distance travel, city tours, college transport, office staff commuting, and local events. Affordable hourly bus service with reliable drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "1985"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2800",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/pune-local-bus-on-rent"
  }
};




  return (
    <div>
<Helmet>
  <title>Pune Local Bus on Rent | Affordable Short Distance Bus Hire | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Rent local buses in Pune with Vaishnavi Travels for short distance travel, city tours, college transport, office staff commuting, and local events. Affordable hourly bus service with reliable drivers."
  />
  <meta
    name="keywords"
    content="Local Bus Hire Pune, Short Distance Bus Rental Pune, Hourly Bus Service Pune, City Tour Bus Booking Pune, Local Bus for Functions Pune, College Transport Bus Pune, Pune City Travel Bus, In-City Bus Hire Pune, Affordable Local Bus Rental, Local Event Bus Booking Pune, School Bus for Local Trips, Office Staff Local Bus Hire, Family Group Local Bus Pune"
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
              <img src='/images/keyword/13.jpg' alt='img'  className='img-fluid'/>
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

export default Punelocalbusonrent;