
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busbookingformarrieage() {



  const cardData =
  {
    keyword: ' Bus Booking for Marriage',
    heading: 'Vaishnavi Travels: Bus Booking for Marriage',
    headingDescription: 'Vaishnavi Travels offers dependable and affordable Bus Booking for Marriage in Pune, making wedding transportation simple and stress-free. Our buses are spacious, air-conditioned, and equipped with ample seating and luggage space to comfortably accommodate guests, relatives, and families. With professional drivers, punctual pickups, and flexible booking options, we ensure smooth travel for wedding functions, guest transfers, and outstation arrivals. Whether it’s a grand celebration or an intimate ceremony, Vaishnavi Travels guarantees safety, comfort, and reliability, so your guests can focus on enjoying the special moments while we take care of the journey.',

    top: 'Top Places to Visit in Pune with Vaishnavi Travels',

    "topPlaces": [
      {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada, built in 1732 by the Peshwas, is Pune’s most iconic fort palace. Once the seat of the Maratha Empire, its mighty gates, gardens, and ruins narrate tales of Maratha pride. Though partially destroyed by fire in 1828, its charm continues to draw thousands. The light-and-sound show in the evening brings alive the grandeur of Bajirao and Mastani. Visitors love exploring its historic corridors and courtyards. Shaniwar Wada is Pune’s proud heritage landmark."
      },
      {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace, built in 1892, is a majestic monument associated with India’s freedom struggle. Mahatma Gandhi, Kasturba Gandhi, and other leaders were imprisoned here during the Quit India Movement. Today, it houses a museum with Gandhi’s belongings and photographs. The palace’s Italian arches and sprawling gardens add architectural charm. Its calm and serene ambiance makes it a popular tourist spot. Aga Khan Palace is Pune’s historic and inspirational gem."
      },
      {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort, located 25 km from Pune, is famous for the 1670 battle fought by Tanaji Malusare for Chhatrapati Shivaji Maharaj. The fort sits atop a hill, offering trekking trails and panoramic views of the Sahyadris. Visitors explore bastions, temples, and memorials that echo Maratha bravery. Monsoon adds mist and waterfalls, making the trek even more scenic. Locals serve rustic delicacies like pithla-bhakri at the fort. Sinhagad is Pune’s blend of history, nature, and adventure."
      },
      {
        "title": "Dagdusheth Halwai Ganpati Temple",
        "description": "Shreemant Dagdusheth Halwai Ganpati Temple is Pune’s most revered shrine, dedicated to Lord Ganesha. Established more than 125 years ago, the temple houses a magnificent idol adorned with gold and jewels. During Ganesh Chaturthi, the temple becomes the epicenter of grand festivities. It is also renowned for its charitable and cultural initiatives. Devotees and tourists alike are drawn to its vibrant spiritual aura. Dagdusheth Temple is Pune’s divine and cultural heart."
      },
      {
        "title": "Pataleshwar Cave Temple",
        "description": "Pataleshwar Cave Temple, carved in the 8th century, is a rock-cut shrine dedicated to Lord Shiva. The temple features massive stone pillars, a sanctum, and a Nandi mandapa. Despite being in the city center, it offers peace and a spiritual retreat. Its architecture showcases ancient Indian craftsmanship. Evening prayers and chants enhance the temple’s mystical ambiance. Pataleshwar is Pune’s hidden spiritual heritage gem."
      },
      {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a cultural treasure housing over 20,000 artifacts collected by Dr. Dinkar Kelkar. Exhibits include ornaments, sculptures, musical instruments, and daily-use antiques. The recreated Mastani Mahal is a highlight of the museum. History enthusiasts and students find it highly educational and fascinating. The museum preserves traditions spanning centuries of Indian culture. It is Pune’s proud showcase of heritage and art."
      },
      {
        "title": "Parvati Hill and Temple",
        "description": "Parvati Hill, one of Pune’s oldest heritage landmarks, offers a panoramic view of the city. At the hilltop stands the Parvati Temple, dedicated to Lord Shiva and Goddess Parvati. Built during the Peshwa era, it also houses museums and smaller shrines. Visitors climb 103 steps to reach the temple, making it a mix of devotion and adventure. Sunrise and sunset views from here are mesmerizing. Parvati Hill is Pune’s sacred and scenic retreat."
      },
      {
        "title": "Osho Ashram",
        "description": "The Osho International Meditation Resort in Koregaon Park is Pune’s global hub for spirituality and wellness. Spread across lush gardens, it attracts seekers from all over the world. The ashram offers meditation sessions, yoga practices, and personal growth workshops. Japanese Zen gardens and peaceful meditation halls enhance the experience. It is a haven for peace, rejuvenation, and mindfulness. Osho Ashram is Pune’s international center of tranquility."
      },
      {
        "title": "Pu La Deshpande Garden (Okayama Friendship Garden)",
        "description": "Pu La Deshpande Garden, inspired by the Korakuen Garden in Japan, is Pune’s largest landscaped park. It features flowing streams, stone bridges, and lush green lawns. Families enjoy picnics, photography, and peaceful strolls in its serene setting. The garden symbolizes Indo-Japanese cultural friendship. Seasonal flowers and manicured spaces attract nature lovers. Pu La Deshpande Garden is Pune’s green paradise of calm and beauty."
      },
      {
        "title": "Khadakwasla Dam",
        "description": "Khadakwasla Dam, built on the Mutha River, is a popular weekend destination near Pune. The dam supplies water to the city while offering scenic views of hills and flowing waters. During monsoon, the overflowing dam creates spectacular sights. Street vendors sell hot corn and tea along the banks, adding to the charm. It also serves as the gateway to Sinhagad Fort. Khadakwasla is Pune’s refreshing natural retreat for families and travelers alike."
      }
    ],


    "services": [
      {
        "name": "Bus Rental for Wedding Guests",
        "description": "Premium bus rental services in Pune tailored specifically for transporting wedding guests. Our fleet includes both AC and non-AC options, ensuring a comfortable journey for all age groups. With trained chauffeurs, timely pickups, and spacious seating, guests can travel together from hotels to wedding venues and back. Ideal for large families and friend groups, making the commute part of the celebration."
      },
      {
        "name": "Wedding Bus Hire in Pune",
        "description": "Hassle-free wedding bus hire service in Pune offering flexible rental plans, round-trip options, and multi-location pickups. Whether you need transport for a Mehendi function or the wedding day, we provide clean, decorated buses with courteous drivers and GPS-enabled tracking. Choose from economy to luxury variants based on your budget and event size."
      },
      {
        "name": "Marriage Function Bus Booking",
        "description": "Simplify your marriage function travel logistics with our dedicated bus booking services in Pune. Our buses can be customized for bridal parties, groom’s family, or outstation guests. Services include route planning, flower decorations, and time-bound bookings for Sangeet, Haldi, or wedding ceremonies. Make group travel stress-free with experienced coordinators."
      },
      {
        "name": "AC Bus for Shaadi Guests",
        "description": "Fully air-conditioned buses for shaadi guests in Pune, providing cool and luxurious travel comfort regardless of the season. Buses come equipped with reclining seats, music systems, clean interiors, and large luggage space, ensuring a pleasant ride for guests dressed in wedding attire. Ideal for summer weddings and long-distance venue commutes."
      },
      {
        "name": "Non AC Wedding Bus Rental",
        "description": "Cost-effective non-AC bus rentals for weddings in Pune, ideal for short distances and large groups. These well-maintained buses provide excellent value without compromising on comfort and safety. Suitable for budget-conscious families organizing Baraats, receptions, or engagement ceremonies within the city limits."
      },
      {
        "name": "Deluxe Bus for Baraat",
        "description": "High-end deluxe buses specially prepared for Baraat processions and guest transport. These come with stylish interiors, sound systems, ambient lighting, and ample room for dancing or celebration en route. A great way to kick off the wedding procession with energy and elegance. Drivers are trained to handle festive convoys smoothly."
      },
      {
        "name": "Wedding Ceremony Bus Hire",
        "description": "Reliable wedding ceremony bus hire solutions in Pune, providing punctual services to ensure no delay in your special moments. Perfect for shuttling guests from hotels to the mandap or from the ceremony to the reception venue. Our support team works closely with event planners for flawless execution."
      },
      {
        "name": "Family Bus Booking for Marriage",
        "description": "Dedicated family buses for marriages in Pune that ensure the entire family stays together throughout the event journey. From pre-wedding functions to the wedding day and even post-wedding drop-offs, we provide round-the-clock availability, route flexibility, and onboard amenities like mobile charging and clean washrooms (select buses)."
      },
      {
        "name": "Wedding Transport Services Pune",
        "description": "End-to-end wedding transport services in Pune covering guest arrivals, hotel transfers, event commutes, and final drop-offs. We handle vehicle scheduling, driver coordination, and real-time monitoring. With a wide range of buses including 17-seater to 50-seater models, we cater to all types of guest lists efficiently and elegantly."
      },
      {
        "name": "Bus Hire for Wedding Function",
        "description": "Flexible and customizable bus hire options for wedding functions in Pune, whether it’s a daytime event or a late-night celebration. Buses are available on hourly or full-day rental basis, with decorations and event-specific branding available on request. A must-have solution for seamless guest transportation during multi-day weddings."
      },
      {
        "name": "Marriage Event Bus Booking Pune",
        "description": "Professional marriage event bus booking in Pune with instant confirmations, transparent pricing, and doorstep service. Our buses are regularly sanitized, come with courteous staff, and can be tracked via app or SMS. Book in advance or at short notice for hassle-free logistics during your special day."
      },
      {
        "name": "50 Seater Wedding Bus Rental",
        "description": "Spacious 50-seater bus rentals perfect for transporting large wedding parties or guests from different areas in Pune. These buses offer reclining seats, ample aisle space, and overhead luggage storage. Ideal for inter-city group movements, Baraats, or bringing in guests from the airport or railway station."
      },
      {
        "name": "Online Marriage Bus Hire Pune",
        "description": "Convenient online bus booking service for marriages in Pune, offering a user-friendly interface for selecting buses, comparing prices, and reserving vehicles instantly. Includes digital invoicing, customer support, and customizable add-ons like seat covers, decoration, and refreshments. Book anytime, anywhere with full transparency."
      },
      {
        "name": "Pune Wedding Guest Shuttle Service",
        "description": "Efficient guest shuttle service for weddings in Pune, designed to transport attendees between venues, hotels, and parking areas on a fixed schedule. Ideal for destination weddings or events spread across multiple locations. Shuttle buses can be branded with your wedding logo or theme colors, adding a unique touch."
      }
    ],
    "tableData": [
      ["Bus Rental for Wedding Guests", "Wedding Bus Hire in Pune"],
      ["Marriage Function Bus Booking", "AC Bus for Shaadi Guests"],
      ["Non AC Wedding Bus Rental", "Deluxe Bus for Baraat"],
      ["Wedding Ceremony Bus Hire", "Family Bus Booking for Marriage"],
      ["Wedding Transport Services Pune", "Bus Hire for Wedding Function"],
      ["Marriage Event Bus Booking Pune", "50 Seater Wedding Bus Rental"],
      ["Online Marriage Bus Hire Pune", "Pune Wedding Guest Shuttle Service"]
    ],




    "whychoose": [
      {
        "WhyChooseheading": "Reliable Bus Booking for Marriage Functions",
        "WhyChoosedescription": "Vaishnavi Travels offers dependable bus booking services for weddings, ensuring seamless transportation for your guests."
      },
      {
        "WhyChooseheading": "Spacious Buses for Wedding Guests",
        "WhyChoosedescription": "Our fleet includes large, comfortable buses ideal for transporting wedding guests conveniently and safely."
      },
      {
        "WhyChooseheading": "Well-Maintained and Decorated Buses Available",
        "WhyChoosedescription": "Each vehicle is regularly serviced and can be decorated as per the wedding theme for a festive experience."
      },
      {
        "WhyChooseheading": "Customizable Packages for Marriage Events",
        "WhyChoosedescription": "Choose from flexible rental plans—hourly, full-day, or multi-day—to match your wedding itinerary perfectly."
      },
      {
        "WhyChooseheading": "Professional Drivers for a Smooth Experience",
        "WhyChoosedescription": "Our experienced and courteous drivers ensure timely and safe travel for your family and guests on the big day."
      },
      {
        "WhyChooseheading": "Transparent Rates with No Hidden Charges",
        "WhyChoosedescription": "Enjoy peace of mind with clear pricing that includes fuel, tolls, taxes, and driver charges—no last-minute surprises."
      },
      {
        "WhyChooseheading": "Ideal for Pre-Wedding and Post-Wedding Transport",
        "WhyChoosedescription": "Whether it's a mehendi function, sangeet, or reception, our buses are perfect for group transport during all wedding events."
      },
      {
        "WhyChooseheading": "24/7 Support for Last-Minute Changes",
        "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer support to handle bookings, route changes, or any urgent requests."
      }
    ]





















  }










  const faqData = [
    [
      {
        question: 'Does Vaishnavi Travels provide bus booking services for marriages?',
        answer: 'Yes, Vaishnavi Travels offers reliable and spacious buses for marriage functions, perfect for transporting guests comfortably.',
      },
      {
        question: 'What types of buses are available for wedding bookings?',
        answer: 'We offer a variety of buses including 17, 32, and 50 seater options to accommodate small to large guest groups for weddings.',
      },
      {
        question: 'Are the buses suitable for long-distance wedding travel?',
        answer: 'Absolutely! Our buses are equipped for both local and outstation wedding travel, ensuring a smooth and comfortable ride.',
      },
      {
        question: 'Do buses come with decorations for marriage functions?',
        answer: 'Bus decoration services can be arranged on request, allowing you to match the vehicle with your wedding theme.',
      },
      {
        question: 'Is a driver provided with the wedding bus booking?',
        answer: 'Yes, all buses come with trained, uniformed, and courteous drivers to ensure your guests reach safely and on time.',
      },
      {
        question: 'How early should I book a bus for my wedding?',
        answer: 'We recommend booking at least 2-4 weeks in advance, especially during peak wedding seasons, to ensure availability.',
      },
      {
        question: 'Can I modify or cancel my wedding bus booking?',
        answer: 'Yes, we offer flexible modification and cancellation policies. Please contact our support team for details.',
      },
    ]
  ];

  const testimonials = [
    {
      name: "Mr. Rakesh Patil",
      position: "Groom’s Brother",
      feedback:
        "Vaishnavi Travels made our wedding transport seamless. The bus was clean, comfortable, and arrived right on time.",
      rating: 5,
    },
    {
      name: "Mrs. Kavita Joshi",
      position: "Event Planner",
      feedback:
        "Excellent service! The guests were very happy with the comfortable journey. Highly recommend Vaishnavi Travels for weddings.",
      rating: 5,
      style: "style-2", // optional alternate design
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
  "name": "Bus Booking for Marriage",
  "image": "https://vaishnavitravel.com/assets/images/wedding-bus-booking.jpg",
  "description": "Book bus rental for marriage functions in Pune with Vaishnavi Travels. AC & Non-AC buses available for wedding guests, baraat, and family transport. Hassle-free booking & 24/7 service.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "3274"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7500",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-booking-for-marriage"
  }
};





  return (
    <div>

<Helmet>
  <title>Bus Booking for Marriage | Wedding Bus Hire in Pune | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book bus rental for marriage functions in Pune with Vaishnavi Travels. AC & Non-AC buses available for wedding guests, baraat, and family transport. Hassle-free booking & 24/7 service."
  />
  <meta
    name="keywords"
    content="Bus Rental for Wedding Guests, Wedding Bus Hire in Pune, Marriage Function Bus Booking, AC Bus for Shaadi Guests, Non AC Wedding Bus Rental, Deluxe Bus for Baraat, Wedding Ceremony Bus Hire, Family Bus Booking for Marriage, Wedding Transport Services Pune, Bus Hire for Wedding Function, Marriage Event Bus Booking Pune, 50 Seater Wedding Bus Rental, Online Marriage Bus Hire Pune, Pune Wedding Guest Shuttle Service"
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
              <img src='/images/keyword/1.jpg' alt='img'  className='img-fluid'/>
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

export default Busbookingformarrieage;