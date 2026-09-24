
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busserviceforcorporateevents() {



  const cardData =
  {
    keyword: ' Bus Service for Corporate Events',
    heading: 'Vaishnavi Travels: Bus Service for Corporate Events',
    headingDescription: 'Vaishnavi Travels offers reliable and comfortable Bus Service for Corporate Events, ensuring smooth and organized travel for employees, delegates, and clients. Our fleet of modern, well-maintained buses provides spacious seating, powerful air-conditioning, and ample luggage space, making them ideal for conferences, seminars, team outings, and official gatherings. With experienced drivers, timely pickups, and flexible booking options, we make corporate event transportation stress-free and professional. Whether it’s a small team retreat or a large-scale business conference, Vaishnavi Travels guarantees safe, punctual, and convenient travel, allowing your team to focus on the event while we handle the journey.',

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
    "name": "Corporate Event Bus Hire Pune",
    "description": "Comprehensive corporate event bus hire service in Pune offering premium transportation solutions for large and small business events. Our fleet includes AC and non-AC buses ranging from 17 to 50 seaters, suitable for transporting staff, clients, or vendors to conferences, product launches, and networking events. Services include pre-event scheduling, multi-point pickups, live vehicle tracking, onboard branding, and a dedicated transport coordinator to ensure punctuality and seamless event execution."
  },
  {
    "name": "Business Trip Bus Rental Pune",
    "description": "Professional bus rental service in Pune for business trips, ideal for company delegations, market visits, plant inspections, or multi-city corporate tours. Buses come with pushback seats, reading lights, WiFi (on request), charging ports, and experienced drivers trained in intercity etiquette. From one-day business tours to week-long travel schedules, our team provides route mapping, driver rotation, and round-the-clock support to ensure maximum efficiency and comfort for your business travel needs."
  },
  {
    "name": "Conference Bus Service Pune",
    "description": "Specialized bus services in Pune for transporting attendees to and from corporate conferences, seminars, or conventions. Our buses are available in various seating capacities, equipped with AC, cushioned seats, and overhead storage. We provide branded bus options, itinerary coordination with event organizers, early morning and late-night scheduling, and batch-wise pickups to suit large-scale professional gatherings without logistical hiccups."
  },
  {
    "name": "Exhibition Bus Rental Pune",
    "description": "Reliable exhibition bus rental services in Pune designed for corporates attending trade shows, expos, or product fairs within or outside the city. Buses include amenities such as AC, reclining seats, ample space for samples or demo kits, and WiFi (optional). Services cover single or multiple-day rentals, return logistics, event entry coordination, and signage integration for visibility and brand presence at high-traffic events."
  },
  {
    "name": "Bus for Client Meetings Pune",
    "description": "Executive-level bus rentals in Pune for transporting clients to meetings, site visits, or facility tours. Impress your guests with clean, air-conditioned vehicles, professional uniformed drivers, bottled water service, and silent cabin interiors for uninterrupted discussions. Perfect for handling VIP movements or foreign delegates, with multilingual driver options and itinerary-based billing available for maximum transparency and control."
  },
  {
    "name": "AC Bus for Corporate Events Pune",
    "description": "Air-conditioned buses specifically designated for corporate events and functions in Pune. These buses offer plush seating, curtains for privacy, power backup, LED lighting, and mic systems for announcements. Our fleet supports both short and long-term rentals for team-building events, award nights, offsites, and more. Additional support includes event-specific coordination, guest list handling, and backend transport monitoring for smooth operations."
  },
  {
    "name": "VIP Bus Hire for Events",
    "description": "High-end VIP bus hire for elite corporate events, C-level executive travel, and guest-of-honor transportation. These luxury buses feature leather recliner seats, ambient lighting, AC, multimedia systems, privacy partitions, and onboard refreshments. Designed for comfort and class, these buses are ideal for red carpet entries, board-level retreats, and brand-led experiences that require a polished image and impeccable service."
  },
  {
    "name": "Staff Bus Service for Events Pune",
    "description": "Efficient staff transportation buses for events held in Pune, suitable for employee shuttles, backstage teams, or service personnel. Our buses ensure timely arrival/departure with staggered scheduling, GPS tracking, and on-call coordinators. Available in AC and non-AC variants, these buses are ideal for managing large workforce logistics for expos, festivals, corporate fairs, or internal company celebrations."
  },
  {
    "name": "Large Event Bus Hire Pune",
    "description": "Bulk bus hire services in Pune for large-scale events such as corporate galas, product launches, and annual meets. We offer a fleet of multiple buses (32, 40, 45, and 50 seaters) that can operate in sync across different routes and schedules. Full support includes marshals for crowd control, live fleet coordination, on-site standby vehicles, and post-event dispersal assistance. Tailored for HR and event management teams handling 200+ participants."
  },
  {
    "name": "Seminar Transportation Bus Pune",
    "description": "Dedicated buses for seminar transportation needs in Pune, serving schools, universities, NGOs, and corporate training departments. Vehicles are equipped with PA systems, proper ventilation, comfortable seating, and clear visibility signage. Our logistics team ensures timely pickups from offices or hostels and coordinates with event timings to avoid delays. Custom signage or banners for the seminar can be included upon request."
  },
  {
    "name": "Team Outing Bus Rental Pune",
    "description": "Fun-focused bus rentals in Pune for company team outings, leisure retreats, and adventure getaways. Buses come with onboard entertainment systems, music, reclining seats, and plenty of storage for bags or gear. Available in various seating capacities, these rentals are perfect for Lonavala, Mahabaleshwar, Alibaug, or resort trips. Includes route planning, en route coordination, and optional host/coordinator assistance for games and activities."
  },
  {
    "name": "Corporate Gathering Bus Hire",
    "description": "Trusted corporate bus hire service for formal gatherings, networking events, and client-hosted parties in Pune. Ensures timely and professional transportation for all attendees, with trained chauffeurs, route optimization, and optional onboard refreshments. Ideal for high-volume transfers between office, hotels, and venues with minimal downtime and top-notch service reliability."
  },
  {
    "name": "Mini Bus for Company Events Pune",
    "description": "Mini bus hire services for small-scale company events in Pune such as internal celebrations, lunch outings, or small group training. Seating 17 to 25 passengers, these compact AC buses offer great maneuverability in city traffic, are fuel efficient, and come with smart interiors and well-trained drivers. A convenient and budget-friendly option for small teams looking to travel together with ease."
  }
],
"tableData": [
  ["Corporate Event Bus Hire Pune", "Business Trip Bus Rental Pune"],
  ["Conference Bus Service Pune", "Exhibition Bus Rental Pune"],
  ["Bus for Client Meetings Pune", "AC Bus for Corporate Events Pune"],
  ["VIP Bus Hire for Events", "Staff Bus Service for Events Pune"],
  ["Large Event Bus Hire Pune", "Seminar Transportation Bus Pune"],
  ["Team Outing Bus Rental Pune", "Corporate Gathering Bus Hire"],
  ["Mini Bus for Company Events Pune"]
],




   "whychoose": [
  {
    "WhyChooseheading": "Expert Bus Service for Corporate Events",
    "WhyChoosedescription": "Vaishnavi Travels offers specialized bus services designed to manage transportation smoothly during corporate events."
  },
  {
    "WhyChooseheading": "Comfort and Convenience for Event Attendees",
    "WhyChoosedescription": "Our buses provide comfortable seating and ample space, ensuring a pleasant travel experience for all corporate event guests."
  },
  {
    "WhyChooseheading": "Flexible Bus Rental Packages for Events",
    "WhyChoosedescription": "Choose from hourly, daily, or event-specific rental plans tailored to the schedule and size of your corporate gathering."
  },
  {
    "WhyChooseheading": "Well-Maintained and Presentable Fleet",
    "WhyChoosedescription": "Our buses are regularly serviced and kept spotless to provide a professional and welcoming environment for your guests."
  },
  {
    "WhyChooseheading": "Professional Drivers with Event Experience",
    "WhyChoosedescription": "Our courteous and experienced drivers ensure timely pick-ups and drop-offs, helping your event run smoothly."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "We provide all-inclusive pricing covering fuel, tolls, taxes, and driver allowances, so there are no surprises on your invoice."
  },
  {
    "WhyChooseheading": "Ideal for Conferences, Seminars, and Team Outings",
    "WhyChoosedescription": "Our bus services are perfect for a variety of corporate events including conferences, seminars, workshops, and team-building activities."
  },
  {
    "WhyChooseheading": "24/7 Support for Hassle-Free Event Transportation",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer support to manage bookings and resolve any last-minute changes during your event."
  }
]























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide bus services for corporate events in Pune?',
      answer: 'Yes, Vaishnavi Travels specializes in offering professional and reliable bus services tailored specifically for corporate events across Pune. Whether it’s conferences, seminars, team-building activities, or product launches, we ensure your attendees arrive comfortably, safely, and on time.',
    },
    {
      question: 'What types of buses are suitable for corporate events?',
      answer: 'We offer a wide range of buses including 17-seater tempo travellers, 27 to 32-seater minibuses, and large 50-seater coaches. Our fleet includes fully air-conditioned and well-maintained vehicles equipped with comfortable seating and ample luggage space to accommodate your event requirements.',
    },
    {
      question: 'Can Vaishnavi Travels handle multiple pickups and drop-offs for event attendees?',
      answer: 'Absolutely. We provide customized shuttle services for corporate events with multiple pickup and drop-off points across Pune. Our experienced drivers and coordinators manage schedules efficiently to ensure smooth transportation throughout the event day.',
    },
    {
      question: 'Is it possible to book buses for long-duration corporate events or multi-day conferences?',
      answer: 'Yes, we offer flexible rental packages that can cover single-day events as well as multi-day conferences or corporate retreats. Our team works closely with your event organizers to create tailored transport solutions that match your schedule and budget.',
    },
    {
      question: 'Are your corporate event buses equipped with amenities?',
      answer: 'Our buses come equipped with modern amenities such as air conditioning, comfortable seating, ample legroom, and luggage compartments. On request, we can also arrange for Wi-Fi and charging ports in select vehicles to keep your attendees connected during transit.',
    },
    {
      question: 'How do you ensure the safety and punctuality of transport for corporate events?',
      answer: 'We prioritize safety by conducting regular vehicle maintenance and assigning experienced, licensed drivers familiar with Pune traffic patterns. Our team monitors trips in real-time to ensure punctuality, and we provide event coordinators with updates to manage any unforeseen delays proactively.',
    },
    {
      question: 'What is the process to book bus services for a corporate event?',
      answer: 'Booking is easy! Contact us via phone, email, or through our website with your event details including dates, locations, and number of attendees. Our transport specialists will recommend suitable vehicle options and create a customized plan to ensure hassle-free travel for your corporate event.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Amit Sharma",
    position: "Event Manager, GlobalTech Solutions",
    feedback:
      "Vaishnavi Travels provided excellent bus services for our recent corporate seminar. They handled multiple pickup locations and ensured all attendees arrived on time and in comfort. The buses were clean, air-conditioned, and the drivers were courteous and professional. Their attention to detail and responsiveness made our event logistics much easier to manage.",
    rating: 5,
  },
  {
    name: "Ms. Neha Patil",
    position: "Corporate Event Coordinator, InnovateX",
    feedback:
      "We hired Vaishnavi Travels for a three-day corporate retreat and their service exceeded expectations. The buses were spacious, well-maintained, and perfectly suited to our group size. The drivers were punctual and friendly, and their team was highly communicative throughout the event. It was a seamless experience, and I would highly recommend their services for any corporate event transportation needs.",
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
  "name": "Bus Service for Corporate Events",
  "image": "https://vaishnavitravel.com/assets/images/corporate-event-bus-service.jpg",
  "description": "Plan your corporate events in Pune with reliable bus services by Vaishnavi Travels. Book AC/Non-AC buses for business trips, client meetings, team outings, seminars, and VIP transport. On-time and professional service guaranteed.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "1987"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7200",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-service-for-corporate-events"
  }
};



  return (
    <div>

<Helmet>
  <title>Bus Service for Corporate Events | Business Travel & VIP Transport | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Plan your corporate events in Pune with reliable bus services by Vaishnavi Travels. Book AC/Non-AC buses for business trips, client meetings, team outings, seminars, and VIP transport. On-time and professional service guaranteed."
  />
  <meta
    name="keywords"
    content="Corporate Event Bus Hire Pune, Business Trip Bus Rental Pune, Conference Bus Service Pune, Exhibition Bus Rental Pune, Bus for Client Meetings Pune, AC Bus for Corporate Events Pune, VIP Bus Hire for Events, Staff Bus Service for Events Pune, Large Event Bus Hire Pune, Seminar Transportation Bus Pune, Team Outing Bus Rental Pune, Corporate Gathering Bus Hire, Mini Bus for Company Events Pune"
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
              <img src='/images/keyword/6.jpg' alt='img'  className='img-fluid'/>
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

export default Busserviceforcorporateevents;