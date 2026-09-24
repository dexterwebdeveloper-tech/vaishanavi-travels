import React, { useState} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

  return (
    // <header className={`header ${scrolling ? 'sticky-header' : ''}`}>
    <header className>
      {/* Header Top */}
      <div className="header-top bgg-darkk py-2">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto">
              <div className="header-top-contact">
                <ul className='anchor d-md-flex'>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919765685295">
                      <i className="fas fa-phone-volume  "></i> +91 9765685295
                    </a>
                  </li>
                   <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919881872524">
                      <i className="fas fa-phone-volume  "></i> +91 9881872524
                    </a>
                  </li>
                
                  <li>
                    <a className='text-white' href="mailto:booking@vaishnavitravel.com">
                      <i className="far fa-envelope "></i>
                      <span className='text-white fw-bold'> booking@vaishnavitravel.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <img src="/images/logo.jpg" className='logoo' alt="logo" />
            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolorr"></i> {/* Mobile Menu Icon */}
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mx-auto">
                <Nav.Link href="/" className='fw-bold nav-item'>Home</Nav.Link>
                <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/about-us" className='fw-bold nav-item'>About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/term-condition" className='fw-bold nav-item'>Term & Condition</NavDropdown.Item>
                  <NavDropdown.Item href="/privacy-policy" className='fw-bold nav-item'>Privacy Policy</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/services" className='fw-bold nav-item'>Services </Nav.Link>

                <Nav.Link href="/our-fleet" className='fw-bold nav-item'>Our&nbsp;Fleet</Nav.Link>
                <Nav.Link href="/packages" className='fw-bold nav-item'>Packages</Nav.Link>

            

             

                <Nav.Link href="/booking" className='fw-bold nav-item'>Booking</Nav.Link>
                <Nav.Link href="/gallery" className='fw-bold nav-item'>Gallery</Nav.Link>
                <Nav.Link href="https://wa.me/+919765685295?text=Hello%20Vaishnavi%20Travels%20Team%2C%0A%0AI%20am%20interested%20in%20booking%20a%20Cab%20or%20Bus%20for%20my%20journey.%20Could%20you%20please%20share%20the%20available%20options%2C%20seating%20capacity%2C%20and%20pricing%20details%3F%20Thank%20you%21" target='_blank' className='fw-bold nav-item'>Online Booking</Nav.Link>
                <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="/enquiry" className='fw-bold'>Enquiry</NavDropdown.Item>
                </NavDropdown>
                
              </Nav>
              {/* <Buttonn/> */}
            </Navbar.Collapse>
            
          </Container>
         
        </Navbar>
      </div>

      
    </header>
  );
};

export default Header;






