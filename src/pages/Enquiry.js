import React, { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    days: "",
    pickup: "",
    drop: "",
    cab: "Swift Dzire (4+1 Seater)",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const whatsappMessage = `
*New Enquiry - Vaishnavi Travels*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
✉️ Email: ${formData.email}
📍 Pickup: ${formData.pickup}
📍 Drop: ${formData.drop}
🚖 Cab: ${formData.cab}
🗓 Date of Journey: ${formData.date}
⏳ Days: ${formData.days}
💬 Message: ${formData.message}
    `;

    // WhatsApp API Link
    const whatsappUrl = `https://wa.me/9765685295?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (


<>






 <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Enquiry</h2>
            
          </div>
        </div>
      </div>
    </section>








    <section className="enquiry-section">
      <div className="enquiry-wrapper">
        <div className="enquiry-title">
          <h2>Send Us A Message</h2>
          <p>Fill out the form and we’ll reply via WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="days"
              placeholder="Number of Days"
              value={formData.days}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="pickup"
              placeholder="Pick Up Point"
              value={formData.pickup}
              onChange={handleChange}
            />
            <input
              type="text"
              name="drop"
              placeholder="Drop Location"
              value={formData.drop}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <select
              name="cab"
              value={formData.cab}
              onChange={handleChange}
            >
              <option>Swift Dzire (4+1 Seater)</option>
              <option>Ertiga (6+1 Seater)</option>
              <option>13 Seater Force Urbania</option>
              <option>17 Seater Force Urbania</option>
              <option>25 Seater Tempo Traveller</option>
              <option>32 Seater Bus</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message on WhatsApp
          </button>
        </form>
      </div>
    </section>


</>
  );
};

export default Enquiry;
