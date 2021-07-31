import React from 'react';

const styles = {
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '50px',
  },
  heroTitle: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  label: {
    fontStyle: 'oblique',
    fontSize: '20px',
    color: '#000',
  },
};

const HomeViews = () => (
  <div style={styles.heroContainer}>
    <h1>Welcome to your own contacts storage 📱</h1>
    <p style={styles.label}>
      Unfortunately , ours functional services are still in the process...{' '}
    </p>
  </div>
);

export default HomeViews;
