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
                  <p>Prathmesh Park Baner, Pune Maharashtra 411045</p>
                </div>
              </div>
            </div>
          </div>



<iframe src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d186.82748326854218!2d73.78131698923767!3d18.569424763915027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2s18.5694315%2C%2073.7814408!3m2!1d18.5694315!2d73.7814408!4m5!1s0x3bc2b932cbaa32c9%3A0x2097b9f765a7ec4e!2s101-17%2C%20Baner%20-%20%20Balewadi%20Road%2C%20Baner!3m2!1d18.5694822!2d73.78139039999999!5e1!3m2!1sen!2sin!4v1758260837686!5m2!1sen!2sin" width="auto" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



        </div>
      </div>
    </section>

</>
  );
};

export default ContactUsSection;
