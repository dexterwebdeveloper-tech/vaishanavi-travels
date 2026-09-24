
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Thirtytwotempotraveller() {



  const cardData =
  {
    keyword: ' 32 Seater Tempo Traveller Service',
    heading: 'Vaishnavi Travels: 32 Seater Tempo Traveller Service',
    headingDescription: 'Vaishnavi Travels provides premium and reliable 32 Seater Tempo Traveller Service, perfect for weddings, school trips, corporate outings, and outstation family tours. Our Tempo Travellers are well-maintained with spacious push-back seating, powerful air-conditioning, and ample luggage space, ensuring a smooth and enjoyable journey for large groups. With experienced drivers, timely pickups, and flexible booking options, we make group travel simple and hassle-free. Whether it’s a religious yatra, weekend picnic, or multi-day holiday trip, Vaishnavi Travels guarantees safe, comfortable, and convenient 32 seater Tempo Traveller rental service tailored to your travel needs.',

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
"name": "32 Seater Tempo Traveller Pune",
"description": "Reliable 32 seater Tempo Traveller rental service in Pune, ideal for group travel with spacious seating and comfortable interiors. Perfect for family tours, corporate outings, and school trips, these vehicles offer a smooth ride with ample luggage space. Our fleet includes both AC and non-AC options, ensuring comfort across all seasons. Professional drivers and timely service guarantee a hassle-free experience."
},
{
"name": "Book 32 Seater Mini Bus",
"description": "Convenient online booking for 32 seater mini buses in Pune, designed for seamless group transportation. Whether it’s a wedding, corporate event, or sightseeing trip, these buses come equipped with modern amenities and experienced drivers. Flexible rental plans and transparent pricing make it easy to plan your journey with confidence."
},
{
"name": "32 Seater Group Travel Pune",
"description": "Efficient group travel solutions with 32 seater vehicles in Pune, suitable for family outings, school excursions, and corporate team trips. These vehicles offer spacious seating, air conditioning options, and reliable driver services, ensuring a safe and comfortable journey for all passengers."
},
{
"name": "AC Tempo 32 Seater Rental",
"description": "Premium AC 32 seater Tempo Traveller rental in Pune, providing cool and comfortable rides during summer and long-distance travel. Equipped with cushioned reclining seats, music systems, and large windows for scenic views, these vehicles are perfect for weddings, corporate travel, and group tours."
},
{
"name": "Non AC 32 Seater Hire Pune",
"description": "Affordable non-AC 32 seater Tempo Traveller rental service in Pune, ideal for budget-conscious travelers without compromising on safety or reliability. Suitable for local travel, school trips, and short-distance outings with professional drivers and well-maintained vehicles."
},
{
"name": "32 Seater for School Trip",
"description": "Safe and dependable 32 seater Tempo Traveller service tailored for school trips in Pune. These vehicles meet safety standards, with experienced drivers trained in student transport, ensuring peace of mind for parents and school administrators."
},
{
"name": "Wedding 32 Seater Tempo Pune",
"description": "Specialized 32 seater Tempo Traveller rentals for weddings in Pune, offering elegant and comfortable transport for guests and bridal parties. Vehicles can be decorated on request, with flexible pickup and drop-off options to fit your wedding schedule."
},
{
"name": "32 Seater Family Tour Tempo",
"description": "Comfortable and spacious 32 seater Tempo Traveller rentals perfect for family tours in and around Pune. Enjoy a smooth ride with ample storage for luggage and a driver focused on guest comfort and safety."
},
{
"name": "32 Seater Tempo with Driver Pune",
"description": "Professional 32 seater Tempo Traveller rentals in Pune that include experienced drivers familiar with local routes and long-distance travel. Drivers prioritize punctuality, safety, and courteous service to enhance your travel experience."
},
{
"name": "Corporate Travel 32 Seater Hire",
"description": "Efficient corporate travel solutions with 32 seater Tempo Travellers in Pune, designed to transport teams to meetings, events, and outings comfortably. AC and non-AC options available, with on-time services and flexible booking tailored to corporate schedules."
},
{
"name": "Outstation 32 Seater Tempo",
"description": "Reliable outstation 32 seater Tempo Traveller rentals from Pune, perfect for long-distance trips, corporate tours, and family vacations. Vehicles are equipped for comfort and safety, with experienced drivers knowledgeable of interstate routes."
},
{
"name": "Budget 32 Seater Vehicle Pune",
"description": "Affordable 32 seater Tempo Traveller rental options in Pune without compromising on vehicle condition or driver professionalism. Ideal for budget travelers needing spacious group transport for events, tours, and daily use."
},
{
"name": "Book 32 Seater Tempo Online",
"description": "User-friendly online booking platform for 32 seater Tempo Traveller rentals in Pune, offering instant confirmation, transparent pricing, and customization options such as decorations and refreshments. Book anytime, anywhere with secure payment and customer support."
}
],
"tableData": [
["32 Seater Tempo Traveller Pune", "Book 32 Seater Mini Bus"],
["32 Seater Group Travel Pune", "AC Tempo 32 Seater Rental"],
["Non AC 32 Seater Hire Pune", "32 Seater for School Trip"],
["Wedding 32 Seater Tempo Pune", "32 Seater Family Tour Tempo"],
["32 Seater Tempo with Driver Pune", "Corporate Travel 32 Seater Hire"],
["Outstation 32 Seater Tempo", "Budget 32 Seater Vehicle Pune"],
["Book 32 Seater Tempo Online"]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable 32 Seater Tempo Traveller Service",
    "WhyChoosedescription": "Vaishnavi Travels offers dependable 32 seater Tempo Traveller rentals, perfect for comfortable group travel in Pune and beyond."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Seating",
    "WhyChoosedescription": "Our 32 seater Tempo Travellers provide ample legroom and cushioned seats, ensuring a smooth and enjoyable journey."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Vehicles",
    "WhyChoosedescription": "Each Tempo Traveller is regularly serviced and sanitized to maintain high safety and hygiene standards."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Fit Your Travel Plans",
    "WhyChoosedescription": "Choose from hourly, daily, or multi-day rental options tailored to your schedule and group size."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our courteous drivers ensure safe, timely, and efficient service with deep knowledge of local routes."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our all-inclusive pricing covers fuel, tolls, taxes, and driver allowances for a stress-free rental experience."
  },
  {
    "WhyChooseheading": "Ideal for Corporate Trips, Weddings, and Group Tours",
    "WhyChoosedescription": "Perfect for corporate events, weddings, sightseeing, and group travel within Pune and nearby areas."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Easy Booking",
    "WhyChoosedescription": "Vaishnavi Travels provides round-the-clock assistance to help you with bookings and travel inquiries."
  }
]




















  }








const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer 32 seater tempo traveller services in Pune?',
      answer: 'Yes, Vaishnavi Travels provides reliable 32 seater tempo travellers in Pune, perfect for group outings, corporate trips, weddings, and tours. Our vehicles are well-maintained, comfortable, and driven by experienced chauffeurs.',
    },
    {
      question: 'Are both AC and non-AC 32 seater tempo travellers available?',
      answer: 'Absolutely. We offer both AC and non-AC 32 seater tempo travellers. AC options are ideal for hot weather and long journeys, while non-AC vehicles are economical and suitable for shorter trips.',
    },
    {
      question: 'What are the approximate rental rates for a 32 seater tempo traveller in Pune?',
      answer: 'Rental prices generally start around ₹6,500 per day for non-AC models and ₹10,000 or more per day for AC variants. Exact rates depend on trip duration, distance, and amenities requested.',
    },
    {
      question: 'What amenities can I expect in a 32 seater tempo traveller?',
      answer: 'Our 32 seater tempo travellers typically feature comfortable seating, good legroom, music and video entertainment systems, charging ports, and ample luggage space. AC models provide full climate control for added comfort.',
    },
    {
      question: 'Are drivers included in the rental fare?',
      answer: 'Yes, all rentals come with professional and courteous drivers who are experienced with Pune routes and long-distance travel, ensuring a safe and smooth journey.',
    },
    {
      question: 'What extra charges should I be aware of?',
      answer: 'Extra costs such as tolls, parking fees, driver allowances for overnight trips, and any permits are usually not included in the base fare. We provide transparent quotes so you know all costs upfront.',
    },
    {
      question: 'How far in advance should I book a 32 seater tempo traveller?',
      answer: 'For local or regular trips, booking 2-3 days in advance is recommended. For weddings, corporate events, or peak seasons, booking 1-2 weeks ahead ensures vehicle availability and the best pricing.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Rohit Deshmukh",
    position: "Event Coordinator",
    feedback:
      "We hired a 32 seater AC tempo traveller from Vaishnavi Travels for a corporate outing. The vehicle was spacious and clean, the driver was punctual and very courteous. The booking process was seamless and pricing transparent. Highly recommended for group travel in Pune.",
    rating: 5,
  },
  {
    name: "Ms. Sneha Kulkarni",
    position: "Wedding Planner",
    feedback:
      "For a wedding event, we rented a 32 seater non-AC tempo traveller. The vehicle was well-maintained and comfortable enough for our guests. The driver was professional and managed multiple pickup points efficiently. Overall, a very satisfying experience with Vaishnavi Travels.",
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
  "name": "32 Seater Tempo Traveller Service",
  "image": "https://vaishnavitravel.com/assets/images/32-seater-tempo-traveller.jpg",
  "description": "Book a 32 seater tempo traveller in Pune with Vaishnavi Travels for school trips, weddings, corporate travel, family tours, and outstation journeys. Available in AC and Non AC options with experienced drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.79",
    "ratingCount": "1350"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4800",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/32-seater-tempo-traveller-service"
  }
};




  return (
    <div>

<Helmet>
  <title>32 Seater Tempo Traveller Service in Pune | AC & Non AC Tempo | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book a 32 seater tempo traveller in Pune with Vaishnavi Travels for school trips, weddings, corporate travel, family tours, and outstation journeys. Available in AC and Non AC options with experienced drivers."
  />
  <meta
    name="keywords"
    content="32 Seater Tempo Traveller Pune, Book 32 Seater Mini Bus, 32 Seater Group Travel Pune, AC Tempo 32 Seater Rental, Non AC 32 Seater Hire Pune, 32 Seater for School Trip, Wedding 32 Seater Tempo Pune, 32 Seater Family Tour Tempo, 32 Seater Tempo with Driver Pune, Corporate Travel 32 Seater Hire, Outstation 32 Seater Tempo, Budget 32 Seater Vehicle Pune, Book 32 Seater Tempo Online"
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
              <img src='/images/keyword/22.jpg' alt='img'  className='img-fluid'/>
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

export default Thirtytwotempotraveller;