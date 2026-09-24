
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busonrentforeventsinpune() {



  const cardData =
  {
    keyword: ' Bus on Rent for Event in Pune',
    heading: 'Vaishnavi Travels: Bus on Rent for Event in Pune',
    headingDescription: 'Vaishnavi Travels provides convenient and affordable Bus on Rent for Event in Pune, ensuring smooth and organized transportation for guests, participants, and teams. Our fleet of well-maintained buses comes with spacious seating, powerful air-conditioning, and ample luggage space, making them perfect for weddings, exhibitions, concerts, seminars, and large-scale gatherings. With professional drivers, punctual pickups, and flexible booking options, we take the stress out of event travel management. Whether it’s a cultural function, corporate event, or social celebration, Vaishnavi Travels guarantees safe, reliable, and comfortable bus rental services tailored to your event needs.',

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
    "name": "Event Transport Bus Hire Pune",
    "description": "Reliable event transport bus hire services in Pune catering to various occasions such as conferences, concerts, and social gatherings. Our buses offer comfortable seating, timely pickups, and professional drivers to ensure smooth and efficient transportation for your guests."
  },
  {
    "name": "Bus Booking for Conferences",
    "description": "Specialized bus booking services for corporate conferences and business meetings in Pune. We provide well-maintained buses equipped with amenities to keep attendees comfortable, ensuring punctual arrivals and departures for seamless event logistics."
  },
  {
    "name": "Birthday Party Bus Rental Pune",
    "description": "Fun and festive birthday party bus rentals in Pune, ideal for group celebrations and party tours. Our buses can be customized with music systems, lighting, and decorations to create a memorable mobile party experience."
  },
  {
    "name": "Exhibition Bus Service Pune",
    "description": "Efficient bus services for exhibitions and trade shows in Pune, providing transport for exhibitors, attendees, and staff. Our reliable buses ensure timely shuttle services between venues, hotels, and parking areas."
  },
  {
    "name": "Musical Event Bus Hire",
    "description": "Specialized bus hire services for musical events and concerts in Pune, offering spacious and comfortable transport options for performers and audience members alike. Equipped with sound systems and extra luggage space for instruments and equipment."
  },
  {
    "name": "Family Function Bus Rental Pune",
    "description": "Convenient bus rental services for family functions in Pune, such as anniversaries, reunions, and celebrations. We provide clean, safe buses with friendly drivers to accommodate groups of all sizes and ensure everyone travels comfortably."
  },
  {
    "name": "AC Bus for Events Pune",
    "description": "Air-conditioned bus rentals for various events in Pune, delivering a cool and comfortable travel experience regardless of the weather. Perfect for corporate events, weddings, and outdoor functions requiring reliable transportation."
  },
  {
    "name": "Large Group Transport Pune",
    "description": "Efficient transportation solutions for large groups in Pune attending events, ensuring everyone travels together with ease. Our fleet includes high-capacity buses with ample seating and safety features, ideal for festivals, conventions, and community gatherings."
  },
  {
    "name": "Bus Hire for Private Events",
    "description": "Tailored bus hire options for private events in Pune, including parties, family gatherings, and exclusive corporate functions. We offer customizable routes, flexible timings, and privacy-focused services to match your event needs."
  },
  {
    "name": "Non AC Event Bus Service",
    "description": "Affordable non-AC bus rentals for events in Pune, ideal for short-distance travel and budget-conscious groups. Our well-maintained buses provide a reliable and comfortable transport option without compromising safety."
  },
  {
    "name": "VIP Event Bus Rental Pune",
    "description": "Premium VIP bus rental services for high-profile events in Pune, featuring luxurious interiors, comfortable seating, and exclusive amenities. Perfect for transporting VIP guests, speakers, and dignitaries in style and comfort."
  },
  {
    "name": "Seminar Bus Transport Pune",
    "description": "Dedicated seminar bus transport services in Pune, ensuring smooth commute for attendees between hotels, conference centers, and seminar venues. Our buses are punctual, clean, and equipped to handle group travel efficiently."
  },
  {
    "name": "Mini Bus for Event Guests",
    "description": "Compact and convenient mini bus rentals for event guests in Pune, suitable for smaller groups or shuttle services within venue complexes. These buses provide easy access, comfort, and timely transportation for intimate or side events."
  }
],
"tableData": [
  ["Event Transport Bus Hire Pune", "Bus Booking for Conferences"],
  ["Birthday Party Bus Rental Pune", "Exhibition Bus Service Pune"],
  ["Musical Event Bus Hire", "Family Function Bus Rental Pune"],
  ["AC Bus for Events Pune", "Large Group Transport Pune"],
  ["Bus Hire for Private Events", "Non AC Event Bus Service"],
  ["VIP Event Bus Rental Pune", "Seminar Bus Transport Pune"],
  ["Mini Bus for Event Guests"]
],




 "whychoose": [
  {
    "WhyChooseheading": "Reliable Bus on Rent for Events in Pune",
    "WhyChoosedescription": "Vaishnavi Travels provides dependable bus rental services to ensure smooth transportation for all types of events in Pune."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Buses for Event Guests",
    "WhyChoosedescription": "Our buses offer ample seating and comfort, making travel easy and enjoyable for your event attendees."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Each bus is regularly serviced and sanitized to provide a safe and hygienic environment for passengers."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Fit Event Schedules",
    "WhyChoosedescription": "Choose from hourly, daily, or customized rental plans tailored to your event’s timing and guest count."
  },
  {
    "WhyChooseheading": "Professional Drivers with Local Knowledge",
    "WhyChoosedescription": "Our experienced drivers ensure timely pick-ups and drop-offs, familiar with Pune’s routes and traffic conditions."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Costs",
    "WhyChoosedescription": "Our pricing is all-inclusive, covering fuel, tolls, taxes, and driver allowances for stress-free budgeting."
  },
  {
    "WhyChooseheading": "Ideal for Corporate, Social, and Private Events",
    "WhyChoosedescription": "Perfect for conferences, weddings, parties, and any special event requiring group transport in Pune."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Seamless Coordination",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock assistance to help manage bookings and last-minute changes."
  }
]




























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide bus on rent for events in Pune?',
      answer: 'Yes, Vaishnavi Travels offers reliable bus rental services for all kinds of events in Pune, including weddings, conferences, concerts, exhibitions, and social gatherings. Our buses ensure convenient, safe, and timely transportation for your guests and participants.',
    },
    {
      question: 'What types of buses are available for event rentals?',
      answer: 'We have a diverse fleet including 17-seater tempo travellers, 27 and 32-seater minibuses, as well as larger 50-seater coaches. All vehicles are clean, air-conditioned, and equipped to handle large groups comfortably.',
    },
    {
      question: 'Can buses be hired for short durations during events?',
      answer: 'Absolutely. We offer flexible rental packages including hourly, half-day, full-day, and multi-day options to suit the duration of your event and transportation needs.',
    },
    {
      question: 'Is it possible to arrange multiple pickup and drop-off points?',
      answer: 'Yes, we can coordinate multiple pickup and drop locations within Pune or nearby areas to accommodate all your guests conveniently and ensure timely arrivals.',
    },
    {
      question: 'Are the buses suitable for both local and outstation event transportation?',
      answer: 'Yes, our buses and experienced drivers can manage local event transportation as well as outstation travel for destination events or extended guest transfers.',
    },
    {
      question: 'What safety measures are in place during event transportation?',
      answer: 'All our vehicles undergo regular maintenance and sanitation. Our drivers are trained professionals who follow all safety protocols, ensuring a secure and comfortable journey for your guests.',
    },
    {
      question: 'How can I book a bus on rent for my event in Pune?',
      answer: 'Booking is simple—reach out via our website, mobile app, or customer support hotline with your event details, guest count, and preferred timings. Our team will help design a transportation plan that fits your event perfectly.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Rohit Mehta",
    position: "Event Organizer",
    feedback:
      "Vaishnavi Travels made transportation for our corporate gala seamless. Their buses were punctual, clean, and comfortable, and the drivers were courteous and professional. They managed multiple pickup points efficiently, which helped our event run smoothly. Highly recommend their event transport services!",
    rating: 5,
  },
  {
    name: "Ms. Shreya Joshi",
    position: "Wedding Planner",
    feedback:
      "For our client’s wedding in Pune, Vaishnavi Travels provided excellent bus rental services. The buses were spacious and air-conditioned, perfect for transporting guests between venues. The drivers were polite and accommodating. Their team’s attention to detail and responsiveness made a big difference on the event day.",
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
  "name": "Bus on Rent for Event in Pune",
  "image": "https://vaishnavitravel.com/assets/images/event-bus-rental-pune.jpg",
  "description": "Rent buses for events in Pune with Vaishnavi Travels. Perfect for conferences, birthday parties, exhibitions, musical events, and family functions. AC and Non-AC buses available for comfortable group transport.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "2250"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6200",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-on-rent-for-event-in-pune"
  }
};


  return (
    <div>

<Helmet>
  <title>Bus on Rent for Event in Pune | Conference & Party Bus Hire | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Rent buses for events in Pune with Vaishnavi Travels. Perfect for conferences, birthday parties, exhibitions, musical events, and family functions. AC and Non-AC buses available for comfortable group transport."
  />
  <meta
    name="keywords"
    content="Event Transport Bus Hire Pune, Bus Booking for Conferences, Birthday Party Bus Rental Pune, Exhibition Bus Service Pune, Musical Event Bus Hire, Family Function Bus Rental Pune, AC Bus for Events Pune, Large Group Transport Pune, Bus Hire for Private Events, Non AC Event Bus Service, VIP Event Bus Rental Pune, Seminar Bus Transport Pune, Mini Bus for Event Guests"
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
              <img src='/images/keyword/10.jpg' alt='img'  className='img-fluid'/>
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

export default Busonrentforeventsinpune;