import React, { useState } from 'react';
const Gallery = () => {
  // Sample images with unique ids and different src/alt values
  const images = [
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Swift Dzire' },
  { id: 2, src: '/images/gallery/2.jpg', alt: 'Ertiga' },
  { id: 3, src: '/images/gallery/21.jpeg', alt: 'Innova Crysta' },
  { id: 4, src: '/images/gallery/20.jpeg', alt: 'Urban Cruiser' },
  { id: 5, src: '/images/gallery/3.jpg', alt: 'Tempo Traveller' },
  { id: 6, src: '/images/gallery/4.jpg', alt: 'Mini Bus' },
  { id: 7, src: '/images/gallery/5.jpg', alt: 'AC Bus' },
  { id: 8, src: '/images/gallery/6.jpg', alt: 'Luxury Bus' },
  { id: 9, src: '/images/gallery/7.jpg', alt: 'Force Urbania' },
  { id: 10, src: '/images/gallery/8.jpg', alt: '17 Seater' },
  { id: 11, src: '/images/gallery/9.jpg', alt: '20 Seater' },
  { id: 12, src: '/images/gallery/10.jpg', alt: '32 Seater' },
  { id: 13, src: '/images/gallery/11.jpg', alt: '45 Seater' },
  { id: 14, src: '/images/gallery/12.jpg', alt: '50 Seater' }
];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal and set the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Show next image in the modal
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Show previous image in the modal
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  

  
  return (

<>

     <section
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(/img/breadcrumb/breadcrumb.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>Gallery</h2>
            
          </div>
        </div>
      </div>
    </section>

    
    <div className="gallery-container ">
      <div className="gallery-grid ">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image-item borderr"
            onClick={() => openModal(index)} // Open the modal on click
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <button className="modal-close-button" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content-container">
            <button className="modal-prev-button" onClick={prevImage}>
              &#10094;
            </button>
            <div className="modal-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="modal-image"
              />
            </div>
            <button className="modal-next-button" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>

</>
  );
};

export default Gallery;