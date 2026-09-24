
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Twentifivetempotraveller() {



  const cardData =
  {
    keyword: ' 25 Seater Tempo Traveller on Rent in Pune',
    heading: 'Vaishnavi Travels: 25 Seater Tempo Traveller on Rent in Pune',
    headingDescription: 'Vaishnavi Travels provides comfortable and affordable 25 Seater Tempo Traveller on Rent in Pune, perfect for weddings, corporate outings, school tours, family trips, and long-distance journeys. Our Tempo Travellers are well-maintained with push-back seats, powerful air-conditioning, and ample luggage space to ensure a smooth and enjoyable ride for large groups. With professional drivers, on-time service, and flexible booking options, we make group travel hassle-free and convenient. Whether it’s a religious yatra, picnic, or outstation tour, Vaishnavi Travels guarantees safe, reliable, and comfortable 25 seater Tempo Traveller rental services in Pune at the best price.',

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
    "name": "25 Seater Van Hire Pune",
    "description": "Convenient 25 seater van hire service in Pune, ideal for medium-sized groups traveling for family outings, corporate trips, and small tours. Our vans are spacious, well-maintained, and come with professional drivers to ensure a safe and comfortable journey."
  },
  {
    "name": "Tempo Traveller for Group Tours",
    "description": "Reliable tempo traveller rentals in Pune designed specifically for group tours and excursions. These vehicles provide ample space, comfortable seating, and storage for luggage, making them perfect for sightseeing, pilgrimages, and weekend getaways."
  },
  {
    "name": "AC Tempo 25 Seater Pune",
    "description": "Air-conditioned 25 seater tempo travellers available for rent in Pune, offering a cool and comfortable travel experience especially during summer and long-distance trips. Equipped with reclining seats and modern interiors to enhance passenger comfort."
  },
  {
    "name": "Non AC Tempo Traveller Hire",
    "description": "Budget-friendly non-AC tempo traveller hire options in Pune, suitable for short-distance travel and group events. These vehicles offer reliable service without compromising safety and comfort, making them an economical choice for families and small groups."
  },
  {
    "name": "Wedding Tempo Traveller Pune",
    "description": "Specialized tempo traveller services for weddings in Pune, with options for decorated vehicles to transport bridal parties, guests, and family members. Our drivers are trained to handle wedding schedules and routes smoothly, ensuring timely arrivals."
  },
  {
    "name": "School Trip Tempo Traveller",
    "description": "Safe and secure tempo traveller rentals tailored for school trips from Pune, equipped with child safety features and experienced drivers. Ideal for educational outings, sports events, and excursions with dependable transportation."
  },
  {
    "name": "25 Seater for Outstation Pune",
    "description": "Outstation tempo traveller rental services from Pune for groups planning long-distance travel to nearby cities and tourist spots. Includes toll and driver charges, ensuring hassle-free booking and comfortable travel."
  },
  {
    "name": "Tempo with Driver Hire Pune",
    "description": "Experienced drivers included with every tempo traveller hire in Pune, ensuring professional service and safe navigation through city traffic and highways. Drivers are courteous, punctual, and familiar with local routes."
  },
  {
    "name": "Budget 25 Seater Rental Pune",
    "description": "Affordable 25 seater tempo traveller rental options in Pune, offering competitive rates for groups on a budget. Perfect for family trips, office outings, and local travel without compromising on quality or safety."
  },
  {
    "name": "Office Team Travel Tempo Pune",
    "description": "Tempo traveller services tailored for office team travel in Pune, ideal for corporate outings, team-building events, and business trips. Provides comfortable seating, timely pickups, and flexible booking options."
  },
  {
    "name": "Small Group Tempo Traveller Pune",
    "description": "Efficient tempo traveller rental solutions for small groups in Pune seeking convenient and comfortable transportation. Suitable for family gatherings, weekend trips, and local excursions with personalized service."
  },
  {
    "name": "Weekend Trip Tempo Pune",
    "description": "Weekend trip tempo traveller rentals from Pune designed to accommodate short leisure trips with family or friends. Enjoy hassle-free booking, spacious interiors, and experienced drivers for a memorable travel experience."
  },
  {
    "name": "Online 25 Seater Booking Pune",
    "description": "User-friendly online booking platform for 25 seater tempo travellers in Pune, offering instant confirmations, transparent pricing, and multiple payment options. Book your vehicle anytime with easy cancellation and customer support."
  }
],
"tableData": [
  ["25 Seater Van Hire Pune", "Tempo Traveller for Group Tours"],
  ["AC Tempo 25 Seater Pune", "Non AC Tempo Traveller Hire"],
  ["Wedding Tempo Traveller Pune", "School Trip Tempo Traveller"],
  ["25 Seater for Outstation Pune", "Tempo with Driver Hire Pune"],
  ["Budget 25 Seater Rental Pune", "Office Team Travel Tempo Pune"],
  ["Small Group Tempo Traveller Pune", "Weekend Trip Tempo Pune"],
  ["Online 25 Seater Booking Pune"]
],




"whychoose": [
  {
    "WhyChooseheading": "Affordable 25 Seater Tempo Traveller on Rent in Pune",
    "WhyChoosedescription": "Vaishnavi Travels offers cost-effective and reliable 25 seater Tempo Traveller rentals in Pune, perfect for small group travel."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Seating for Groups",
    "WhyChoosedescription": "Our Tempo Travellers provide ample legroom and comfortable seats, ensuring a pleasant journey for all passengers."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Vehicles",
    "WhyChoosedescription": "Each Tempo Traveller is regularly serviced and sanitized before every trip to guarantee safety and hygiene."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Fit Your Schedule",
    "WhyChoosedescription": "Choose from hourly, daily, or multi-day rental options tailored to your travel plans and group size."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers ensure safe, timely, and courteous service, familiar with Pune and nearby routes."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our pricing includes fuel, tolls, taxes, and driver allowances with no hidden fees, ensuring a hassle-free experience."
  },
  {
    "WhyChooseheading": "Ideal for Corporate Trips, Family Outings, and Tours",
    "WhyChoosedescription": "Perfect for corporate travel, family excursions, sightseeing, and small group tours in and around Pune."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Seamless Booking",
    "WhyChoosedescription": "Vaishnavi Travels provides round-the-clock assistance to help with bookings, changes, and travel inquiries."
  }
]
































  }









const faqData = [
  [
    {
      question: 'Is a 25 Seater Tempo Traveller available on rent in Pune with Vaishnavi Travels?',
      answer: 'Yes, Vaishnavi Travels provides 25-seater Tempo Travellers on rent in Pune. These vehicles are ideal for group travel, such as office outings, school trips, family functions, and religious tours. We ensure well-maintained, spacious, and comfortable travel experiences for both local and outstation journeys.',
    },
    {
      question: 'What are the features of the 25 Seater Tempo Traveller?',
      answer: 'Our 25-seater Tempo Travellers come with push-back seats, ample legroom, overhead storage, music system, and large windows for scenic views. Both AC and non-AC variants are available. The interiors are regularly cleaned and sanitized for hygiene and safety.',
    },
    {
      question: 'What is the cost of renting a 25 Seater Tempo Traveller in Pune?',
      answer: 'The rental charges typically start from ₹30 to ₹35 per kilometer for AC models, with a minimum billing of around 300 km/day for outstation trips. For local usage, day packages are available and usually range between ₹6,500 to ₹9,000 depending on duration and route. Driver allowance, tolls, and parking are additional.',
    },
    {
      question: 'Can I book the 25 Seater Tempo Traveller for outstation trips?',
      answer: 'Yes, our 25-seater Tempo Travellers are perfect for outstation travel. Whether it’s a weekend getaway to Mahabaleshwar, Shirdi, or Goa, we offer safe, comfortable, and reliable long-distance travel with experienced drivers and well-maintained vehicles.',
    },
    {
      question: 'Is it possible to hire the Tempo Traveller for a few hours locally?',
      answer: 'Absolutely. We offer hourly and half-day rental options for local travel within Pune. This is ideal for corporate shuttles, airport transfers, or attending local events. Pricing will depend on the duration and distance covered.',
    },
    {
      question: 'Are your drivers experienced and familiar with Pune and nearby routes?',
      answer: 'Yes. All our drivers are professional, licensed, and have experience driving long and short distances. They are courteous, punctual, and well-versed with Pune city routes and popular outstation destinations across Maharashtra and beyond.',
    },
    {
      question: 'How can I book a 25 Seater Tempo Traveller with Vaishnavi Travels?',
      answer: 'You can book directly through our website, mobile app, or by calling our customer support team. Share your journey details—date, time, pickup and drop locations—and we’ll help you choose the best vehicle option at a competitive rate.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Suresh Pawar",
    position: "Operations Manager, Infotek Solutions",
    feedback:
      "We hired a 25-seater AC Tempo Traveller from Vaishnavi Travels for an outstation team trip to Panchgani. The vehicle was super comfortable, well-maintained, and arrived exactly on time. The driver was very professional and knew the route well. Our team had a hassle-free and pleasant journey. This is the third time we’ve used their service — always dependable!",
    rating: 5,
  },
  {
    name: "Mrs. Anuja Kulkarni",
    position: "Parent Volunteer, School Excursion Group",
    feedback:
      "Vaishnavi Travels arranged a 25-seater Tempo Traveller for our school field trip within Pune. The kids were comfortable, and the parents were at ease thanks to the smooth and safe driving. The vehicle was clean, well-ventilated, and perfect for the group. Booking was simple and the team was very cooperative throughout. Highly recommend their service!",
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
  "name": "25 Seater Tempo Traveller on Rent in Pune",
  "image": "https://vaishnavitravel.com/assets/images/25-seater-tempo-traveller-pune.jpg",
  "description": "Rent a 25 seater Tempo Traveller in Pune with Vaishnavi Travels. Ideal for group tours, weddings, school trips, and corporate travel. Choose AC or Non AC options with experienced drivers and budget-friendly prices.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "2200"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5200",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/25-seater-tempo-traveller-on-rent-in-pune"
  }
};



  return (
    <div>

<Helmet>
  <title>25 Seater Tempo Traveller on Rent in Pune | Group & Wedding Van Hire | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Rent a 25 seater Tempo Traveller in Pune with Vaishnavi Travels. Ideal for group tours, weddings, school trips, and corporate travel. Choose AC or Non AC options with experienced drivers and budget-friendly prices."
  />
  <meta
    name="keywords"
    content="25 Seater Van Hire Pune, Tempo Traveller for Group Tours, AC Tempo 25 Seater Pune, Non AC Tempo Traveller Hire, Wedding Tempo Traveller Pune, School Trip Tempo Traveller, 25 Seater for Outstation Pune, Tempo with Driver Hire Pune, Budget 25 Seater Rental Pune, Office Team Travel Tempo Pune, Small Group Tempo Traveller Pune, Weekend Trip Tempo Pune, Online 25 Seater Booking Pune"
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
              <img src='/images/keyword/16.jpg' alt='img'  className='img-fluid'/>
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

export default Twentifivetempotraveller;