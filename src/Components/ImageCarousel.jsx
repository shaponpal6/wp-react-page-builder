import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={styles.image}
        />
      </div>
      <button onClick={handlePrev} style={{ ...styles.button, ...styles.buttonPrev }}>
        Prev
      </button>
      <button onClick={handleNext} style={{ ...styles.button, ...styles.buttonNext }}>
        Next
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    maxHeight: '100%',
    objectFit: 'cover',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    zIndex: 1,
  },
  buttonPrev: {
    left: '10px',
  },
  buttonNext: {
    right: '10px',
  },
};

export default ImageCarousel;
