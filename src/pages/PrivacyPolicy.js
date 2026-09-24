import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Vaishnavi Travels</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Vaishnavi Travels. Learn how we collect, use, and protect your data, and understand your privacy rights."
        />
      </Helmet>



     <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Privacy Policy</h2>
            
          </div>
        </div>
      </div>
    </section>



    
      <section className="privacy-policy">
        <div className="container px-0">
          <div className="row g-0">
            <div className="col-12 col-md-7">
              <h3 className="title">Privacy Policy</h3>

              <p>
                At Vaishnavi Travels, we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our travel services.
              </p>

              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>
                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  We collect your name, contact details, travel preferences, and payment information to facilitate your bookings and ensure seamless service.
                </p>

                <p className="highlight darkcolor">2. Usage Data:</p>
                <p>
                  We track technical data like your IP address, browser type, and on-site behavior to improve the quality of our platform.
                </p>

                <p className="highlight darkcolor">3. Location Data:</p>
                <p>
                  With your consent, we may access your location data to provide accurate pickup and drop-off services.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>
                <p className="highlight darkcolor">1. Booking & Travel Management:</p>
                <p>
                  Your information helps us process bookings, plan trips, and send confirmations and alerts.
                </p>

                <p className="highlight darkcolor">2. Service Improvements:</p>
                <p>
                  We analyze feedback and user behavior to enhance our travel services, routes, and website functionality.
                </p>

                <p className="highlight darkcolor">3. Customer Support:</p>
                <p>
                  Your details allow us to provide timely assistance, resolve issues, and ensure satisfaction.
                </p>

                <p className="highlight darkcolor">4. Marketing & Communication:</p>
                <p>
                  With your approval, we may send offers, newsletters, or travel promotions you may find relevant.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Information Sharing:</p>
                <p className="highlight darkcolor">1. Third-Party Partners:</p>
                <p>
                  We may share information with reliable third-party vendors for payment processing, logistics, or customer care.
                </p>

                <p className="highlight darkcolor">2. Legal Compliance:</p>
                <p>
                  We may disclose your data when required by law or to protect the rights and safety of our users and systems.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  We adopt strict data security measures to protect your personal information. However, no method of transmission or storage is entirely secure.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You can request access to your data, update or delete it, and opt out of non-essential communications at any time.
                </p>

                <p className="highlight darkcolor">Policy Updates:</p>
                <p>
                  Vaishnavi Travels may revise this Privacy Policy periodically. We recommend reviewing it regularly to stay informed.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please get in touch with us:</p>
            <ul>
              <li><b>Phone:</b> <a href="tel:+919765685295">+91 9765685295</a></li>
              <li><b>Email:</b> <a href="mailto:booking@vaishnavitravels.in">booking@vaishnavitravels.in</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
