
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busrentalsfortourpackages() {



  const cardData =
  {
    keyword: ' Bus Rental for Tour Packages',
    heading: 'Vaishnavi Travels: Bus Rental for Tour Packages',
    headingDescription: 'Vaishnavi Travels offers affordable and reliable Bus Rental for Tour Packages, making group travel comfortable and convenient for families, friends, schools, and corporate teams. Our buses are well-maintained with spacious seating, air-conditioning, and large luggage compartments, ensuring a smooth journey for both short city tours and long outstation trips. With professional drivers, on-time pickups, and customizable booking options, we make every tour package hassle-free. Whether it’s a religious yatra, holiday trip, weekend getaway, or multi-day sightseeing tour, Vaishnavi Travels guarantees safe, reliable, and enjoyable travel for all your tour package needs.',

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
    "name": "Pune Tour Bus Packages",
    "description": "Comprehensive Pune tour bus packages designed to cover popular local attractions and nearby destinations. Our packages include comfortable buses with experienced drivers, customizable itineraries, and options for both AC and non-AC vehicles to suit your group size and budget."
  },
  {
    "name": "Group Tour Bus Hire Pune",
    "description": "Reliable group tour bus hire services in Pune, perfect for family outings, friend groups, or organized tours. Buses come with spacious seating, safety features, and optional amenities like music systems and charging ports to enhance your travel experience."
  },
  {
    "name": "Holiday Bus Booking Pune",
    "description": "Easy and flexible holiday bus booking in Pune for leisure travelers and families. Our buses cater to short day trips as well as extended holiday tours, offering well-maintained vehicles and professional drivers committed to a comfortable journey."
  },
  {
    "name": "Bus Rental for Family Tours",
    "description": "Family-friendly bus rental services in Pune that prioritize comfort and safety. Whether it’s a weekend getaway or a longer vacation, our buses provide ample space for luggage and relaxing travel, making family tours enjoyable and hassle-free."
  },
  {
    "name": "Travel Agency Bus Hire Pune",
    "description": "Partner with us for travel agency bus hire services in Pune, offering reliable transportation solutions for organized tours and package holidays. We provide customizable bus options, on-time services, and support for multi-day travel itineraries."
  },
  {
    "name": "AC Bus for Sightseeing Packages",
    "description": "Comfortable air-conditioned buses available for sightseeing tours around Pune and nearby tourist spots. Our AC buses ensure a cool and relaxing travel experience, equipped with modern interiors and amenities for an enjoyable journey."
  },
  {
    "name": "Non AC Tour Bus Pune",
    "description": "Affordable non-AC tour bus rentals in Pune suitable for budget-conscious travelers and local sightseeing tours. These buses are well-maintained, spacious, and provide safe transport options for small to medium-sized groups."
  },
  {
    "name": "Multi-Day Tour Bus Rental",
    "description": "Flexible multi-day tour bus rental services in Pune for extended trips covering multiple destinations. Our buses come with comfortable seating, ample storage, and professional drivers experienced in long-distance travel to ensure a smooth trip."
  },
  {
    "name": "32/40 Seater Tour Bus Pune",
    "description": "Versatile 32 and 40 seater tour buses available in Pune, ideal for medium to large groups traveling together. These buses provide spacious seating, safety features, and can be customized with entertainment and refreshment options for a pleasant tour experience."
  },
  {
    "name": "Corporate Tour Package Bus",
    "description": "Exclusive corporate tour package bus rentals in Pune tailored for business groups and company outings. We offer punctual services, well-maintained buses, and professional drivers to make corporate tours efficient and comfortable."
  },
  {
    "name": "Religious Tour Bus Rental Pune",
    "description": "Specialized religious tour bus rentals in Pune catering to pilgrimages and spiritual group travels. Our buses offer comfortable seating and convenient amenities for long-distance religious tours, ensuring a peaceful and safe journey."
  },
  {
    "name": "Hill Station Tour Bus Hire Pune",
    "description": "Scenic hill station tour bus hire services from Pune, ideal for trips to popular hill destinations. Our buses are equipped to handle hilly terrain, with comfortable interiors and reliable drivers to ensure a safe and enjoyable ride."
  },
  {
    "name": "Tourist Group Bus Hire Pune",
    "description": "Efficient tourist group bus hire services in Pune for organized sightseeing and group excursions. Buses are spacious, well-maintained, and come with expert drivers knowledgeable about local tourist spots and routes."
  }
],
"tableData": [
  ["Pune Tour Bus Packages", "Group Tour Bus Hire Pune"],
  ["Holiday Bus Booking Pune", "Bus Rental for Family Tours"],
  ["Travel Agency Bus Hire Pune", "AC Bus for Sightseeing Packages"],
  ["Non AC Tour Bus Pune", "Multi-Day Tour Bus Rental"],
  ["32/40 Seater Tour Bus Pune", "Corporate Tour Package Bus"],
  ["Religious Tour Bus Rental Pune", "Hill Station Tour Bus Hire Pune"],
  ["Tourist Group Bus Hire Pune"]
],




 "whychoose": [
  {
    "WhyChooseheading": "Reliable Bus Rental for Tour Packages",
    "WhyChoosedescription": "Vaishnavi Travels offers dependable bus rental services tailored for tour packages, ensuring comfortable group travel."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Buses for Tour Groups",
    "WhyChoosedescription": "Our buses provide ample seating and amenities, making your sightseeing and travel experience enjoyable and relaxing."
  },
  {
    "WhyChooseheading": "Well-Maintained Fleet for Safe Travel",
    "WhyChoosedescription": "All vehicles are regularly serviced and cleaned, guaranteeing safety and hygiene throughout your tour."
  },
  {
    "WhyChooseheading": "Flexible Rental Options to Match Your Itinerary",
    "WhyChoosedescription": "Choose from hourly, daily, or customized rental packages designed to suit your tour schedule and destinations."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Popular Tour Routes",
    "WhyChoosedescription": "Our professional drivers are knowledgeable about tourist destinations and ensure timely, comfortable travel."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Enjoy all-inclusive pricing that covers fuel, tolls, driver allowance, and taxes, making budgeting easy and worry-free."
  },
  {
    "WhyChooseheading": "Ideal for Family Vacations, Group Tours, and Pilgrimages",
    "WhyChoosedescription": "Perfect for various types of tours, whether family vacations, group travel, or spiritual journeys."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Hassle-Free Bookings",
    "WhyChoosedescription": "Vaishnavi Travels provides round-the-clock assistance to help you plan, book, and manage your tour transport."
  }
]



























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer bus rental services for tour packages?',
      answer: 'Yes, Vaishnavi Travels provides comprehensive bus rental services tailored for various tour packages. Whether you are planning local sightseeing, outstation tours, or multi-day vacations, we have a fleet of well-maintained buses to suit your group size and travel needs.',
    },
    {
      question: 'What types of buses are available for tour package rentals?',
      answer: 'We offer a wide range of buses including 17-seater tempo travellers, 27 and 32-seater minibuses, and large 50-seater coaches. Our buses are equipped with modern amenities like air conditioning, comfortable seating, ample luggage space, and on some models, charging ports and entertainment systems.',
    },
    {
      question: 'Can I customize the itinerary for my tour package?',
      answer: 'Absolutely! We encourage customers to share their preferred travel itinerary, stops, and timings. Our team will work closely with you to create a customized bus rental plan that fits your tour package perfectly.',
    },
    {
      question: 'Are your buses suitable for long-distance travel?',
      answer: 'Yes, our buses are regularly serviced and maintained to ensure safety and comfort on long-distance journeys. Experienced drivers familiar with highway routes handle your trip to provide a smooth and hassle-free travel experience.',
    },
    {
      question: 'What is included in the bus rental fare for tour packages?',
      answer: 'The rental fare typically includes the vehicle hire, professional driver, and fuel. Additional costs such as tolls, parking, taxes, and overnight driver allowances may apply depending on the tour package details.',
    },
    {
      question: 'Can you accommodate last-minute bookings for tour packages?',
      answer: 'While we recommend booking in advance to guarantee availability, we do our best to accommodate last-minute requests based on vehicle availability. Contact our customer support for assistance.',
    },
    {
      question: 'How do I book a bus rental for a tour package?',
      answer: 'You can book through our website, mobile app, or by contacting our customer support team. Provide your tour details, group size, and preferred travel dates, and we will assist you in selecting the best vehicle and package.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Arjun Rao",
    position: "Travel Enthusiast",
    feedback:
      "We booked a bus from Vaishnavi Travels for our family tour to Goa, and it was an amazing experience. The bus was very comfortable, clean, and the driver was professional and punctual. The flexibility in itinerary planning really helped us make the most of our trip. Highly recommend their services for any tour package.",
    rating: 5,
  },
  {
    name: "Ms. Sneha Kapoor",
    position: "Tour Organizer",
    feedback:
      "Vaishnavi Travels provided excellent bus rental services for our group tour to Lonavala and Matheran. The vehicles were spacious and well-maintained, and the drivers were friendly and knowledgeable about the routes. Their team was responsive and helped us customize the itinerary seamlessly. A reliable choice for any tour package.",
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
  "name": "Bus Rental for Tour Packages",
  "image": "https://vaishnavitravel.com/assets/images/tour-package-bus-rental.jpg",
  "description": "Book bus rental for tour packages in Pune with Vaishnavi Travels. Ideal for family holidays, group tours, sightseeing, and multi-day trips. Choose from AC and Non-AC buses with professional drivers for a comfortable journey.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "3750"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7500",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-rental-for-tour-packages"
  }
};



  return (
    <div>

<Helmet>
  <title>Bus Rental for Tour Packages | Group & Family Tour Buses | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book bus rental for tour packages in Pune with Vaishnavi Travels. Ideal for family holidays, group tours, sightseeing, and multi-day trips. Choose from AC and Non-AC buses with professional drivers for a comfortable journey."
  />
  <meta
    name="keywords"
    content="Pune Tour Bus Packages, Group Tour Bus Hire Pune, Holiday Bus Booking Pune, Bus Rental for Family Tours, Travel Agency Bus Hire Pune, AC Bus for Sightseeing Packages, Non AC Tour Bus Pune, Multi-Day Tour Bus Rental, 32/40 Seater Tour Bus Pune, Corporate Tour Package Bus, Religious Tour Bus Rental Pune, Hill Station Tour Bus Hire Pune, Tourist Group Bus Hire Pune"
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
              <img src='/images/keyword/9.jpg' alt='img'  className='img-fluid'/>
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

export default Busrentalsfortourpackages;