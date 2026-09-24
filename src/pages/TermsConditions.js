import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/TermsConditions.css';

const TermsConditions = () => {
  const jsonData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions - Vaishnavi Travels",
    "url": "https://www.vaishnavitravels.com/terms-and-conditions", // Replace with actual URL
    "description": "Read the terms and conditions for using Vaishnavi Travels’ services including booking policies, cancellation, liability, and passenger responsibilities."
  };

  return (
    <div>












     

      <Helmet>
        <title>Terms & Conditions | Vaishnavi Travels | Travel Booking Policy</title>
        <meta
          name="description"
          content="Review Vaishnavi Travels’ Terms & Conditions for travel bookings. Learn about our policies on booking, cancellations, refunds, and your responsibilities as a traveler."
        />
        <meta
          name="keywords"
          content="vaishnavi travels terms and conditions, travel booking policy, cab service rules, vaishnavi travels cancellation policy, refund terms, passenger responsibilities, travel agreement, taxi terms, safe travel policy, vaishnavi user agreement"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonData)}
        </script>
      </Helmet>

    



      
     <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Terms & Conditions</h2>
            
          </div>
        </div>
      </div>
    </section>

      <section className="terms-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="terms-content">
                <p><b className="highlight">1. Booking Confirmation:</b> All bookings made with Vaishnavi Travels are subject to availability and will be confirmed upon full payment and issuance of a booking reference number.</p>

                <p><b className="highlight">2. Payment:</b> Payment must be completed at the time of booking through our secure online platform or other authorized payment channels.</p>

                <p><b className="highlight">3. Cancellation and Rescheduling:</b> Booking modifications or cancellations must follow our cancellation policy. Charges may apply depending on when the request is made.</p>

                <p><b className="highlight">4. Passenger Responsibility:</b> Travelers must carry valid ID and booking confirmation. Vaishnavi Travels reserves the right to refuse service if proper documentation is not presented.</p>

                <p><b className="highlight">5. Baggage Policy:</b> Travelers are allowed limited baggage. Additional or oversized luggage must be declared in advance and may incur extra charges.</p>

                <p><b className="highlight">6. Travel Insurance:</b> We recommend obtaining travel insurance for unforeseen events. Vaishnavi Travels takes all measures to ensure a safe travel experience.</p>

                <p><b className="highlight">7. Safety Regulations:</b> Passengers must follow safety guidelines and driver instructions. Non-compliance may lead to denial of service without a refund.</p>

                <p><b className="highlight">8. Changes to Itinerary:</b> Vaishnavi Travels reserves the right to change routes, schedules, or services due to unforeseen events like weather or traffic. We’ll inform customers whenever possible.</p>

                <p><b className="highlight">9. Refusal of Service:</b> Service may be denied if a traveler displays unruly behavior or violates our terms, especially if it compromises the safety of others.</p>

                <p><b className="highlight">10. Jurisdiction:</b> These terms are governed by Indian law, and any disputes shall fall under the jurisdiction of Pune courts.</p>

                <h3>General Policy</h3>
                <p><b className="highlight">Booking Procedure:</b> Book your cab or tour easily through our website, mobile app, or customer support helpline.</p>
                <p><b className="highlight">Customer Support:</b> Our support team is available 24/7 for inquiries, concerns, and assistance. We’re here to ensure a smooth experience.</p>

                <h3>Refund Policy</h3>
                <p><b className="highlight">Cancellation Fees:</b> Refunds are subject to applicable cancellation charges. Charges depend on the time and reason for cancellation.</p>
                <p><b className="highlight">Refund Process:</b> Refunds are processed within 7–10 working days through the original mode of payment. Contact our support team if you experience delays.</p>
                <p><b className="highlight">No-Show Policy:</b> Travelers who fail to show up without prior notice (minimum 24 hours) are not eligible for refunds or rescheduling.</p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions about our terms, feel free to reach out to us:</p>
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

export default TermsConditions;
