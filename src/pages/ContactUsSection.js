import React from 'react';

const ContactUsSection = () => {
  return (

<>

 <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Contact Us</h2>
            
          </div>
        </div>
      </div>
    </section>


    <section className="contact-us-section fix section-padding">
      <div className="container">
        <div className="row">

        {/* Phone Box */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="contact-us-main">
              <div className="contact-box-items">
                <div className="icon">
                  <img src="/img/icon/20.svg" alt="Phone Icon" />
                </div>
                <div className="content">
                  <h3>
                    <a href="tel:+919765685295" className='darkcolor'>+91 9765685295</a><br/>
                    <a href="tel:+919881872524" className='darkcolor'>+91 9881872524</a>
                  </h3>
                  <p>Call us for any kind of support — we’re here to help.</p>
                </div>
              </div>
            </div>
          </div>


          {/* Email Box */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="contact-us-main style-2">
              <div className="contact-box-items">
                <div className="icon">
                  <img src="/img/icon/19.svg" alt="Email Icon" />
                </div>
                <div className="content">
                  <h6>
                    <a href="mailto:booking@vaishnavitravel.com" className='darkcolor'>booking@vaishnavitravel.com</a>
                  </h6>
                  <p>Email us anytime for any kind of query.</p>
                </div>
              </div>
            </div>
          </div>

         


   {/* Address Box */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="contact-us-main">
              <div className="contact-box-items">
                <div className="icon">
                  <img src="/img/icon/18.svg" alt="Address Icon" />
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>Shop No 5, HQPJ+3J3, New DP Rd, near Cell Petroleum, Akshay Nagar Society, Nandanwan Society, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Pune, Maharashtra 411027</p>
                </div>
              </div>
            </div>
          </div>

    <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1790223349416!5m2!1sen!2sin!6m8!1m7!1siWm6x-i-1qA6jZCErwDOAA!2m2!1d18.58516603624576!2d73.7817432900832!3f244.79576930760527!4f11.071244338675385!5f0.4004233368561733" width="auto" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>




        </div>
      </div>
    </section>

</>
  );
};

export default ContactUsSection;
