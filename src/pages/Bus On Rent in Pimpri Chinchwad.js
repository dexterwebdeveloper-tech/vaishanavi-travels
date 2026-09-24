
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busonrentinpimprichichwad() {



  const cardData =
  {
    keyword: ' Bus On Rent in Pimpri Chinchwad',
    heading: 'Vaishnavi Travels: Bus On Rent in Pimpri Chinchwad',
    headingDescription: 'Vaishnavi Travels offers affordable and reliable Bus on Rent in Pimpri Chinchwad, making group travel easy and convenient for weddings, school trips, corporate events, and outstation tours. Our buses are well-maintained with spacious seating, powerful air-conditioning, and ample luggage space to provide maximum comfort for passengers. With trained drivers, timely pickups, and flexible booking options, we ensure a smooth and stress-free travel experience for every occasion. Whether it’s a family function, religious yatra, weekend picnic, or long-distance journey, Vaishnavi Travels guarantees safe, punctual, and comfortable bus rental services in Pimpri Chinchwad.',

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
    "name": "Pimpri Chinchwad Bus Hire Service",
    "description": "Reliable bus hire services in Pimpri Chinchwad catering to all types of travel needs including weddings, corporate events, school trips, and local tours. Our fleet features well-maintained buses with professional drivers to ensure a comfortable and safe journey across PCMC area."
  },
  {
    "name": "PCMC Bus Rental",
    "description": "Flexible PCMC bus rental options with both AC and non-AC buses available for short and long-distance travel. Perfect for group outings, family functions, corporate transportation, and event commutes within and around Pimpri Chinchwad."
  },
  {
    "name": "Marriage Bus in Pimpri",
    "description": "Specialized marriage bus rental services in Pimpri offering beautifully decorated buses for transporting wedding guests in style. Our services include timely pickups, customizable routes, and options for both luxury and budget-friendly buses to suit your wedding requirements."
  },
  {
    "name": "Bus for School Trips in Chinchwad",
    "description": "Safe and comfortable bus services for school trips in Chinchwad, equipped with child safety features and experienced drivers. Ideal for educational excursions, sports events, and other school-related travel ensuring timely and secure transport for students."
  },
  {
    "name": "Event Bus Booking PCMC",
    "description": "Professional event bus booking services in PCMC for corporate gatherings, family functions, exhibitions, and conferences. Our buses come in various sizes and configurations to accommodate any group size with punctual and reliable service."
  },
  {
    "name": "AC Bus Hire Pimpri Chinchwad",
    "description": "Premium air-conditioned bus hire in Pimpri Chinchwad offering cool and comfortable travel for weddings, corporate events, and long-distance trips. Our AC buses are equipped with modern amenities including reclining seats and entertainment systems for an enhanced travel experience."
  },
  {
    "name": "Non AC Bus PCMC",
    "description": "Affordable non-AC bus rental options in PCMC suitable for budget-conscious groups and short-distance travel. These buses are well-maintained to provide safe and comfortable transport without compromising quality or service standards."
  },
  {
    "name": "40 Seater Bus PCMC",
    "description": "Spacious 40 seater buses available for rent in PCMC, perfect for medium to large group travel including family functions, corporate events, and school trips. These buses offer comfortable seating and ample luggage space to accommodate your group’s needs."
  },
  {
    "name": "Corporate Bus Hire in Pimpri",
    "description": "Dedicated corporate bus hire solutions in Pimpri tailored for employee transport, business meetings, and company outings. We provide punctual service, well-maintained vehicles, and professional drivers to ensure smooth and efficient corporate travel."
  },
  {
    "name": "Bus for Outstation PCMC",
    "description": "Reliable outstation bus rental services from PCMC for long-distance travel to nearby cities and tourist destinations. Our buses come with experienced drivers, include toll and driver charges, and ensure a comfortable journey for groups traveling outside Pimpri Chinchwad."
  },
  {
    "name": "Tour Bus Booking Chinchwad",
    "description": "Convenient tour bus booking services in Chinchwad for sightseeing, religious tours, and leisure trips. Choose from AC and non-AC buses with customizable itineraries, ensuring a hassle-free travel experience for your group."
  },
  {
    "name": "Budget Bus Rental Pimpri",
    "description": "Cost-effective bus rental options in Pimpri that provide quality service at affordable prices. Ideal for family outings, school trips, and local events without compromising on safety or comfort."
  },
  {
    "name": "Online Bus Booking Pimpri Area",
    "description": "Easy-to-use online bus booking platform for the Pimpri Chinchwad area, offering instant confirmation, transparent pricing, and a wide selection of buses. Book your transport anytime and enjoy flexible cancellation and customer support."
  }
],
"tableData": [
  ["Pimpri Chinchwad Bus Hire Service", "PCMC Bus Rental"],
  ["Marriage Bus in Pimpri", "Bus for School Trips in Chinchwad"],
  ["Event Bus Booking PCMC", "AC Bus Hire Pimpri Chinchwad"],
  ["Non AC Bus PCMC", "40 Seater Bus PCMC"],
  ["Corporate Bus Hire in Pimpri", "Bus for Outstation PCMC"],
  ["Tour Bus Booking Chinchwad", "Budget Bus Rental Pimpri"],
  ["Online Bus Booking Pimpri Area"]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Bus On Rent in Pimpri Chinchwad",
    "WhyChoosedescription": "Vaishnavi Travels offers trusted and affordable bus rental services in Pimpri Chinchwad for all your group travel needs."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Seating",
    "WhyChoosedescription": "Our buses feature ample legroom and comfortable seats to ensure a smooth and enjoyable journey for every passenger."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Each bus is regularly serviced and thoroughly cleaned to maintain the highest standards of safety and hygiene."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages Tailored to Your Needs",
    "WhyChoosedescription": "Choose from hourly, daily, or multi-day rental plans customized to suit your travel schedule and group size."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Pimpri Chinchwad",
    "WhyChoosedescription": "Our professional drivers ensure timely, safe, and courteous service, with in-depth knowledge of local routes."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "Enjoy all-inclusive rates covering fuel, tolls, taxes, and driver allowances for a hassle-free rental experience."
  },
  {
    "WhyChooseheading": "Ideal for Corporate Events, Weddings, and Group Outings",
    "WhyChoosedescription": "Perfect for a wide range of occasions including corporate functions, weddings, tours, and other group travels."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Easy Booking and Assistance",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer service to help you with bookings and travel inquiries."
  }
]































  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels provide bus on rent services in Pimpri Chinchwad?',
      answer: 'Yes, Vaishnavi Travels offers reliable bus on rent services in Pimpri Chinchhad (PCMC area). Whether you are in Chinchwad, Pimpri, Nigdi, Akurdi, or nearby localities, we can arrange buses that suit your group size and purpose, ensuring comfort and punctuality.',
    },
    {
      question: 'What folding of buses are available for rent in Pimpri Chinchwad?',
      answer: 'We have a wide range of options: mini buses & tempo travellers (12‑25 seater), medium/intermediate coaches (30‑40 seater), and large buses (45‑55 seater). Options include both AC and non‑AC, luxury and standard, depending on your budget and requirement.',
    },
    {
      question: 'Can I rent a bus in Pimpri Chinchhad for short local trips?',
      answer: 'Absolutely. We support local rentals for a few hours, half‑day, or full‑day, depending on your needs — for city events, temple visits, local sightseeing, airport transfers etc. Many operators in PCMC offer AC mini buses and standard non‑AC ones for short durations. :contentReference[oaicite:0]{index=0}',
    },
    {
      question: 'What are the approximate cost factors for bus rental in Pimpri Chinchwad?',
      answer: 'Costs depend on bus type (size & AC vs non‑AC), duration (hours/day), distance (local or outstation), amenities (push‑back seats, entertainment, etc.), driver allowance, fuel, tolls, and parking. For example, AC mini buses might start somewhere around ₹6,500‑₹8,000 for 8‑10 hours; non‑AC options are lower. :contentReference[oaicite:1]{index=1}',
    },
    {
      question: 'Do rentals include driver, and are buses well‑maintained?',
      answer: 'Yes. All rentals from Vaishnavi Travels come with experienced, licensed drivers who are familiar with PCMC and surrounding routes. Our buses are regularly maintained, cleaned, and checked for safety equipment. We ensure reliability so you and your guests travel without worry.',
    },
    {
      question: 'Can I rent a bus for outstation trips from Pimpri Chinchhad?',
      answer: 'Yes, we offer outstation services too. These include intercity or multi‑day trips. The cost will include extra for fuel, tolls, driver per‑diem if overnight, and sometimes permits depending on the route. Let us know your destination and dates, and we’ll share an all‑in‑cost quote.',
    },
    {
      question: 'How far in advance should I book a bus in Pimpri Chinchhad?',
      answer: 'For regular local or modest group bookings, 2‑4 days advance is usually sufficient. For larger buses, large events, or premium luxury options (AC/Volvo etc) especially in peak seasons, booking 1‑2 weeks ahead is safer to ensure availability.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Mohit Dhawale",
    position: "Corporate HR, TechZone Pvt. Ltd.",
    feedback:
      "We needed a 40‑seater AC coach from Pimpri Chinchwad for a corporate workshop in Lonavala. Vaishnavi Travels arranged everything smoothly. The bus arrived on time at Nigdi, the interiors were clean, seats comfortable, and driver courteous. They even helped adjust pickup points to accommodate everyone. Excellent service and value for money.",
    rating: 5,
  },
  {
    name: "Mrs. Shilpa Deshpande",
    position: "Event Planner",
    feedback:
      "For a family wedding event in Akurdi, we booked a 30‑seater non‑AC bus from Vaishnavi Travels. It turned out to be perfect: clean, well‑maintained, and comfortable. The flexibility of multiple pickup points and attentive driver made all the difference. Guests appreciated the ride, and we didn’t have to worry about transport logistics. Very happy with their service!",
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
  "name": "Bus On Rent in Pimpri Chinchwad",
  "image": "https://vaishnavitravel.com/assets/images/bus-rent-pimpri-chinchwad.jpg",
  "description": "Rent buses in Pimpri Chinchwad with Vaishnavi Travels. Ideal for marriages, school trips, corporate events, and outstation travel. Choose from AC and Non AC buses with reliable drivers and easy online booking.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.75",
    "ratingCount": "1765"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-on-rent-in-pimpri-chinchwad"
  }
};




  return (
    <div>
<Helmet>
  <title>Bus On Rent in Pimpri Chinchwad | AC & Non AC Bus Hire | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Rent buses in Pimpri Chinchwad with Vaishnavi Travels. Ideal for marriages, school trips, corporate events, and outstation travel. Choose from AC and Non AC buses with reliable drivers and easy online booking."
  />
  <meta
    name="keywords"
    content="Pimpri Chinchwad Bus Hire Service, PCMC Bus Rental, Marriage Bus in Pimpri, Bus for School Trips in Chinchwad, Event Bus Booking PCMC, AC Bus Hire Pimpri Chinchwad, Non AC Bus PCMC, 40 Seater Bus PCMC, Corporate Bus Hire in Pimpri, Bus for Outstation PCMC, Tour Bus Booking Chinchwad, Budget Bus Rental Pimpri, Online Bus Booking Pimpri Area"
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
              <img src='/images/keyword/15.jpg' alt='img'  className='img-fluid'/>
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

export default Busonrentinpimprichichwad;