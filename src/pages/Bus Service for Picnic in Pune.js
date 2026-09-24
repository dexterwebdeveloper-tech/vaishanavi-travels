
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Busserviceforpicnicpune() {



  const cardData =
  {
    keyword: ' Bus Service for Picnic in Pune',
    heading: 'Vaishnavi Travels: Bus Service for Picnic in Pune',
    headingDescription: 'Vaishnavi Travels provides affordable and convenient Bus Service for Picnic in Pune, perfect for school outings, college trips, office excursions, and family gatherings. Our buses are spacious, well-maintained, and equipped with comfortable seating, air-conditioning, and ample storage to make your journey enjoyable. With professional drivers, on-time pickups, and flexible booking options, we ensure a safe and hassle-free travel experience to picnic spots in and around Pune. Whether it’s a one-day trip to Lonavala, a weekend getaway, or a group picnic at a scenic destination, Vaishnavi Travels guarantees comfort, reliability, and stress-free transportation for every traveler.',

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
    "name": "Picnic Bus Booking Pune",
    "description": "Convenient picnic bus booking service in Pune tailored for group outings of all sizes. We offer a range of buses including mini, standard, and large coaches with comfortable seating and safety features. Our service includes flexible pickup/drop-off locations, customizable routes, and professional drivers ensuring a hassle-free and enjoyable travel experience for family, friends, or corporate picnics."
  },
  {
    "name": "Family Picnic Bus Hire Pune",
    "description": "Specialized bus hire services in Pune for family picnic trips, offering spacious and clean vehicles equipped with air conditioning, ample luggage space, and child safety features. Perfect for family reunions, day trips, or weekend getaways, our buses come with courteous drivers and flexible scheduling to match your itinerary and ensure a memorable outing."
  },
  {
    "name": "School Picnic Bus Rental Pune",
    "description": "Safe and reliable school picnic bus rental services in Pune, designed with child safety as a priority. Our buses feature seat belts, well-maintained interiors, and experienced drivers trained in handling young passengers. Ideal for school excursions, sports meets, or educational trips, with options for AC and non-AC buses depending on your budget and route."
  },
  {
    "name": "AC Bus for Picnic Pune",
    "description": "Air-conditioned buses for picnic trips in Pune that guarantee comfort during hot weather or long-distance travel. These buses offer reclining seats, clean interiors, and large windows for sightseeing. Ideal for corporate picnics, college trips, or leisure tours where a cool and relaxing journey enhances the overall experience."
  },
  {
    "name": "Picnic Group Bus Hire",
    "description": "Group bus hire service for picnic outings in Pune catering to medium and large groups. Our fleet includes buses from 20 to 50 seaters, all equipped with safety features and ample storage for picnic gear. Flexible booking options and customized itineraries ensure that your group’s travel needs are met with ease and professionalism."
  },
  {
    "name": "College Picnic Bus Pune",
    "description": "Affordable and reliable college picnic bus rentals in Pune, designed to safely transport students and faculty to picnic destinations. Buses are equipped with comfortable seating, audio systems for entertainment, and experienced drivers familiar with popular picnic spots around Pune and nearby hill stations."
  },
  {
    "name": "Picnic Tour Bus Rental",
    "description": "Tour-focused picnic bus rentals offering well-maintained buses with amenities such as AC, ample legroom, and luggage compartments. Perfect for leisure tours, nature trips, and sightseeing excursions, our service includes professional drivers, GPS tracking, and options for multi-day rentals to make your picnic tour smooth and enjoyable."
  },
  {
    "name": "Mini Bus for Picnic Pune",
    "description": "Compact and maneuverable mini buses for small group picnic outings in Pune, seating 17 to 25 passengers. Ideal for intimate family trips or small college groups, these buses offer a cost-effective option without compromising on comfort or safety, featuring AC and clean interiors for a pleasant travel experience."
  },
  {
    "name": "50 Seater Picnic Bus Booking",
    "description": "Spacious 50-seater buses available for large picnic groups in Pune, offering ample legroom, reclining seats, and overhead storage for picnic essentials. Perfect for corporate outings, big family gatherings, or college trips where group travel comfort and coordination are paramount. Our service includes prompt pickups and flexible scheduling."
  },
  {
    "name": "Budget Picnic Bus Hire Pune",
    "description": "Cost-effective picnic bus rental options in Pune providing well-maintained non-AC and AC buses at competitive rates. Ideal for budget-conscious groups seeking safe and reliable transport for day picnics or short excursions without compromising on service quality and passenger comfort."
  },
  {
    "name": "Tourist Bus for Picnic",
    "description": "Tourist-style buses equipped for picnic travel, featuring comfortable seating, panoramic windows, and professional drivers knowledgeable about popular picnic spots near Pune. This service is tailored for tourists or locals planning scenic day trips, including guided route options and flexible pick-up points."
  },
  {
    "name": "One Day Picnic Bus Pune",
    "description": "One-day picnic bus rental services in Pune designed for quick and convenient group outings. Our buses come with driver support for return trips on the same day, flexible timing, and clean interiors to ensure a comfortable and enjoyable journey for your day-long picnic plans."
  },
  {
    "name": "Online Picnic Bus Booking Pune",
    "description": "User-friendly online booking platform for picnic bus rentals in Pune, offering instant price quotes, vehicle selection, and digital payment options. Enjoy transparent pricing, customizable add-ons such as onboard refreshments and decorations, and real-time booking confirmations to streamline your picnic travel arrangements."
  }
],
"tableData": [
  ["Picnic Bus Booking Pune", "Family Picnic Bus Hire Pune"],
  ["School Picnic Bus Rental Pune", "AC Bus for Picnic Pune"],
  ["Picnic Group Bus Hire", "College Picnic Bus Pune"],
  ["Picnic Tour Bus Rental", "Mini Bus for Picnic Pune"],
  ["50 Seater Picnic Bus Booking", "Budget Picnic Bus Hire Pune"],
  ["Tourist Bus for Picnic", "One Day Picnic Bus Pune"],
  ["Online Picnic Bus Booking Pune"]
],




   "whychoose": [
  {
    "WhyChooseheading": "Reliable Bus Service for Picnic Trips in Pune",
    "WhyChoosedescription": "Vaishnavi Travels offers safe and comfortable bus services for picnics, perfect for family outings and group adventures around Pune."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Buses for Groups",
    "WhyChoosedescription": "Our buses provide ample seating and legroom, ensuring a pleasant and relaxed journey to your picnic destination."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Vehicles",
    "WhyChoosedescription": "Each bus is regularly serviced and thoroughly cleaned to guarantee hygiene and reliability for your picnic trip."
  },
  {
    "WhyChooseheading": "Flexible Rental Plans to Fit Your Picnic Schedule",
    "WhyChoosedescription": "Choose from hourly, full-day, or customized packages tailored to your picnic itinerary and group size."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Pune’s Best Picnic Spots",
    "WhyChoosedescription": "Our professional drivers know the routes to popular picnic destinations, ensuring timely and safe travel."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "Enjoy all-inclusive rates covering fuel, tolls, taxes, and driver charges for a hassle-free experience."
  },
  {
    "WhyChooseheading": "Perfect for Family, Friends, and School Picnics",
    "WhyChoosedescription": "Ideal for all types of picnic groups, including family gatherings, friends’ outings, and school trips in and around Pune."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Easy Booking and Assistance",
    "WhyChoosedescription": "Vaishnavi Travels provides round-the-clock customer support to help you book and manage your picnic transport seamlessly."
  }
]
























  }









const faqData = [
  [
    {
      question: 'Does Vaishnavi Travels offer bus services for picnics in Pune?',
      answer: 'Yes, Vaishnavi Travels provides comfortable and reliable bus services specifically tailored for picnic trips in and around Pune. Whether it’s a family outing, school picnic, or a group excursion to nearby spots like Lonavala, Lavasa, or Mahabaleshwar, our buses ensure a safe and enjoyable journey for all passengers.',
    },
    {
      question: 'What types of buses are available for picnic bookings?',
      answer: 'We offer a variety of buses including 17-seater tempo travellers, 27-seater minibuses, and larger 32 to 50-seater coaches. All vehicles are well-maintained, air-conditioned, and designed to provide ample space for passengers and luggage, making them perfect for picnic groups of all sizes.',
    },
    {
      question: 'Can I book a bus for a half-day or full-day picnic trip?',
      answer: 'Absolutely! We provide flexible rental options ranging from a few hours to a full day or even multiple days, depending on your picnic itinerary and group size. Our packages are designed to cater to your exact travel needs and budget.',
    },
    {
      question: 'Are the buses equipped with safety and comfort features?',
      answer: 'Yes, all our buses come with comfortable seats, seat belts, air conditioning, and regular maintenance checks to ensure passenger safety. Our experienced drivers are trained to handle various terrains and ensure a smooth ride to your picnic destination.',
    },
    {
      question: 'Can the bus pick us up from multiple locations for the picnic?',
      answer: 'Yes, we can arrange pickups from multiple points within Pune or surrounding areas to accommodate all members of your picnic group. Our team coordinates routes efficiently to ensure timely pickups and drop-offs.',
    },
    {
      question: 'How far in advance should I book a bus for a picnic in Pune?',
      answer: 'To ensure availability, especially during weekends and holidays, it’s best to book at least 1 to 2 weeks in advance. However, we also accommodate last-minute bookings based on vehicle availability.',
    },
    {
      question: 'How can I book a bus service for a picnic in Pune?',
      answer: 'You can easily book through our website, mobile app, or by calling our customer support. Just provide your travel details, group size, and preferred timings, and we will arrange the perfect bus for your picnic.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Rohit Deshmukh",
    position: "School Teacher",
    feedback:
      "Vaishnavi Travels made our school picnic to Lonavala an unforgettable experience. The bus was spacious, clean, and the driver was very courteous and professional. The journey was smooth and comfortable for all our students and teachers. Their timely service and attention to safety gave us complete peace of mind throughout the trip.",
    rating: 5,
  },
  {
    name: "Ms. Anjali Kulkarni",
    position: "Family Organizer",
    feedback:
      "We hired Vaishnavi Travels for a family picnic to Lavasa, and the experience was fantastic. The bus was very comfortable, air-conditioned, and had plenty of space for all our luggage. The driver was friendly and knowledgeable about the route, making the trip enjoyable. I highly recommend Vaishnavi Travels for anyone planning a picnic in Pune.",
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
  "name": "Bus Service for Picnic in Pune",
  "image": "https://vaishnavitravel.com/assets/images/picnic-bus-service-pune.jpg",
  "description": "Book picnic bus services in Pune with Vaishnavi Travels. Perfect for school, college, and family outings. Choose from AC, Non-AC, Mini, and 50-seater buses. Affordable and reliable one-day picnic transport options.",
  "brand": {
    "@type": "Brand",
    "name": "Vaishnavi Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "2415"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4800",
    "availability": "https://schema.org/InStock",
    "url": "https://vaishnavitravel.com/bus-service-for-picnic-in-pune"
  }
};





  return (
    <div>
<Helmet>
  <title>Bus Service for Picnic in Pune | School & Family Outings | Vaishnavi Travels</title>
  <meta
    name="description"
    content="Book picnic bus services in Pune with Vaishnavi Travels. Perfect for school, college, and family outings. Choose from AC, Non-AC, Mini, and 50-seater buses. Affordable and reliable one-day picnic transport options."
  />
  <meta
    name="keywords"
    content="Picnic Bus Booking Pune, Family Picnic Bus Hire Pune, School Picnic Bus Rental Pune, AC Bus for Picnic Pune, Picnic Group Bus Hire, College Picnic Bus Pune, Picnic Tour Bus Rental, Mini Bus for Picnic Pune, 50 Seater Picnic Bus Booking, Budget Picnic Bus Hire Pune, Tourist Bus for Picnic, One Day Picnic Bus Pune, Online Picnic Bus Booking Pune"
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
              <img src='/images/keyword/7.jpg' alt='img'  className='img-fluid'/>
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

export default Busserviceforpicnicpune;