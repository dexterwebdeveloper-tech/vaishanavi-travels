
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Urbaniaonrentinpune() {



  const cardData =
  {
    keyword: ' Urbania on Rent in Pune',
    heading: 'Vaishnavi Travels: Urbania on Rent in Pune',
    headingDescription: 'Vaishnavi Travels offers affordable and reliable Urbania on Rent in Pune, ideal for weddings, corporate trips, family outings, school excursions, and long-distance tours. Our Force Urbania is well-maintained with spacious push-back seating, strong air-conditioning, modern interiors, and ample luggage space, ensuring a smooth and comfortable journey for all passengers. With experienced chauffeurs, timely pickups, and flexible booking options, we make group travel hassle-free and convenient. Whether it’s a local ride, religious yatra, weekend picnic, or outstation holiday, Vaishnavi Travels guarantees safe, reliable, and comfortable Urbania rental services in Pune.',

    top: 'Top Places to Visit in Pune with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Shaniwar Wada",
    "description": "Shaniwar Wada, built in 1732 by the Peshwas, is Pune’s most iconic fort palace and a proud reminder of Maratha glory. Once the political seat of the Maratha Empire, it features massive gates, gardens, and ancient ruins. Though partially destroyed by fire in 1828, its aura still captivates visitors. The evening light-and-sound show brings alive tales of Bajirao and Mastani. Tourists explore its courtyards, fountains, and hidden pathways. Shaniwar Wada is Pune’s historic and cultural crown jewel."
  },
  {
    "title": "Aga Khan Palace",
    "description": "The Aga Khan Palace, built in 1892, is a majestic monument tied to India’s freedom struggle. It served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other leaders during the Quit India Movement. The palace today houses a museum with Gandhi’s personal belongings, photos, and letters. Its sprawling gardens and arches create a serene retreat. Tourists and students come here to connect with history and patriotism. Aga Khan Palace is Pune’s inspirational heritage site of sacrifice and pride."
  },
  {
    "title": "Sinhagad Fort",
    "description": "Sinhagad Fort, located 25 km from Pune, is a hilltop stronghold famous for the 1670 battle where Tanaji Malusare fought for Chhatrapati Shivaji Maharaj. Trekkers climb to the fort for breathtaking views of the Sahyadri ranges. Inside, visitors explore bastions, temples, and memorials echoing Maratha bravery. Monsoon adds misty waterfalls and lush greenery to the trek. Local villagers serve traditional pithla-bhakri, adding flavor to the experience. Sinhagad Fort is Pune’s mix of history, nature, and adventure."
  },
  {
    "title": "Dagdusheth Halwai Ganpati Temple",
    "description": "The Shreemant Dagdusheth Halwai Ganpati Temple is Pune’s most revered shrine, dedicated to Lord Ganesha. The magnificent idol is adorned with gold and jewels, drawing thousands daily. During Ganesh Chaturthi, the temple becomes the epicenter of colorful festivities. Known for its charitable and cultural contributions, it is a hub of devotion and service. Devotees feel immense spiritual energy in its presence. Dagdusheth Ganpati Temple is Pune’s spiritual and cultural heartbeat."
  },
  {
    "title": "Pataleshwar Cave Temple",
    "description": "The Pataleshwar Cave Temple, carved in the 8th century, is a rock-cut shrine dedicated to Lord Shiva. It features large stone pillars, sanctum chambers, and a Nandi mandapa. Despite being located in the busy city center, it provides peace and meditation. Evening chants create a mystical ambiance. The temple is admired for its ancient craftsmanship and simplicity. Pataleshwar Cave Temple is Pune’s hidden spiritual heritage gem."
  },
  {
    "title": "Raja Dinkar Kelkar Museum",
    "description": "The Raja Dinkar Kelkar Museum is a treasure trove of over 20,000 artifacts collected by Dr. Dinkar Kelkar. Its exhibits include ornaments, musical instruments, sculptures, and everyday antiques from across India. The recreated Mastani Mahal is a highlight for history lovers. Students and tourists find the museum both educational and fascinating. It preserves centuries of Indian artistry under one roof. Raja Dinkar Kelkar Museum is Pune’s proud showcase of culture and tradition."
  },
  {
    "title": "Parvati Hill and Temple",
    "description": "Parvati Hill, one of Pune’s oldest landmarks, offers a panoramic view of the city. At the top stands the Parvati Temple dedicated to Lord Shiva and Goddess Parvati. Smaller shrines and museums nearby add cultural richness. Pilgrims climb 103 steps to reach the temple, blending devotion with fitness. Sunrise and sunset views from here are truly mesmerizing. Parvati Hill is Pune’s sacred and scenic retreat."
  },
  {
    "title": "Osho Ashram",
    "description": "The Osho International Meditation Resort in Koregaon Park is Pune’s global wellness hub. Spread across lush gardens, it attracts seekers from all over the world. The ashram offers meditation techniques, yoga, and personal growth workshops. Its Japanese Zen gardens and serene halls create a peaceful environment. Beyond spirituality, it is also a rejuvenation retreat for modern lifestyles. Osho Ashram is Pune’s international destination for peace and mindfulness."
  },
  {
    "title": "Pu La Deshpande Garden",
    "description": "Pu La Deshpande Garden, also known as Okayama Friendship Garden, is Pune’s largest landscaped park inspired by Japan’s Korakuen Garden. It features flowing streams, stone bridges, and manicured lawns. Families enjoy picnics, photography, and peaceful walks here. The garden also symbolizes Indo-Japanese friendship and cultural ties. Seasonal flowers add vibrant beauty throughout the year. Pu La Deshpande Garden is Pune’s green paradise of tranquility."
  },
  {
    "title": "Khadakwasla Dam",
    "description": "Khadakwasla Dam, built on the Mutha River, is a popular weekend retreat near Pune. It supplies water to the city while offering scenic views of hills and flowing waters. During monsoon, the overflowing dam creates a mesmerizing spectacle. Families enjoy roasted corn and tea from roadside stalls along the banks. It also serves as the gateway to Sinhagad Fort treks. Khadakwasla Dam is Pune’s refreshing natural escape for relaxation."
  }
],


      "services": [
    {
      "name": "Urbania Rental Services Pune",
      "description": "Reliable and flexible Urbania rental services in Pune, offering well-maintained 13 and 17 seater vans suitable for city travel, outstation trips, and special occasions. Our fleet includes both AC and non-AC vehicles equipped with comfortable seating, safety features, and professional drivers. Whether for business, leisure, or family use, we ensure timely pickups, clean interiors, and affordable pricing tailored to your travel needs."
    },
    {
      "name": "Force Urbania Van Hire Pune",
      "description": "Hire a Force Urbania van in Pune for a robust and comfortable travel experience. Known for its durability and spacious interiors, this van is ideal for group travel, corporate events, and long-distance journeys. Our Force Urbania vans come with experienced drivers who are familiar with Pune’s roads and outstation routes, ensuring safe and smooth transportation for all occasions."
    },
    {
      "name": "13/17 Seater Urbania with Driver",
      "description": "Book 13 or 17 seater Urbania vans with professional drivers included, perfect for hassle-free group travel in and around Pune. Our drivers are courteous, well-trained, and knowledgeable about the best routes, ensuring punctuality and comfort. Whether for airport transfers, corporate outings, school trips, or family vacations, this service offers convenience and safety."
    },
    {
      "name": "Urbania Outstation Trip Pune",
      "description": "Plan your outstation trips from Pune with our Urbania vans designed for long-distance travel. Featuring ample legroom, efficient air conditioning, and secure luggage space, these vans provide a comfortable environment for journeys to hill stations, religious sites, or coastal destinations. Packages include driver allowances, fuel management, and multi-day options for maximum flexibility."
    },
    {
      "name": "Urbania for Events Pune",
      "description": "Make your events in Pune memorable and smoothly organized with our Urbania van rentals. Ideal for weddings, corporate seminars, exhibitions, and social gatherings, these vans offer spacious interiors, on-time service, and optional decoration or branding. Our dedicated drivers ensure professional conduct and assistance throughout the event duration."
    },
    {
      "name": "Corporate Urbania Van Pune",
      "description": "Elevate corporate travel with our Urbania vans tailored for business clients in Pune. Featuring Wi-Fi, charging ports, and comfortable seating, these vans are suited for employee transport, client visits, and conference transfers. We offer flexible scheduling, monthly rentals, and branding options to align with your company’s image and travel requirements."
    },
    {
      "name": "AC Urbania Van Booking Pune",
      "description": "Stay cool and comfortable with our air-conditioned Urbania vans available for booking across Pune. Perfect for summer travel, airport transfers, and long-distance trips, these vans feature adjustable AC vents, ergonomic seating, and a quiet cabin environment. Booking is easy with online options, and our drivers prioritize your comfort and safety."
    },
    {
      "name": "Urbania Family Van Hire Pune",
      "description": "Enjoy quality family time with our Urbania family van hire service in Pune. Equipped with child safety features, ample luggage space, and entertainment options, these vans are ideal for temple visits, weekend getaways, and city tours. Our courteous drivers ensure a pleasant travel experience, accommodating stops and route preferences to suit your family’s needs."
    },
    {
      "name": "Urbania City Travel Pune",
      "description": "Navigate Pune effortlessly with our Urbania vans designed for city travel. Whether for shopping trips, sightseeing, or daily commutes, these vans provide comfort and convenience with easy boarding, spacious interiors, and professional drivers who know Pune’s traffic patterns. Flexible booking options include hourly rentals and multi-day city travel packages."
    },
    {
      "name": "Long Distance Urbania Rental",
      "description": "Our long-distance Urbania rental service caters to extended trips beyond Pune, offering reliable and comfortable transport for pilgrimages, vacations, and business tours. Vans come with enhanced suspension, spacious seating, and onboard amenities to make long journeys enjoyable. Drivers are experienced with highway routes and provide timely support throughout the trip."
    },
    {
      "name": "Group Urbania Trip Pune",
      "description": "Organize group trips with ease using our Urbania vans in Pune, perfect for corporate outings, school excursions, or social clubs. We provide multi-van dispatch options, group discounts, and coordinated pick-up/drop-off services to ensure smooth travel. Each vehicle is sanitized, GPS-enabled, and equipped with safety features to provide peace of mind during group travel."
    },
    {
      "name": "Book Urbania Online Pune",
      "description": "Conveniently book your Urbania van online in Pune with our easy-to-use platform. Choose your vehicle type, trip details, and add special requirements for weddings, tours, or corporate events. Our secure booking system offers instant confirmation, flexible payment options, and customer support to assist with any changes or queries."
    },
    {
      "name": "Urbania for School Trips",
      "description": "Ensure safe and comfortable transport for school trips with our Urbania vans in Pune. Equipped with seat belts, first aid kits, and verified drivers, these vans prioritize child safety and comfort. Ideal for educational tours, sports events, and inter-school competitions, our service offers real-time tracking and punctual pick-up/drop-off schedules for a stress-free experience."
    }
  ],
  "tableData": [
    ["Urbania Rental Services Pune", "Force Urbania Van Hire Pune"],
    ["13/17 Seater Urbania with Driver", "Urbania Outstation Trip Pune"],
    ["Urbania for Events Pune", "Corporate Urbania Van Pune"],
    ["AC Urbania Van Booking Pune", "Urbania Family Van Hire Pune"],
    ["Urbania City Travel Pune", "Long Distance Urbania Rental"],
    ["Group Urbania Trip Pune", "Book Urbania Online Pune"],
    ["Urbania for School Trips"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Urbania on Rent in Pune",
    "WhyChoosedescription": "Vaishnavi Travels offers reliable and comfortable Force Urbania vans on rent in Pune, perfect for group travel, corporate events, and family outings."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Seating",
    "WhyChoosedescription": "Our Urbania vans provide ample legroom, cushioned seats, and air conditioning to ensure a pleasant journey for all passengers."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Each Urbania vehicle is regularly serviced and thoroughly cleaned to guarantee hygiene and safety."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our trained drivers ensure safe, punctual, and courteous service throughout your trip."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages",
    "WhyChoosedescription": "Choose from hourly, daily, or multi-day rental options tailored to your travel needs and group size."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "Our pricing includes fuel, tolls, taxes, and driver allowance for a hassle-free rental experience."
  },
  {
    "WhyChooseheading": "Ideal for Corporate, Family, and Group Travel",
    "WhyChoosedescription": "Perfect for office outings, family trips, airport transfers, and sightseeing tours within Pune and nearby areas."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Easy Booking",
    "WhyChoosedescription": "Our dedicated support team is available round-the-clock to assist with bookings, itinerary changes, and travel inquiries."
  }
]

















  }




const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer 13 seater Force Urbania on rent in Pune?',
      answer: 'Yes, Vaishnavi Travels provides 13 seater Force Urbania vehicles on rent in Pune, ideal for group travel, corporate transfers, family outings, and special events within the city.',
    },
    {
      question: 'What are the key features of the 13 seater Force Urbania available for rent in Pune?',
      answer: 'The 13 seater Force Urbania comes with spacious seating, air-conditioning, comfortable legroom, modern interiors, and ample luggage space to ensure a comfortable ride in and around Pune.',
    },
    {
      question: 'Are the Force Urbania vehicles well-maintained and driven by professional drivers?',
      answer: 'Absolutely! All vehicles are regularly serviced and maintained. Rentals include experienced and courteous drivers familiar with Pune city and nearby routes.',
    },
    {
      question: 'What is the approximate rental cost for a 13 seater Force Urbania in Pune?',
      answer: 'Rental costs generally start around ₹3,500 for local half-day trips. Pricing varies depending on duration, distance, and any additional services requested.',
    },
    {
      question: 'Can I book the 13 seater Force Urbania for outstation trips from Pune?',
      answer: 'Yes, Vaishnavi Travels offers outstation packages for day trips and multi-day journeys outside Pune with clear and transparent pricing.',
    },
    {
      question: 'How far in advance should I book a 13 seater Force Urbania in Pune?',
      answer: 'It is advisable to book at least 2-3 days ahead, especially during weekends and peak travel seasons, to secure your booking.',
    },
    {
      question: 'Is flexible pickup and drop-off available in Pune?',
      answer: 'Yes, flexible pickup and drop locations are provided within Pune and nearby areas to best suit your travel plans.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Amit Kulkarni",
    position: "Corporate Client",
    feedback:
      "We rented a 13 seater Force Urbania from Vaishnavi Travels for a business trip in Pune. The vehicle was clean, comfortable, and the driver was professional and punctual. Excellent service!",
    rating: 5,
  },
  {
    name: "Ms. Priya Shah",
    position: "Family Traveler",
    feedback:
      "The 13 seater Urbania was perfect for our family outing in Pune. Spacious and well-maintained vehicle with a courteous driver made our trip very enjoyable.",
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
  "name": "Urbania on Rent in Pune",
  "image": "https://vaishnavitravel.com/assets/images/urbania-rental-pune.jpg",
  "description": "Reliable Force Urbania van rental in Pune with 13/17 seater options. Ideal for outstation trips, corporate events, family travel, school trips, and city tours with experienced drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "350"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7000",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/urbania-on-rent-pune"
  }
};




  return (
    <div>

<Helmet>
  <title>Urbania on Rent in Pune | 13/17 Seater Force Urbania Van Hire</title>
  <meta
    name="description"
    content="Reliable Force Urbania van rental in Pune with 13/17 seater options. Ideal for outstation trips, corporate events, family travel, school trips, and city tours with experienced drivers."
  />
  <meta
    name="keywords"
    content="Urbania Rental Services Pune, Force Urbania Van Hire Pune, 13/17 Seater Urbania with Driver, Urbania Outstation Trip Pune, Urbania for Events Pune, Corporate Urbania Van Pune, AC Urbania Van Booking Pune, Urbania Family Van Hire Pune, Urbania City Travel Pune, Long Distance Urbania Rental, Group Urbania Trip Pune, Book Urbania Online Pune, Urbania for School Trips"
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
              <img src='/images/keyword/47.jpg' alt='img'  className='img-fluid'/>
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

export default Urbaniaonrentinpune;