
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Bushireforschooltripinpune() {



  const cardData =
  {
    keyword: ' Bus Hire for School Trips in Pune',
    heading: 'Vaishnavi Travels: Bus Hire for School Trips in Pune',
    headingDescription: 'Vaishnavi Travels provides dependable and budget-friendly Bus Hire for School Trips in Pune, designed to make student travel safe, comfortable, and well-organized. Our buses come with spacious seating, powerful air-conditioning, and ample storage for bags and equipment, ensuring a smooth journey for students and teachers alike. With trained and experienced drivers, punctual service, and flexible booking options, we give schools complete peace of mind during excursions. Whether it’s a short educational tour, a day picnic, or a long outstation trip, Vaishnavi Travels guarantees safe, reliable, and hassle-free transportation for every school outing.',

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
    "name": "School Tour Bus Booking Pune",
    "description": "Convenient and reliable school tour bus booking service in Pune offering a variety of buses suitable for day trips and multi-day tours. Our buses come with safety features, comfortable seating, and experienced drivers to ensure a smooth journey for students and staff."
  },
  {
    "name": "Educational Visit Bus Hire Pune",
    "description": "Specialized bus hire service for educational visits in Pune, providing well-maintained buses with flexible scheduling. Perfect for museum trips, science centers, and historical tours, ensuring students travel comfortably and arrive on time for their learning experiences."
  },
  {
    "name": "Safe Bus Rental for Students",
    "description": "Safety-first bus rental services designed for student transport in Pune. Our buses are equipped with seat belts, GPS tracking, and undergo regular safety checks. Drivers are trained specifically to handle student groups, making it a trustworthy choice for schools."
  },
  {
    "name": "School Picnic Bus Pune",
    "description": "Affordable and dependable bus rentals for school picnics in Pune. Options include both AC and non-AC buses, all maintained to high standards of cleanliness and safety. Our service ensures timely pick-up and drop-off for hassle-free group outings."
  },
  {
    "name": "Group Bus for Students Pune",
    "description": "Spacious group buses in Pune designed to accommodate large numbers of students for school events, excursions, or sports meets. Buses feature comfortable seating and ample luggage space, with flexible rental durations to suit your schedule."
  },
  {
    "name": "Non AC School Bus Hire",
    "description": "Cost-effective non-AC school bus hire options in Pune suitable for short-distance travel and budget-conscious schools. These buses provide safe and comfortable transport without the extra cost of air conditioning, ideal for local trips."
  },
  {
    "name": "College Tour Bus Hire Pune",
    "description": "Comfortable and well-equipped buses available for college tours in Pune. Our fleet includes vehicles with modern amenities such as AC, sound systems, and large luggage compartments, perfect for long-distance educational trips and group travel."
  },
  {
    "name": "Field Trip Transport Pune",
    "description": "Reliable transport services in Pune for school field trips with flexible routes and timings. Our buses are clean, well-maintained, and operated by professional drivers who prioritize student safety and timely arrivals."
  },
  {
    "name": "Bus with Driver for School Trip",
    "description": "Professional bus hire service with experienced drivers for school trips in Pune. Drivers are trained in student safety and route management to ensure stress-free transportation for both students and accompanying staff."
  },
  {
    "name": "Large School Group Bus Pune",
    "description": "Buses designed for large school groups in Pune, offering comfortable seating arrangements and sufficient space for luggage. Ideal for big excursions, sports events, and inter-school competitions, with emphasis on safety and punctuality."
  },
  {
    "name": "Budget School Trip Bus Pune",
    "description": "Affordable school trip bus rental solutions in Pune that do not compromise on safety or comfort. Perfect for schools organizing regular outings or one-time events while keeping travel costs low."
  },
  {
    "name": "School Function Bus Booking",
    "description": "Efficient bus booking services for school functions and events in Pune. Our buses are available on flexible schedules to accommodate ceremonies, award functions, and extracurricular activities with reliable transport support."
  },
  {
    "name": "Bus for Academic Trips Pune",
    "description": "Dedicated bus rental service in Pune for academic trips and educational excursions. Equipped with safety features and comfortable seating, our buses help students focus on learning while we handle the logistics of travel."
  }
],
"tableData": [
  ["School Tour Bus Booking Pune", "Educational Visit Bus Hire Pune"],
  ["Safe Bus Rental for Students", "School Picnic Bus Pune"],
  ["Group Bus for Students Pune", "Non AC School Bus Hire"],
  ["College Tour Bus Hire Pune", "Field Trip Transport Pune"],
  ["Bus with Driver for School Trip", "Large School Group Bus Pune"],
  ["Budget School Trip Bus Pune", "School Function Bus Booking"],
  ["Bus for Academic Trips Pune"]
],




  "whychoose": [
  {
    "WhyChooseheading": "Trusted Bus Hire for School Trips in Pune",
    "WhyChoosedescription": "Vaishnavi Travels offers reliable and safe bus hire services specifically tailored for school trips across Pune."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Seating for Students",
    "WhyChoosedescription": "Our buses provide ample legroom and comfortable seats to ensure a pleasant travel experience for all students."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Buses",
    "WhyChoosedescription": "Each vehicle is thoroughly cleaned and maintained regularly, prioritizing safety and hygiene for young passengers."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages for School Schedules",
    "WhyChoosedescription": "Choose from hourly, full-day, or multi-day bus hire options designed to fit your school trip itinerary."
  },
  {
    "WhyChooseheading": "Experienced and Responsible Drivers",
    "WhyChoosedescription": "Our professional drivers are trained to handle school trips with care, ensuring timely and secure transport."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "All-inclusive pricing covers fuel, tolls, taxes, and driver allowances for easy budgeting and peace of mind."
  },
  {
    "WhyChooseheading": "Ideal for Educational Tours and Extracurricular Activities",
    "WhyChoosedescription": "Perfect for field trips, sports meets, cultural excursions, and other school group outings in Pune."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Seamless Booking",
    "WhyChoosedescription": "Vaishnavi Travels offers round-the-clock customer assistance to help with bookings and travel queries."
  }
]


























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer bus hire services for school trips in Pune?',
      answer: 'Yes, Vaishnavi Travels provides reliable and safe bus hire services specifically for school trips in Pune. Our buses are designed to accommodate groups of all sizes, ensuring a comfortable and secure journey for students and accompanying teachers.',
    },
    {
      question: 'What types of buses are available for school trip hires?',
      answer: 'We offer a range of vehicles including 17-seater tempo travellers, 27 and 32-seater minibuses, as well as larger 50-seater coaches. All buses are well-maintained, clean, and equipped with safety features such as seat belts to ensure the safety of young passengers.',
    },
    {
      question: 'Are your buses suitable for both short and long school trips?',
      answer: 'Absolutely. Whether it’s a half-day local trip or a multi-day outstation excursion, our fleet is equipped to handle all types of school trips with comfort and safety in mind.',
    },
    {
      question: 'Do bus hires include professional drivers?',
      answer: 'Yes, all our bus hires come with experienced, background-verified drivers who prioritize safety and punctuality, making sure your trip is smooth and hassle-free.',
    },
    {
      question: 'Can we arrange multiple pickup points for school groups?',
      answer: 'Yes, we can organize pickups from multiple locations within Pune to conveniently gather all students and staff before heading to your destination.',
    },
    {
      question: 'What is included in the rental fare for school trip bus hire?',
      answer: 'The rental fare includes the bus, professional driver, and fuel. Additional costs like tolls, parking, and taxes may apply based on the trip itinerary and duration.',
    },
    {
      question: 'How early should I book a bus for a school trip?',
      answer: 'To ensure availability and get the best rates, we recommend booking at least 1 to 2 weeks in advance, especially during peak school outing seasons.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Prakash Joshi",
    position: "School Coordinator",
    feedback:
      "We booked a 32-seater bus from Vaishnavi Travels for our annual school excursion, and it was a fantastic experience. The bus was clean and comfortable, and the driver was very patient and attentive with the students. Their service made the entire trip stress-free for us, and the kids enjoyed the ride thoroughly.",
    rating: 5,
  },
  {
    name: "Ms. Kavita Patil",
    position: "Teacher",
    feedback:
      "Vaishnavi Travels provided excellent bus hire services for our school’s science fair outing. The bus arrived on time, was well-maintained, and the driver was very cooperative. The flexibility they offered for multiple pickup points was very helpful. I highly recommend them for any school transportation needs.",
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
  "name": "Bus Hire for School Trips in Pune",
  "image": "https://vaishnavitravel.com/assets/images/bus-hire-for-school-trips-pune.jpg",
  "description": "Book safe and affordable bus hire for school trips in Pune with Vaishnavi Travels. Perfect for educational visits, picnics, and academic trips. AC and Non-AC buses with experienced drivers to ensure a smooth journey.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "2893"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-hire-for-school-trips-in-pune"
  }
};



  return (
    <div>

<Helmet>
  <title>Bus Hire for School Trips in Pune | Safe & Affordable Student Transport | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book safe and affordable bus hire for school trips in Pune with Vaishnavi Travels. Perfect for educational visits, picnics, and academic trips. AC and Non-AC buses with experienced drivers to ensure a smooth journey."
  />
  <meta
    name="keywords"
    content="School Tour Bus Booking Pune, Educational Visit Bus Hire Pune, Safe Bus Rental for Students, School Picnic Bus Pune, Group Bus for Students Pune, Non AC School Bus Hire, College Tour Bus Hire Pune, Field Trip Transport Pune, Bus with Driver for School Trip, Large School Group Bus Pune, Budget School Trip Bus Pune, School Function Bus Booking, Bus for Academic Trips Pune"
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
              <img src='/images/keyword/72.jpg' alt='img'  className='img-fluid'/>
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

export default Bushireforschooltripinpune;