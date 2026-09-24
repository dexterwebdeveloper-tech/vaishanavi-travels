// ContactShowcase.jsx
import React from "react";
import "./ContactShowcase.css";

/** Page/route context you want in the heading */
const cardData = {
  keyword: "Vaishnavi Travels",
};

/** Default data (used if no prop is passed) */
const defaultData = {
  heading: `${cardData.keyword} Contact Number`,
  contactNumbers: ["+91 9765685295", "+91 9881872524"],
  email: "booking@vaishnavitravel.com",
};

const phoneToWhatsApp = (num) => {
  const digits = (num || "").replace(/\D/g, "");
  const withCC = digits.startsWith("91") ? digits : `91${digits}`;
  return `https://wa.me/${withCC}`;
};

const copy = (t) => navigator.clipboard?.writeText(t).catch(() => {});

export default function ContactShowcase({ contactData: incoming }) {
  // Safe merge (no shadowing, no undefined reads)
  const data = {
    ...defaultData,
    ...(incoming || {}),
    contactNumbers:
      Array.isArray(incoming?.contactNumbers) && incoming.contactNumbers.length
        ? incoming.contactNumbers
        : defaultData.contactNumbers,
  };

  const primary = data.contactNumbers[0] || "";

  return (
    <section className="contactWrap">
      <div className="contactCard">
        <header className="contactHeader">
          <h3>{data.heading}</h3>
          <span className="openBadge">Open 24×7</span>
        </header>

        <p className="subText">
          For booking inquiries or any assistance, please feel free to contact us:
        </p>

        <div className="grid">
          {/* Phones */}
          <div>
            <label className="fieldLabel">Mobile No:</label>
            <ul className="phones">
              {data.contactNumbers.map((number, i) => (
                <li key={i} className="phoneRow">
                  <a href={`tel:${number}`} className="btnCall" aria-label={`Call ${number}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.69.6 2.49a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.8.28 1.63.48 2.49.6A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                    <span>{number}</span>
                  </a>
                  <button className="btnGhost" onClick={() => copy(number)}>Copy</button>
                </li>
              ))}
            </ul>

            <div className="ctaRow">
              <a
                href={phoneToWhatsApp(primary)}
                target="_blank"
                rel="noreferrer"
                className="btnWhats"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.52 3.48A11.82 11.82 0 0 0 12 0a11.82 11.82 0 0 0-8.52 3.48A11.81 11.81 0 0 0 0 12c0 2.08.54 4.05 1.58 5.8L0 24l6.36-1.66A11.8 11.8 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52Z"
                    stroke="#fff"
                    strokeWidth="1.2"
                  />
                </svg>
                Chat on WhatsApp
              </a>
              <a href={`tel:${primary}`} className="btnPrimary">Call Now</a>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="fieldLabel">Email Id:</label>
            <div className="emailRow">
              <a href={`mailto:${data.email}`} className="emailLink">
                {data.email}
              </a>
              <button className="btnGhost" onClick={() => copy(data.email)}>Copy</button>
            </div>

            <ul className="bullets">
              <li>No hidden charges</li>
              <li>GPS-enabled &amp; clean cabs</li>
              <li>Professional drivers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
