import React, { useState, useEffect } from 'react';

const Visionn = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionStyle = {
        padding: isMobile ? '0px' : '40px',
        margin: '0 auto',
    };

    const containerStyle = {
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        padding: '0 15px',
    };

    const rowStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        gap: '20px',
    };

    const colStyle = {
        flex: '1',
        minWidth: isMobile ? '100%' : '300px',
        boxSizing: 'border-box',
        marginBottom: isMobile ? '20px' : '0',
    };

    const headingStyle = {
        textAlign: 'center',
        paddingBottom: '20px',
        fontSize: isMobile ? '24px' : '32px',
        color: '#343a40',
    };

    const visionContentStyle = {
        backgroundColor: '#072348',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: 'white',
    };

    const sectionTitleStyle = {
        color: '#072348',
    };
    const sectionTitleStylee = {
        color: 'white'
    };

    return (
       <section style={sectionStyle}>
  <div style={containerStyle}>
    <h3 style={{ ...headingStyle, ...sectionTitleStyle }}>About Our Vision & Mission</h3>
    <div style={rowStyle}>
      <div style={colStyle}>
        <div style={visionContentStyle}>
          <h4 style={sectionTitleStylee}>Vision</h4>
          <p className="text-white">
            At Vaishnavi Travels, our vision is to set new standards in the travel and transport industry by delivering dependable, innovative, and accessible mobility solutions. We aspire to be a brand that symbolizes trust and excellence, bringing people closer through seamless, enjoyable, and affordable journeys. Our long-term vision is to enrich lives by making travel not just a necessity but a delightful and inspiring experience.
          </p>
        </div>
      </div>
      <div style={colStyle}>
        <div style={visionContentStyle}>
          <h4 style={sectionTitleStylee}>Mission</h4>
          <p className="text-white">
            Our mission at Vaishnavi Travels is to provide safe, timely, and customer-focused travel services across diverse destinations. We are dedicated to maintaining high standards in vehicle safety, cleanliness, and service quality. Through continuous innovation and a people-first approach, we aim to ensure every journey is smooth, secure, and memorable. With Vaishnavi Travels, every mile reflects our passion for hospitality and commitment to your comfort.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default Visionn;
