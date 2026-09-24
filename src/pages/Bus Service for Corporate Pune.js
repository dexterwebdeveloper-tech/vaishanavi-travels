
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busserviceforcorporatepune() {



  const cardData =
  {
    keyword: ' Bus Service for Corporate Pune',
    heading: 'Vaishnavi Travels: Bus Service for Corporate Pune',
    headingDescription: 'Vaishnavi Travels provides professional and affordable Bus Service for Corporate in Pune, designed to meet the travel needs of companies, offices, and business events. Our well-maintained buses come with spacious seating, air-conditioning, and ample storage, ensuring a comfortable ride for employees and delegates. From daily staff transportation to conferences, seminars, team outings, and corporate tours, we deliver punctual, safe, and hassle-free travel solutions. With trained drivers, flexible booking options, and timely service, Vaishnavi Travels ensures smooth and reliable corporate transportation in Pune, helping businesses focus on productivity while we take care of the journey.',

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
    "name": "Corporate Bus Rental in Pune",
    "description": "Comprehensive corporate bus rental services in Pune tailored for business needs such as staff transport, client pickups, off-site visits, and event logistics. Our fleet includes AC and non-AC buses with professional drivers, punctual service, and corporate billing options. Ideal for daily office commutes and one-time business travel."
  },
  {
    "name": "Office Event Bus Hire Pune",
    "description": "Reliable bus hire for office events in Pune including team-building activities, annual functions, and training sessions. Buses are equipped with comfortable seating, audio systems, and storage for gifts or presentation materials. Available on hourly, daily, or per-event basis with custom pickup and drop locations."
  },
  {
    "name": "Staff Transport Bus Pune",
    "description": "Dedicated staff transport services in Pune offering safe, timely, and affordable solutions for daily employee commuting. Our buses follow fixed routes and timings with options for GPS tracking, attendance systems, and monthly contracts. Ideal for IT parks, factories, and corporate hubs."
  },
  {
    "name": "Bus for Corporate Travel Pune",
    "description": "Premium buses for corporate travel requirements in Pune, designed for inter-office transfers, airport drops, vendor visits, or client meetings. Choose from mini buses to large seating options with AC, charging points, and professional chauffeurs to ensure your team travels in comfort and on schedule."
  },
  {
    "name": "AC Bus for Office Events Pune",
    "description": "Air-conditioned buses for office events in Pune offering a cool, pleasant ride to offsite venues, retreats, or conferences. Buses include cushioned seats, clean interiors, and experienced drivers familiar with corporate travel etiquette. Perfect for mid to large-size corporate groups."
  },
  {
    "name": "Bus Hire for Corporate Meetings Pune",
    "description": "Organized bus hire solutions in Pune for transporting teams or clients to corporate meetings, expos, and seminars. Services include route optimization, real-time tracking, and wait-time coordination for flexible return trips. Helps ensure everyone arrives on time and together."
  },
  {
    "name": "Corporate Shuttle Service Pune",
    "description": "Daily or weekly corporate shuttle services in Pune with fixed or customizable routes between office and home locations. Buses run on scheduled times, with options for employee verification, tracking, and monthly invoicing. Designed for employee comfort and timely office arrival."
  },
  {
    "name": "Company Outing Bus Pune",
    "description": "Bus rental for company outings and team excursions from Pune to nearby picnic spots, resorts, or hill stations. Buses include entertainment systems, large luggage space, and AC/non-AC options. Event managers can request route planning and en-route support for a hassle-free experience."
  },
  {
    "name": "Seminar Bus Rental Pune",
    "description": "Specialized bus rental services in Pune for transporting groups to seminars, exhibitions, or trade shows. Timely pickups, professional drivers, and buses with comfortable seating and air conditioning ensure a stress-free journey for all attendees."
  },
  {
    "name": "Corporate Guest Bus Booking Pune",
    "description": "Professional bus services for corporate guest transportation in Pune. Impress clients or business visitors with clean, well-maintained buses driven by uniformed chauffeurs. Available for airport transfers, hotel shuttles, or day-long meetings across the city."
  },
  {
    "name": "Monthly Bus for Corporate Use",
    "description": "Monthly bus rental plans for corporate clients in Pune, including dedicated driver, regular maintenance, and fixed daily route coverage. Ideal for long-term employee commute programs, with options to scale as your team grows. Includes flexible contracts and corporate billing."
  },
  {
    "name": "Non AC Corporate Bus Service Pune",
    "description": "Cost-effective non-AC bus rental solutions for corporate needs in Pune. Great for short distances or cool-weather days, these buses are clean, safe, and reliable, offering a practical option for startups and companies looking to optimize travel budgets."
  },
  {
    "name": "32 Seater Corporate Bus Hire",
    "description": "Comfortable 32-seater buses for corporate use in Pune, suitable for transporting medium-sized teams for seminars, offsites, airport transfers, or vendor visits. These buses offer a balance of space, comfort, and affordability with AC/non-AC options available."
  }
],
"tableData": [
  ["Corporate Bus Rental in Pune", "Office Event Bus Hire Pune"],
  ["Staff Transport Bus Pune", "Bus for Corporate Travel Pune"],
  ["AC Bus for Office Events Pune", "Bus Hire for Corporate Meetings Pune"],
  ["Corporate Shuttle Service Pune", "Company Outing Bus Pune"],
  ["Seminar Bus Rental Pune", "Corporate Guest Bus Booking Pune"],
  ["Monthly Bus for Corporate Use", "Non AC Corporate Bus Service Pune"],
  ["32 Seater Corporate Bus Hire"]
],




   "whychoose": [
  {
    "WhyChooseheading": "Professional Bus Service for Corporate in Pune",
    "WhyChoosedescription": "Vaishnavi Travels provides reliable and punctual bus services tailored specifically for corporate travel needs in Pune."
  },
  {
    "WhyChooseheading": "Comfortable Commute for Employees and Executives",
    "WhyChoosedescription": "Our air-conditioned, spacious buses ensure a comfortable and stress-free commute for your employees and VIP guests."
  },
  {
    "WhyChooseheading": "Customized Corporate Travel Solutions",
    "WhyChoosedescription": "From daily employee pick-ups to event transport, we offer flexible travel plans that suit your organization’s requirements."
  },
  {
    "WhyChooseheading": "Well-Maintained and Presentable Fleet",
    "WhyChoosedescription": "All buses are regularly cleaned and maintained, ensuring a clean, professional image that reflects your brand."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Corporate Etiquette",
    "WhyChoosedescription": "Our trained and courteous drivers understand corporate protocols and ensure timely and respectful service."
  },
  {
    "WhyChooseheading": "Timely and Efficient Service Across Pune",
    "WhyChoosedescription": "We prioritize punctuality, offering optimized routes and schedules for minimal delays and maximum efficiency."
  },
  {
    "WhyChooseheading": "Transparent Contracts and Billing",
    "WhyChoosedescription": "Vaishnavi Travels offers clear pricing with monthly billing options and no hidden charges for complete transparency."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Corporate Clients",
    "WhyChoosedescription": "Our dedicated support team is available around the clock to assist with scheduling, emergencies, or changes."
  }
]
























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer corporate bus services in Pune?',
      answer: 'Yes, Vaishnavi Travels provides dedicated and professional bus services tailored specifically for corporate clients in Pune. Whether it’s daily employee transportation, team outings, airport transfers, or events and conferences, we ensure timely, comfortable, and well-managed travel for your workforce.',
    },
    {
      question: 'What types of buses are available for corporate transportation?',
      answer: 'We offer a diverse fleet including 17-seater tempo travellers, 27 to 32-seater minibuses, and 50-seater large buses. Depending on your needs, you can choose AC or non-AC buses equipped with modern amenities like comfortable seating, spacious interiors, and GPS tracking for efficient monitoring.',
    },
    {
      question: 'Can Vaishnavi Travels manage daily employee pickup and drop services?',
      answer: 'Absolutely. We provide regular employee transport solutions for companies across Pune, with customized pickup and drop routes, flexible schedules, and real-time tracking. Our goal is to reduce commute stress for your employees and improve punctuality and efficiency.',
    },
    {
      question: 'Is the service suitable for outstation corporate travel as well?',
      answer: 'Yes, we also specialize in outstation travel for corporate events, training programs, offsite meetings, and retreats. Our long-distance buses come with experienced drivers and are maintained for safety and comfort, ensuring your team can relax and focus on the purpose of the trip.',
    },
    {
      question: 'Are your corporate buses safe and reliable?',
      answer: 'Safety and professionalism are at the core of our service. All buses are regularly inspected, sanitized, and driven by trained and background-verified drivers. We also offer emergency support and real-time tracking so your HR or admin team can stay informed during travel.',
    },
    {
      question: 'Do you offer corporate billing and contracts?',
      answer: 'Yes, we offer monthly billing, contract-based services, and custom corporate packages with detailed invoices for accounting and GST compliance. Our team works directly with your admin or procurement department to make the process smooth and transparent.',
    },
    {
      question: 'How can a company book corporate bus service in Pune?',
      answer: 'You can contact us via phone, website, or email with your requirements. Our corporate travel coordinator will assess your needs, suggest the most efficient routes and vehicles, and offer a competitive quote along with a service plan tailored for your organization.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Sandeep Kulkarni",
    position: "HR Manager, TechNova Pvt. Ltd.",
    feedback:
      "We’ve been using Vaishnavi Travels for daily employee transport for over 6 months now, and their service has been exceptional. The buses are always on time, well-maintained, and the drivers are courteous and disciplined. Our employees have seen a noticeable improvement in travel comfort and punctuality, which has reflected positively on our productivity. Their support team is also very responsive and cooperative when it comes to schedule changes or last-minute requests.",
    rating: 5,
  },
  {
    name: "Ms. Ritu Desai",
    position: "Operations Lead, FinEdge Solutions",
    feedback:
      "Vaishnavi Travels managed our company’s offsite transport to Lonavala, and I couldn’t be more satisfied. They provided two 32-seater buses, both of which were in excellent condition and arrived early. The drivers handled the route expertly and ensured we reached our resort safely and on time. The coordination with their team was seamless from the first inquiry to the trip's completion. I would definitely recommend them to any corporate looking for reliable transport partners in Pune.",
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
  "name": "Bus Service for Corporate Pune",
  "image": "https://vaishnavitravel.com/assets/images/corporate-bus-service-pune.jpg",
  "description": "Book reliable corporate bus service in Pune with Vaishnavi Travels. Ideal for staff transport, office events, corporate outings, and shuttle services. AC & Non-AC buses available for daily and event-based bookings.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "2638"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6900",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-service-for-corporate-pune"
  }
};



  return (
    <div>

<Helmet>
  <title>Bus Service for Corporate Pune | Staff & Office Event Transport | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book reliable corporate bus service in Pune with Vaishnavi Travels. Ideal for staff transport, office events, corporate outings, and shuttle services. AC & Non-AC buses available for daily and event-based bookings."
  />
  <meta
    name="keywords"
    content="Corporate Bus Rental in Pune, Office Event Bus Hire Pune, Staff Transport Bus Pune, Bus for Corporate Travel Pune, AC Bus for Office Events Pune, Bus Hire for Corporate Meetings Pune, Corporate Shuttle Service Pune, Company Outing Bus Pune, Seminar Bus Rental Pune, Corporate Guest Bus Booking Pune, Monthly Bus for Corporate Use, Non AC Corporate Bus Service Pune, 32 Seater Corporate Bus Hire"
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
              <img src='/images/keyword/5.jpg' alt='img'  className='img-fluid'/>
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

export default Busserviceforcorporatepune;