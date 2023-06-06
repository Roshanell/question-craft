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
    
  };
 function HeaderSection() {
     	return (
            <div style={styles.container}>
            <div style={styles.hero}>
              <h1>Contributors</h1>
              <h3 class="h3-white-text"> Meet the team behind Techtonica's Question Builder </h3>
            </div>
 		</div>
 	);
 }

 export default HeaderSection;