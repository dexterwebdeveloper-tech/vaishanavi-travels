import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Busbookingformarrieage from './pages/Bus Booking for Marriage';
import HeroSection from './components/HeroSlider';
import AboutSection from './pages/AboutSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Service from './pages/Service';
import Ourfleets from './pages/Ourfleets';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import ContactUsSection from './pages/ContactUsSection';
import Enquiry from './pages/Enquiry';
import ScrollToTop from './components/ScrollToTop';
import Bushireforweddinginpune from './pages/Bus Hire for Wedding in Pune';
import Bushirenearmepune from './pages/Bus Hire Near Me Pune';
import Bushireforoutstation from './pages/Bus Hire for Outstation';
import Busserviceforcorporatepune from './pages/Bus Service for Corporate Pune';
import Busserviceforcorporateevents from './pages/Bus Service for Corporate Events';
import Busserviceforpicnicpune from './pages/Bus Service for Picnic in Pune';
import Busserviceforschooltrips from './pages/Bus Rentals for School Trips in Pune';
import Bushireforschooltripinpune from './pages/Bus Hire for School Trips in Pune';
import Busrentalsfortourpackages from './pages/Bus Rental for Tour Packages';
import Busonrentforeventsinpune from './pages/Bus on Rent for Event in Pune';
import Nonacbusrentalsserviceinpune from './pages/Non AC Bus Rental Service in Pune';
import Acbusonrentinpune from './pages/AC Bus On Rent in Pune';
import Punelocalbusonrent from './pages/Pune Local Bus on Rent';
import Busonrentinpune from './pages/Bus On Rent in Pune';
import Busonrentinpimprichichwad from './pages/Bus On Rent in Pimpri Chinchwad';
import Twentifivetempotraveller from './pages/25 Seater Tempo Traveller on Rent in Pune';
import Thirtytwoseaterbusrentinpune from './pages/32 Seater Bus Rent in Pune';
import Thirtinfivebusonrentinpune from './pages/35 Seater Bus on Rent in Pune';
import Fourtizeroseaterbusonrentinpune from './pages/40 Seater Bus on Rent in Pune';
import Fourtifivebusonreninpune from './pages/45 Seater Bus on Rent in Pune';
import Fiftyzerobusonrentinpune from './pages/50 Seater Bus on Rent in Pune';
import Thirtytwotempotraveller from './pages/32 Seater Tempo Traveller Service';
import Punetomumbaidarshanbusonrent from './pages/Pune to Mumbai Darshan Bus on Rent';
import Punetoshirdibushire from './pages/Pune to Shirdi Bus Hire';
import Punetoganpatipulebeachbusrentalsservice from './pages/Pune to Ganpatipule Beach Bus Rental Service';
import Punetokolhapurbusonrent from './pages/Pune to Kolhapur Bus on Rent';
import Punetoaurangabadbushireonrent from './pages/Pune to Aurangabad Bus Hire on Rent';
import Punetopandharpurbushire from './pages/Pune to Pandharpur Bus Hire';
import Punesadeteenshaktipeethbusonrent from './pages/Pune Sade Teen Shakti Peeth Bus on Rent';
import Punetolonavalabushire from './pages/Pune to Lonavala Bus Hire';
import Punetojyotilinga from './pages/Pune to 5 Jyotirlinga Darshan Bus Hire';
import Punetobhimashankar from './pages/Pune to Bhimashankar Jyotirlinga Bus Hire in Pune';
import Luxuryforceurbaniaonrentinpune from './pages/Luxury Force Urbania on Rent in Pune';
import Forceurbaniaonrentnpune from './pages/Force Urbania on Rent in Pune';
import Urbaniatouristbusonrentinpune from './pages/Urbania Tourist Bus on Rent in Pune';
import Onethreeforceurbaniaonrentinpune from './pages/13 Seater Force Urbania on Rent in Pune';
import Onesevanseater from './pages/17 Seater Force Urbania on Rent in Pune';
import Urbaniaonrentinpiprichichwad from './pages/Urbania on Rent in Pimpri Chinchwad';
import Urbaniahireforcorporateeventainpune from './pages/Urbania Hire for Corporate Event in Pune';
import Punetomumbaiurbaniaonrent from './pages/Pune to Mumbai Urbania on Rent';
import Punetoshirdiforceurbaniaonrent from './pages/Pune to Shirdi Force Urbania on Rent';
import Punetomahabaleshwar from './pages/Pune to Mahabaleshwar Urbania on Rent';
import Punetogoaurbaniaonrent from './pages/Pune to Goa Urbania on Rent';
import Punetoashtavinayakurbaniatour from './pages/Pune to Ashtavinayak Urbania Tour Package';
import Urbaniahireforoutstationinpune from './pages/Urbania Hire for Outstation in Pune';
import Urbanialuxurybusrentalsinpune from './pages/Urbania Luxury Bus Rentals in Pune';
import Urbaniaonrentinpune from './pages/Urbania on Rent in Pune';
import Punetooutstationurbania from './pages/Pune to Outstation Urbania Bus Hire in Pune';
import Luxurytempotraveller from './pages/Luxury Tempo Traveller on Rent in Pune';
import Tempotravellerhire from './pages/Tempo Traveller Hire for Outstation in Pune';
import Swiftdzireonrentinpune from './pages/Swift Dzire On Rent in Pune';
import Punetobhimashankarcab from './pages/Pune to Bhimashankar Cab';
import Punetosambhajinagartaxi from './pages/Pune to Sambhajinagar Taxi';
import Punetokonkandarshancabs from './pages/Pune to Konkan Darshan Cabs';
import TempoTravelleronrentinpune from './pages/Tempo Traveller On Rent in Pune';
import Punetomumbaiinternationalairport from './pages/Pune to Mumbai International Airport Cab';
import Punetoshirdicab from './pages/Pune to Shirdi Cab';
import Punecabservice from './pages/Pune Cab Service';
import Punetolavasacitycabs from './pages/Pune to Lavasa City Cabs';
import Minibusonrentinpune from './pages/Mini Bus On Rent in Pune';
import Punetomahabaleshwarcabs from './pages/Pune to Mahabaleshwar Cabs';
import Punetopanchganicabfare from './pages/Pune to Panchgani Cab Fare';
import Ertigaonrentinpune from './pages/Ertiga On Rent in Pune';
import Punetolonavalacabs from './pages/Pune to Lonavala Cabs';
import Punetopansharpurtaxi from './pages/Pune to Pandharpur Taxi';
import Bestcabserviceinpune from './pages/Best Cab Service in Pune';
import Puneonlinecabbooking from './pages/Pune Online Cab Booking';
import Corporatecabserviceinpune from './pages/Corporate Cab Service in Pune';
import Punetogoacabs from './pages/Pune to Goa Cabs';
import Punetoajantaelloracab from './pages/Pune to Ajanta Ellora Cabs';
import Puneairporttomumbaitaxi from './pages/Pune Airport to Mumbai Taxi';
import Ashtavinayakdarshancabs from './pages/Ashtavinayak Darshan Cab';
import Punetomumbaicabs from './pages/Pune to Mumbai Cabs';
import Puneoutstationcabs from './pages/Pune Outstation Cabs';
import ContactButtons from './components/ContactButtons';




function App() {



  return (
    <Router>
      <ScrollToTop />
      <Header />
      <ContactButtons />

      <Routes>

        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutSection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/services" element={<Service />} />
        <Route path="/our-fleet" element={<Ourfleets />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUsSection />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/bus-booking-for-marriage" element={<Busbookingformarrieage />} />
       


<Route path="/bus-hire-for-wedding-in-pune" element={<Bushireforweddinginpune />} />
<Route path="/bus-hire-near-me-pune" element={<Bushirenearmepune />} />
<Route path="/bus-hire-for-outstation" element={<Bushireforoutstation />} />
<Route path="/bus-service-for-corporate-pune" element={<Busserviceforcorporatepune />} />
<Route path="/bus-service-for-corporate-events" element={<Busserviceforcorporateevents />} />
<Route path="/bus-service-for-picnic-in-pune" element={<Busserviceforpicnicpune />} />
<Route path="/bus-rentals-for-school-trips-in-pune" element={<Busserviceforschooltrips />} />
<Route path="/bus-hire-for-school-trips-in-pune" element={<Bushireforschooltripinpune />} />
<Route path="/bus-rental-for-tour-packages" element={<Busrentalsfortourpackages />} />
<Route path="/bus-on-rent-for-event-in-pune" element={<Busonrentforeventsinpune />} />
<Route path="/non-ac-bus-rental-service-in-pune" element={<Nonacbusrentalsserviceinpune />} />
<Route path="/ac-bus-on-rent-in-pune" element={<Acbusonrentinpune />} />
<Route path="/pune-local-bus-on-rent" element={<Punelocalbusonrent />} />
<Route path="/bus-on-rent-in-pune" element={<Busonrentinpune />} />
<Route path="/bus-on-rent-in-pimpri-chinchwad" element={<Busonrentinpimprichichwad />} />
<Route path="/25-seater-tempo-traveller-on-rent-in-pune" element={<Twentifivetempotraveller />} />
<Route path="/32-seater-bus-rent-in-pune" element={<Thirtytwoseaterbusrentinpune />} />
<Route path="/35-seater-bus-on-rent-in-pune" element={<Thirtinfivebusonrentinpune />} />
<Route path="/40-seater-bus-on-rent-in-pune" element={<Fourtizeroseaterbusonrentinpune />} />
<Route path="/45-seater-bus-on-rent-in-pune" element={<Fourtifivebusonreninpune />} />
<Route path="/50-seater-bus-on-rent-in-pune" element={<Fiftyzerobusonrentinpune />} />
<Route path="/32-seater-tempo-traveller-service" element={<Thirtytwotempotraveller />} />
<Route path="/pune-to-mumbai-darshan-bus-on-rent" element={<Punetomumbaidarshanbusonrent />} />
<Route path="/pune-to-shirdi-bus-hire" element={<Punetoshirdibushire />} />



<Route path="/pune-to-ganpatipule-beach-bus-rental-service" element={<Punetoganpatipulebeachbusrentalsservice />} />
<Route path="/pune-to-kolhapur-bus-on-rent" element={<Punetokolhapurbusonrent />} />
<Route path="/pune-to-aurangabad-bus-hire-on-rent" element={<Punetoaurangabadbushireonrent />} />
<Route path="/pune-to-pandharpur-bus-hire" element={<Punetopandharpurbushire />} />
<Route path="/pune-sade-teen-shakti-peeth-bus-on-rent" element={<Punesadeteenshaktipeethbusonrent />} />
<Route path="/pune-to-lonavala-bus-hire" element={<Punetolonavalabushire />} />
<Route path="/pune-to-5-jyotirlinga-darshan-bus-hire" element={<Punetojyotilinga />} />
<Route path="/pune-to-bhimashankar-jyotirlinga-bus-hire-in-pune" element={<Punetobhimashankar />} />
<Route path="/luxury-force-urbania-on-rent-in-pune" element={<Luxuryforceurbaniaonrentinpune />} />
<Route path="/force-urbania-on-rent-in-pune" element={<Forceurbaniaonrentnpune />} />
<Route path="/urbania-tourist-bus-on-rent-in-pune" element={<Urbaniatouristbusonrentinpune />} />
<Route path="/13-seater-force-urbania-on-rent-in-pune" element={<Onethreeforceurbaniaonrentinpune />} />
<Route path="/17-seater-force-urbania-on-rent-in-pune" element={<Onesevanseater />} />
<Route path="/urbania-on-rent-in-pimpri-chinchwad" element={<Urbaniaonrentinpiprichichwad />} />
<Route path="/urbania-hire-for-corporate-event-in-pune" element={<Urbaniahireforcorporateeventainpune />} />
<Route path="/pune-to-mumbai-urbania-on-rent" element={<Punetomumbaiurbaniaonrent />} />
<Route path="/pune-to-shirdi-force-urbania-on-rent" element={<Punetoshirdiforceurbaniaonrent />} />
<Route path="/pune-to-mahabaleshwar-urbania-on-rent" element={<Punetomahabaleshwar />} />
<Route path="/pune-to-goa-urbania-on-rent" element={<Punetogoaurbaniaonrent />} />
<Route path="/pune-to-ashtavinayak-urbania-tour-package" element={<Punetoashtavinayakurbaniatour />} />
<Route path="/urbania-hire-for-outstation-in-pune" element={<Urbaniahireforoutstationinpune />} />
<Route path="/urbania-luxury-bus-rentals-in-pune" element={<Urbanialuxurybusrentalsinpune />} />



<Route path="/urbania-on-rent-in-pune" element={<Urbaniaonrentinpune />} />
<Route path="/pune-to-outstation-urbania-bus-hire-in-pune" element={<Punetooutstationurbania />} />
<Route path="/luxury-tempo-traveller-on-rent-in-pune" element={<Luxurytempotraveller />} />
<Route path="/tempo-traveller-hire-for-outstation-in-pune" element={<Tempotravellerhire />} />
<Route path="/swift-dzire-on-rent-in-pune" element={<Swiftdzireonrentinpune />} />
<Route path="/pune-to-bhimashankar-cab" element={<Punetobhimashankarcab />} />
<Route path="/pune-to-sambhajinagar-taxi" element={<Punetosambhajinagartaxi />} />
<Route path="/pune-to-konkan-darshan-cabs" element={<Punetokonkandarshancabs />} />
<Route path="/tempo-traveller-on-rent-in-pune" element={<TempoTravelleronrentinpune />} />
<Route path="/pune-to-mumbai-international-airport-cab" element={<Punetomumbaiinternationalairport />} />
<Route path="/pune-to-shirdi-cab" element={<Punetoshirdicab />} />
<Route path="/pune-cab-service" element={<Punecabservice />} />
<Route path="/pune-to-lavasa-city-cabs" element={<Punetolavasacitycabs />} />
<Route path="/mini-bus-on-rent-in-pune" element={<Minibusonrentinpune />} />
<Route path="/pune-to-mahabaleshwar-cabs" element={<Punetomahabaleshwarcabs />} />



<Route path="/pune-to-panchgani-cab-fare" element={<Punetopanchganicabfare />} />
<Route path="/ertiga-on-rent-in-pune" element={<Ertigaonrentinpune />} />
<Route path="/pune-to-lonavala-cabs" element={<Punetolonavalacabs />} />
<Route path="/pune-to-pandharpur-taxi" element={<Punetopansharpurtaxi />} />
<Route path="/best-cab-service-in-pune" element={<Bestcabserviceinpune />} />
<Route path="/pune-online-cab-booking" element={<Puneonlinecabbooking />} />
<Route path="/corporate-cab-service-in-pune" element={<Corporatecabserviceinpune />} />
<Route path="/pune-to-goa-cabs" element={<Punetogoacabs />} />
<Route path="/pune-to-ajanta-ellora-cabs" element={<Punetoajantaelloracab />} />
<Route path="/pune-airport-to-mumbai-taxi" element={<Puneairporttomumbaitaxi />} />
<Route path="/ashtavinayak-darshan-cab" element={<Ashtavinayakdarshancabs />} />
<Route path="/pune-to-mumbai-cabs" element={<Punetomumbaicabs />} />
<Route path="/pune-outstation-cabs" element={<Puneoutstationcabs />} />

      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
