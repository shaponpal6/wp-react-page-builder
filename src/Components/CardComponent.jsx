import React from 'react';
import ImageCarousel from './ImageCarousel'; // Assuming you have the ImageCarousel component from earlier

const CardComponent = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map(product => (
        <div key={product.id} style={styles.card}>
            <div style={styles.imageCarousel}>
                <ImageCarousel images={product.images} />
            </div>
          <div style={styles.details}>
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.price}>${product.price}</p>
            <p style={styles.description} dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '20px',
  },
  imageCarousel: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '150px',
    overflow: 'hidden',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    height: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  details: {
    textAlign: 'center',
  },
  name: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  price: {
    fontSize: '1.1em',
    color: '#333',
  },
  description: {
    fontSize: '1em',
    color: '#666',
    marginTop: '10px',
  },
};

export default CardComponent;
