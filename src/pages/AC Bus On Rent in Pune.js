
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Acbusonrentinpune() {



  const cardData =
  {
    keyword: ' AC Bus On Rent in Pune',
    heading: 'Vaishnavi Travels: AC Bus On Rent in Pune',
    headingDescription: 'Vaishnavi Travels provides premium and affordable AC Bus on Rent in Pune, perfect for weddings, corporate outings, school trips, and long-distance tours. Our air-conditioned buses are well-maintained with plush seating, spacious interiors, and ample luggage capacity, ensuring a cool and comfortable journey even during peak summers. With professional drivers, timely pickups, and flexible booking options, we make group travel seamless and stress-free. Whether it’s a family function, religious yatra, or outstation holiday, Vaishnavi Travels guarantees safe, reliable, and luxurious AC bus rental services in Pune for every occasion.',

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
    "name": "AC Bus Hire Pune",
    "description": "Premium air-conditioned bus hire services in Pune offering cool and comfortable travel for groups of all sizes. Perfect for local travel, corporate outings, and family trips, our AC buses feature modern interiors, reclining seats, and professional drivers to ensure a smooth and enjoyable journey in any weather."
  },
  {
    "name": "Air Conditioned Bus Rental Pune",
    "description": "Reliable air-conditioned bus rentals in Pune designed for both short and long-distance travel. Our fleet includes well-maintained buses equipped with advanced cooling systems, spacious seating, and onboard amenities, providing a luxurious and hassle-free travel experience for tourists, corporate groups, and families alike."
  },
  {
    "name": "AC Wedding Bus Pune",
    "description": "Specialized air-conditioned wedding bus rental services in Pune to transport guests comfortably during all wedding events. These buses come with elegant interiors, ample luggage space, and courteous drivers, making them an excellent choice for ceremonies, receptions, and Baraat processions under Pune’s warm climate."
  },
  {
    "name": "AC Tour Bus Rental Pune",
    "description": "Comfortable and fully air-conditioned tour bus rentals in Pune, ideal for sightseeing trips, multi-day excursions, and group tours. Our AC buses offer plush seating, large windows for scenic views, and reliable services, ensuring a pleasant and refreshing travel experience throughout your journey."
  },
  {
    "name": "AC Bus for School Trips",
    "description": "Safe and air-conditioned bus rental services for school trips in Pune, providing a comfortable environment for students during excursions and educational tours. Our buses are equipped with child safety features, clean interiors, and driven by experienced, background-checked chauffeurs to ensure peace of mind for parents and schools."
  },
  {
    "name": "Luxury AC Bus Hire Pune",
    "description": "High-end luxury air-conditioned bus hire services in Pune with premium interiors, entertainment systems, and extra legroom. Ideal for VIP corporate events, exclusive tours, and upscale family outings, these buses guarantee a first-class travel experience with utmost comfort and style."
  },
  {
    "name": "40 Seater AC Bus Pune",
    "description": "Spacious 40-seater air-conditioned buses available for rent in Pune, perfect for medium-sized groups. These buses combine comfort with capacity, featuring ergonomic seating, efficient air conditioning, and ample storage space for luggage, making them suitable for corporate travel, school trips, and family tours."
  },
  {
    "name": "45 Seater AC Bus Booking Pune",
    "description": "Book 45-seater air-conditioned buses in Pune for large groups needing comfortable and cool transportation. Our buses provide smooth rides, safety features, and onboard amenities like charging points and entertainment systems, making them an excellent choice for outstation trips, weddings, and corporate events."
  },
  {
    "name": "AC Bus for Corporate Events",
    "description": "Specialized air-conditioned bus rental services for corporate events in Pune, ensuring timely and comfortable transport for employees and guests. Our AC buses come with professional drivers, easy booking options, and flexible scheduling to meet the demands of business meetings, seminars, and company outings."
  },
  {
    "name": "AC Family Bus Rental Pune",
    "description": "Family-friendly air-conditioned bus rentals in Pune designed to provide comfort and convenience during family outings and celebrations. These buses offer spacious seating, climate control, and safety features, making group travel enjoyable for all age groups including children and elderly family members."
  },
  {
    "name": "Pune to Outstation AC Bus Hire",
    "description": "Reliable and comfortable AC bus rental services for outstation trips departing from Pune. These buses are ideal for long-distance travel to nearby cities and tourist destinations, equipped with spacious seats, air conditioning, and professional drivers to ensure a safe and refreshing journey."
  },
  {
    "name": "AC Bus for Marriage Ceremony",
    "description": "Elegant air-conditioned bus services for marriage ceremonies in Pune, offering smooth and stylish transportation for wedding guests. Perfect for shuttling attendees between venues, hotels, and event locations while ensuring maximum comfort regardless of weather conditions."
  },
  {
    "name": "Group AC Bus Rental Pune",
    "description": "Efficient air-conditioned group bus rental services in Pune catering to various group sizes and travel needs. Whether for corporate events, family tours, or special occasions, our AC buses provide reliable, comfortable, and well-maintained vehicles to ensure a pleasant travel experience."
  }
],
"tableData": [
  ["AC Bus Hire Pune", "Air Conditioned Bus Rental Pune"],
  ["AC Wedding Bus Pune", "AC Tour Bus Rental Pune"],
  ["AC Bus for School Trips", "Luxury AC Bus Hire Pune"],
  ["40 Seater AC Bus Pune", "45 Seater AC Bus Booking Pune"],
  ["AC Bus for Corporate Events", "AC Family Bus Rental Pune"],
  ["Pune to Outstation AC Bus Hire", "AC Bus for Marriage Ceremony"],
  ["Group AC Bus Rental Pune"]
],




 "whychoose": [
  {
    "WhyChooseheading": "Comfortable AC Bus On Rent in Pune",
    "WhyChoosedescription": "Vaishnavi Travels offers premium AC bus rentals in Pune, ensuring a cool and comfortable journey for groups of all sizes."
  },
  {
    "WhyChooseheading": "Spacious and Air-Conditioned Seating",
    "WhyChoosedescription": "Our AC buses provide ample legroom and climate-controlled interiors for a refreshing travel experience."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Fleet",
    "WhyChoosedescription": "Each bus is regularly serviced and sanitized to maintain high standards of hygiene and reliability."
  },
  {
    "WhyChooseheading": "Flexible Rental Plans to Suit Your Schedule",
    "WhyChoosedescription": "Choose from hourly, daily, or multi-day rental options tailored to your travel itinerary and group size."
  },
  {
    "WhyChooseheading": "Professional Drivers with Local Route Knowledge",
    "WhyChoosedescription": "Our experienced drivers ensure safe, timely, and courteous service across Pune and nearby destinations."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "Our all-inclusive pricing covers fuel, tolls, taxes, and driver allowance for a hassle-free rental experience."
  },
  {
    "WhyChooseheading": "Ideal for Corporate Events, Weddings, and Tours",
    "WhyChoosedescription": "Perfect for any occasion requiring comfortable and reliable AC bus transportation."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Seamless Booking",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock assistance to help you book and manage your AC bus rental with ease."
  }
]





























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer AC bus rental services in Pune?',
      answer: 'Yes, Vaishnavi Travels provides premium AC bus rental services in Pune, ensuring a comfortable and cool journey for groups of all sizes. Our air-conditioned buses are perfect for both short city rides and long-distance travels.',
    },
    {
      question: 'What types of AC buses are available for rent?',
      answer: 'We offer a wide range of AC buses including 17-seater tempo travellers, 27 and 32-seater minibuses, and large 50-seater coaches. All our AC buses are well-maintained, clean, and equipped with modern amenities to enhance passenger comfort.',
    },
    {
      question: 'Are AC buses suitable for all weather conditions?',
      answer: 'Absolutely. Our AC buses provide a comfortable travel experience regardless of Pune’s climate, keeping passengers cool during hot weather and ensuring a pleasant environment throughout the journey.',
    },
    {
      question: 'Can AC buses be hired for corporate events, weddings, and tours?',
      answer: 'Yes, our AC buses are ideal for a variety of occasions including corporate events, weddings, school trips, and outstation tours. We offer flexible rental packages tailored to your event and travel needs.',
    },
    {
      question: 'What is included in the rental fare for AC buses?',
      answer: 'The rental fare includes the AC bus, a professional driver, and fuel. Additional charges may apply for tolls, parking, taxes, and overnight allowances depending on the trip duration and route.',
    },
    {
      question: 'How early should I book an AC bus for rent in Pune?',
      answer: 'To ensure availability, especially during peak seasons, we recommend booking at least 1 to 2 weeks in advance. We also accommodate last-minute bookings based on vehicle availability.',
    },
    {
      question: 'How can I book an AC bus on rent with Vaishnavi Travels?',
      answer: 'Booking is easy via our website, mobile app, or by contacting our customer support team. Provide your trip details, group size, and preferred dates to receive personalized options and pricing.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Amit Kulkarni",
    position: "Corporate Manager",
    feedback:
      "We hired an AC bus from Vaishnavi Travels for our company outing, and the experience was fantastic. The bus was spacious, air-conditioned, and very comfortable. The driver was professional and punctual, ensuring a smooth journey. Their service exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Ms. Neha Joshi",
    position: "Event Coordinator",
    feedback:
      "Vaishnavi Travels provided excellent AC bus rental services for our wedding guests. The buses were clean, well-maintained, and the air conditioning worked perfectly even in Pune’s hot weather. The drivers were courteous and helped make our event hassle-free. Highly recommended!",
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
  "name": "AC Bus On Rent in Pune",
  "image": "https://vaishnavitravel.com/assets/images/ac-bus-rental-pune.jpg",
  "description": "Book AC bus on rent in Pune with Vaishnavi Travels. Perfect for weddings, school trips, corporate events, and outstation travel. Luxury 40-45 seater AC buses with experienced drivers for a comfortable journey.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "2980"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6500",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/ac-bus-on-rent-in-pune"
  }
};




  return (
    <div>


<Helmet>
  <title>AC Bus On Rent in Pune | Luxury & Comfortable AC Bus Hire | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book AC bus on rent in Pune with Vaishnavi Travels. Perfect for weddings, school trips, corporate events, and outstation travel. Luxury 40-45 seater AC buses with experienced drivers for a comfortable journey."
  />
  <meta
    name="keywords"
    content="AC Bus Hire Pune, Air Conditioned Bus Rental Pune, AC Wedding Bus Pune, AC Tour Bus Rental Pune, AC Bus for School Trips, Luxury AC Bus Hire Pune, 40 Seater AC Bus Pune, 45 Seater AC Bus Booking Pune, AC Bus for Corporate Events, AC Family Bus Rental Pune, Pune to Outstation AC Bus Hire, AC Bus for Marriage Ceremony, Group AC Bus Rental Pune"
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
              <img src='/images/keyword/12.jpg' alt='img'  className='img-fluid'/>
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

export default Acbusonrentinpune;