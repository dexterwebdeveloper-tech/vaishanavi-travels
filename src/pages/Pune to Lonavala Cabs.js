
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import FaqSectionn from './FaqKeywordd';
import TestimonialSectionkey from './TestimonialSectionKeywordd';

function Punetolonavalacabs() {



  const cardData =
  {
    keyword: ' Pune to Lonavala Cabs',
    heading: 'Vaishnavi Travels: Pune to Lonavala Cabs',
    headingDescription: 'Vaishnavi Travels offers affordable and convenient Pune to Lonavala Cabs, perfect for weekend getaways, family trips, corporate outings, and sightseeing tours. Our cabs are well-maintained with spacious seating, strong air-conditioning, and ample luggage capacity, ensuring a smooth and comfortable ride on the scenic Pune–Lonavala route. With professional chauffeurs, punctual pickups, and flexible booking options, we make your journey hassle-free and enjoyable. Whether it’s a one-day picnic, honeymoon trip, or group tour, Vaishnavi Travels guarantees safe, reliable, and comfortable cab services from Pune to Lonavala.',

    top: 'Top Places to Visit in Lonavala with Vaishnavi Travels',

"topPlaces": [
  {
    "title": "Bhushi Dam",
    "description": "Bhushi Dam is one of Lonavala’s most popular monsoon attractions, famous for its overflowing steps and gushing waters. Families and groups gather here to enjoy splashing in the cool streams during rainy season. The dam is surrounded by lush greenery, making it ideal for photography. Street stalls serve piping-hot corn, tea, and pakoras, adding to the fun. It gets especially lively on weekends and holidays. Bhushi Dam is Lonavala’s vibrant monsoon hotspot."
  },
  {
    "title": "Tiger’s Leap",
    "description": "Tiger’s Leap is a dramatic cliff-top viewpoint that resembles a tiger leaping into the valley. From here, tourists enjoy panoramic views of the Western Ghats and waterfalls in monsoon. Echo Point nearby adds to the excitement with natural sound effects. It is a favorite for sunrise and sunset photography. The spot offers both thrill and tranquility. Tiger’s Leap is Lonavala’s adventure and scenic wonder."
  },
  {
    "title": "Rajmachi Fort",
    "description": "Rajmachi Fort, located amidst the Sahyadri ranges, is a historic site famous for trekking. The twin fortresses of Shrivardhan and Manaranjan offer commanding views of the valleys. Trekkers enjoy trails through forests, waterfalls, and villages, especially during monsoon. The fort narrates Maratha history and adventure. Camping near the fort under starry skies is also popular. Rajmachi is Lonavala’s perfect blend of heritage and trekking."
  },
  {
    "title": "Karla Caves",
    "description": "Karla Caves, dating back to the 2nd century BCE, are ancient Buddhist rock-cut caves near Lonavala. The Chaitya hall with a massive prayer hall and wooden roof is the highlight. Intricate carvings and sculptures showcase India’s Buddhist heritage. The caves also house a temple dedicated to Goddess Ekvira, attracting pilgrims. History lovers and spiritual seekers flock here year-round. Karla Caves are Lonavala’s historic and cultural gem."
  },
  {
    "title": "Lohagad Fort",
    "description": "Lohagad Fort, perched at 3,389 feet, is a popular trekking and heritage spot near Lonavala. The fort’s sturdy gates and bastions narrate Maratha valor and strategy. The Vinchu Kata (Scorpion’s Tail) offers breathtaking views of Pawna Lake and valleys. Trekkers enjoy the lush trails, especially in monsoon with waterfalls along the way. It is an easy trek, suitable for beginners and families. Lohagad Fort is Lonavala’s proud guardian of history."
  },
  {
    "title": "Pawna Lake",
    "description": "Pawna Lake is a serene artificial lake surrounded by hills, located near Lonavala. It is famous for lakeside camping, bonfires, and stargazing. Tourists enjoy kayaking, boating, and picnics by the calm waters. The lake offers stunning views of nearby forts like Lohagad, Tikona, and Tung. Couples and groups love its peaceful atmosphere. Pawna Lake is Lonavala’s refreshing escape for nature and adventure."
  },
  {
    "title": "Duke’s Nose (Nagphani)",
    "description": "Duke’s Nose, also known as Nagphani, is a cliff shaped like a snake’s hood, popular for trekking and adventure sports. Tourists enjoy rock climbing, rappelling, and hiking trails here. The viewpoint offers panoramic views of Lonavala, Khandala, and Mumbai-Pune Expressway. It is a favorite for thrill-seekers and photographers alike. Monsoon adds misty charm to the cliffs. Duke’s Nose is Lonavala’s adventurous landmark."
  },
  {
    "title": "Ryewood Park",
    "description": "Ryewood Park, located in the heart of Lonavala, is a lush garden perfect for families and picnics. It has tall trees, manicured lawns, and a children’s play area. The park also houses an old Shiva temple, adding a spiritual element. Tourists love its peaceful environment amidst the busy town. It is especially popular with morning walkers and families with kids. Ryewood Park is Lonavala’s green retreat within the city."
  },
  {
    "title": "Kune Waterfall",
    "description": "Kune Waterfall, cascading from a height of 200 meters, is one of the highest waterfalls in Maharashtra. Located between Lonavala and Khandala, it is surrounded by lush forests and hills. Monsoon makes the falls roar with beauty and mist. Tourists enjoy trekking and photography near the falls. It is also a popular picnic and nature spot. Kune Waterfall is Lonavala’s natural wonder of monsoon magic."
  },
  {
    "title": "Imagicaa Theme Park",
    "description": "Imagicaa, located near Lonavala, is India’s premier theme and water park offering world-class rides and attractions. Families enjoy roller coasters, water slides, live shows, and entertainment zones. The Snow Park adds a unique experience of icy fun. It is perfect for kids, couples, and groups seeking adventure. Restaurants and shopping zones enhance the outing. Imagicaa is Lonavala’s entertainment hub for thrill and family fun."
  }
],


    "services": [
    {
      "name": "Pune Lonavala Cab Booking",
      "description": "Effortlessly book your cab from Pune to Lonavala with our reliable and customer-friendly service. Our fleet comprises well-maintained vehicles suited for solo travelers, families, and groups, ensuring a comfortable and safe journey. We offer flexible booking options including instant online reservations, competitive pricing, and professional drivers who prioritize your convenience and timely arrivals. Whether it's a quick day trip or a weekend getaway, our Pune to Lonavala cab service guarantees a hassle-free and memorable travel experience."
    },
    {
      "name": "AC Taxi Pune to Lonavala",
      "description": "Travel comfortably with our air-conditioned taxi service from Pune to Lonavala, perfect for beating the heat during your hill station journey. Our AC taxis feature plush interiors and efficient climate control to keep you refreshed throughout the drive. Ideal for families, corporate travelers, and tourists alike, these vehicles are driven by courteous and experienced drivers who ensure a smooth and safe ride. Flexible pick-up times and transparent fare options make this the best choice for a relaxing trip to Lonavala."
    },
    {
      "name": "Round Trip Lonavala Cab",
      "description": "Enjoy the freedom of exploring Lonavala at your own pace with our convenient round trip cab service. Starting from Pune, this option allows flexible pick-up and drop-off timings, stops at popular scenic spots, and the comfort of trusted drivers familiar with the route. Whether it’s a family outing, friends’ weekend, or corporate retreat, our round trip service ensures a seamless travel experience with well-maintained vehicles and excellent customer support."
    },
    {
      "name": "One Way Cab Lonavala from Pune",
      "description": "Our one-way cab service from Pune to Lonavala is perfect for travelers with onward plans or different drop-off points. Offering affordable and transparent pricing, this option provides the convenience of traveling without the need to book a return trip. Vehicles are regularly serviced and operated by professional drivers, ensuring safety and punctuality. Book your one-way taxi easily online or via phone for a hassle-free journey tailored to your schedule."
    },
    {
      "name": "Budget Cab for Lonavala Trip",
      "description": "Looking for a cost-effective ride to Lonavala? Our budget cab service offers reliable transportation without compromising on safety and comfort. Ideal for solo travelers, students, or budget-conscious groups, our fleet includes well-maintained vehicles that provide basic amenities for a pleasant trip. Enjoy competitive pricing, transparent fare structures, and professional drivers dedicated to making your budget travel smooth and stress-free."
    },
    {
      "name": "SUV Cab Lonavala Pune",
      "description": "Experience enhanced comfort and spacious travel with our premium SUV cab service between Lonavala and Pune. Perfect for family outings, group travel, or travelers who prefer extra legroom and luggage capacity, our SUVs are equipped with modern features and driven by skilled drivers. Whether for short trips or extended journeys, enjoy a smooth ride on winding hill roads, ensuring safety and style throughout your travel."
    },
    {
      "name": "Family Lonavala Taxi",
      "description": "Make family trips enjoyable and comfortable with our dedicated family taxi service to Lonavala. Vehicles are spacious and equipped with safety features suitable for children and elders alike. Our courteous drivers prioritize your family’s convenience, assisting with luggage and ensuring smooth driving on hilly terrain. Tailored packages are available for day trips, weekend getaways, or extended stays, guaranteeing a stress-free travel experience for your entire family."
    },
    {
      "name": "Corporate Cab Lonavala",
      "description": "Our corporate cab service caters to business travelers commuting between Pune and Lonavala. Offering punctual, discreet, and professional transportation, these cabs are perfect for client meetings, team outings, or corporate retreats. Choose from a range of vehicles including AC sedans and SUVs, all maintained to high standards and operated by experienced drivers who understand corporate etiquette and priorities."
    },
    {
      "name": "Online Lonavala Cab Booking",
      "description": "Book your Lonavala cab from Pune quickly and securely using our online platform. Choose your preferred vehicle, select pick-up and drop-off times, and get instant confirmation with transparent fare details. Our easy-to-use booking system is supported by 24/7 customer service to assist with changes or queries, ensuring a smooth and convenient experience from reservation to journey completion."
    },
    {
      "name": "Scenic Hill Station Cab",
      "description": "Enjoy breathtaking views and a scenic drive to Lonavala with our specialized hill station cab services. Our experienced drivers know the best routes and viewpoints, allowing you to soak in the natural beauty en route. Perfect for tourists and nature lovers, this service includes comfortable vehicles equipped for hill terrain and optional stops at picturesque locations, making the journey as memorable as the destination."
    },
    {
      "name": "24/7 Cab Pune Lonavala",
      "description": "Our 24/7 cab service between Pune and Lonavala ensures you have transportation available anytime, day or night. Whether you have an early morning departure or a late-night arrival, our fleet and drivers are ready to cater to your travel needs with promptness and professionalism. Flexible scheduling, reliable vehicles, and courteous drivers make this service ideal for all kinds of travelers, ensuring peace of mind regardless of your timetable."
    },
    {
      "name": "Mini Cab Lonavala Pune",
      "description": "For solo travelers or small groups, our mini cab service between Lonavala and Pune offers an economical and efficient transportation option. Compact and fuel-efficient vehicles provide easy maneuverability and quick rides while maintaining comfort and safety. Book this service for short trips, airport transfers, or quick errands with the benefit of transparent fares and prompt driver service."
    },
    {
      "name": "Private Lonavala Cab Hire",
      "description": "Experience personalized and flexible travel with our private cab hire service to Lonavala. Perfect for those who prefer exclusive use of the vehicle, this service offers door-to-door convenience, customizable routes, and schedules. Whether you’re planning a special occasion, group outing, or leisure trip, enjoy privacy, comfort, and attentive service from experienced drivers dedicated to making your journey pleasant and hassle-free."
    }
  ],
  "tableData": [
    ["Pune Lonavala Cab Booking", "AC Taxi Pune to Lonavala"],
    ["Round Trip Lonavala Cab", "One Way Cab Lonavala from Pune"],
    ["Budget Cab for Lonavala Trip", "SUV Cab Lonavala Pune"],
    ["Family Lonavala Taxi", "Corporate Cab Lonavala"],
    ["Online Lonavala Cab Booking", "Scenic Hill Station Cab"],
    ["24/7 Cab Pune Lonavala", "Mini Cab Lonavala Pune"],
    ["Private Lonavala Cab Hire"]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Pune to Lonavala Cabs",
    "WhyChoosedescription": "Vaishnavi Travels offers comfortable and reliable cab services from Pune to Lonavala, perfect for weekend getaways, family trips, and corporate travel."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from Swift Dzire, Ertiga, Innova, Urbania, and Tempo Traveller based on your group size and comfort preferences."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Our vehicles are regularly serviced and thoroughly cleaned to ensure safety and hygiene throughout your journey."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with the Route",
    "WhyChoosedescription": "Our professional drivers know the best routes between Pune and Lonavala for a smooth and timely travel experience."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "We offer all-inclusive pricing covering fuel, tolls, parking, and driver allowances with no hidden charges."
  },
  {
    "WhyChooseheading": "Flexible Pickup and Drop-off Locations",
    "WhyChoosedescription": "Enjoy convenient door-to-door service from your home, hotel, or office in Pune and drop-off at your preferred destination in Lonavala."
  },
  {
    "WhyChooseheading": "Ideal for Leisure and Group Trips",
    "WhyChoosedescription": "Perfect for families, friends, and corporate groups looking to explore the scenic beauty of Lonavala."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Hassle-Free Booking",
    "WhyChoosedescription": "Our support team is available round-the-clock to assist you with bookings, itinerary planning, and travel inquiries."
  }
]


















  }




const faqData = [
  [
    {
      question: 'What is the typical fare for a cab from Pune to Lonavala?',
      answer: 'The fare generally starts around **₹1,499** for a one‑way AC hatchback. Sedans may start from ~₹1,650‑₹2,000 depending on the service provider and model. :contentReference[oaicite:0]{index=0}',
    },
    {
      question: 'How far is Lonavala from Pune and how long does the ride take?',
      answer: 'Lonavala is about **65‑70 km** from Pune. The travel time by car is usually ~**1.5 to 2 hours**, depending on traffic and route. :contentReference[oaicite:1]{index=1}',
    },
    {
      question: 'What types of vehicles are available for the Pune‑to‑Lonavala route?',
      answer: 'You can get AC hatchbacks, AC sedans (e.g. Dzire / Etios), SUVs like Ertiga / Innova, and larger vehicles. Many providers also offer premium SUVs. :contentReference[oaicite:2]{index=2}',
    },
    {
      question: 'Are tolls, parking, and driver allowance included in the fare?',
      answer: 'Some fares are “all‑inclusive” (fuel, toll, driver charges etc.), but others list these separately (especially driver allowance, parking, or night charges). Always confirm with the provider. :contentReference[oaicite:3]{index=3}',
    },
    {
      question: 'Is doorstep pickup and drop‑off available in Pune for Lonavala cabs?',
      answer: 'Yes, most cab services offer pickup from your location anywhere in Pune (or nearby) and drop you off in Lonavala. :contentReference[oaicite:4]{index=4}',
    },
    {
      question: 'How far in advance should I book a cab to Lonavala from Pune?',
      answer: 'It is recommended to book at least 1 day in advance. On weekends, holidays or during monsoon season demand is higher, so earlier bookings help. (Many companies see rush then.)',
    },
    {
      question: 'Can I book a round‑trip (& sightseeing) via Lonavala with a cab?',
      answer: 'Yes — many providers let you customize trip (round‑trip), include stops (e.g. to Karla caves, Bhushi Dam etc.), and offer day‑trip packages. The total fare will be higher depending on duration and stops.',
    }
  ]
];

const testimonials = [
  {
    name: "Mr. Amit Sharma",
    position: "Weekend Traveller",
    feedback: "Booked a Sedan from Pune to Lonavala — the car was clean and AC worked perfectly. Driver was punctual and we reached in about 1 hour 40 mins despite traffic. Happy with the fare quoted. Highly recommend Vaishnavi Travels!",
    rating: 5,
  },
  {
    name: "Ms. Richa Gupta",
    position: "Group of Friends",
    feedback: "We took an SUV for Lonavala trip. Spacious, comfortable and the driver allowed us photo stops. Driver charges & tolls were all clarified in advance. Good value for money!",
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

const lonavalaCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Pune to Lonavala Cabs",
  "description": "Book AC and Non-AC cabs from Pune to Lonavala for round trips, one-way rides, family tours, corporate travel, and scenic hill station visits. Affordable and reliable taxi service available 24/7.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vaishnavi Travels",
    "telephone": "+91-9765685295",
    "url": "https://vaishnavitravel.com/pune-to-lonavala-cabs"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Pune"
    },
    {
      "@type": "City",
      "name": "Lonavala"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lonavala Cab Booking Offers",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One Way Cab Pune to Lonavala"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Round Trip Lonavala Cab"
        }
      }
    ]
  },
  "availability": "https://schema.org/InStock",
  "priceCurrency": "INR"
};





  return (
    <div>

<Helmet>
  <title>Pune to Lonavala Cabs | AC & Budget Taxi Service</title>
  <meta
    name="description"
    content="Book AC and Non-AC cabs from Pune to Lonavala for round trips, one-way rides, family tours, corporate travel, and scenic hill station visits. Affordable and reliable taxi service available 24/7."
  />
  <meta
    name="keywords"
    content="Pune Lonavala Cab Booking, AC Taxi Pune to Lonavala, Round Trip Lonavala Cab, One Way Cab Lonavala from Pune, Budget Cab for Lonavala Trip, SUV Cab Lonavala Pune, Family Lonavala Taxi, Corporate Cab Lonavala, Online Lonavala Cab Booking, Scenic Hill Station Cab, 24/7 Cab Pune Lonavala, Mini Cab Lonavala Pune, Private Lonavala Cab Hire"
  />
  <script type="application/ld+json">
    {JSON.stringify(lonavalaCabSchema)}
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
              <img src='/images/keyword/63.jpg' alt='img'  className='img-fluid'/>
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

export default Punetolonavalacabs;