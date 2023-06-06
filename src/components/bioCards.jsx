import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  hero: {
    backgroundColor: '#0093b5',
    padding: '40px',
    marginBottom: '20px',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  picture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
    backgroundColor: '#ddd',
  },
  text: {
    marginBottom: '5px',
  },
};

const Cards = () => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>This is the Hero section</h1>
      </div>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <div style={styles.picture}></div>
          <div>
            <p style={styles.text}>Line 1</p>
            <p style={styles.text}>Line 2</p>
            <p style={styles.text}>Line 3</p>
            <p style={styles.text}>Line 4</p>
            <p style={styles.text}>Line 5</p>
          </div>
        </div>
        <div style={styles.card}>
          <div style={styles.picture}></div>
          <div>
            <p style={styles.text}>Line 1</p>
            <p style={styles.text}>Line 2</p>
            <p style={styles.text}>Line 3</p>
            <p style={styles.text}>Line 4</p>
            <p style={styles.text}>Line 5</p>
          </div>
        </div>
        <div style={styles.card}>
          <div style={styles.picture}></div>
          <div>
            <p style={styles.text}>Line 1</p>
            <p style={styles.text}>Line 2</p>
            <p style={styles.text}>Line 3</p>
            <p style={styles.text}>Line 4</p>
            <p style={styles.text}>Line 5</p>
          </div>
        </div>
        <div style={styles.card}>
          <div style={styles.picture}></div>
          <div>
            <p style={styles.text}>Line 1</p>
            <p style={styles.text}>Line 2</p>
            <p style={styles.text}>Line 3</p>
            <p style={styles.text}>Line 4</p>
            <p style={styles.text}>Line 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
