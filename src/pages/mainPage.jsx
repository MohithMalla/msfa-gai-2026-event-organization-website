import React from 'react';

function MainPage() {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '89vh',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    },
    text: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: '#ffffff',
      textAlign: 'center',
      padding: '0 5%',
      maxWidth: '1800px',
      width: '100%',
    },
    heading: {
      fontSize: '1.5vw',  // responsive size
      fontWeight: '600',
      marginBottom: '1rem',
      lineHeight: '1.3',
    },
    subheading: {
      fontSize: '1.5vw',  // responsive size
      fontWeight: '500',
      marginBottom: '1.5rem',
    },
    logoBar: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem 2rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ccc',
      fontFamily: 'Poppins, sans-serif',
    },
    logoImg: {
      height: '60px',
      width: 'auto',
      marginRight: '1rem',
    },
    logoText: {
      color: '#000',
      fontSize: '1.8rem',
      fontWeight: '600',
    },
  };

  return (
    <div>
      <div style={styles.logoBar}>
        <img src="/clg logo(1)(1).png" alt="Logo" style={styles.logoImg} />
        <h3 style={styles.logoText}>Conference</h3>
      </div>

      <div className="main-page">
        <div style={styles.container}>
          <img
            src="0877de84-e66f-463c-901a-232480605f1d(1)(1).png"
            alt="Background"
            style={styles.image}
          />
          <div style={styles.overlay}></div>
          <div style={styles.text}>
            <h2 style={styles.heading}>
              International Conference on Mathematical & Statistical Foundations and Applications of Generative AI (MSFA-GAI)
            </h2>
            <p className="text-warning" style={styles.subheading}>
              5th - 6th February 2026
            </p>
            <h2 style={styles.heading}>
              A National Workshop on Medical Applications using GAI
            </h2>
            <p className="text-warning" style={styles.subheading}>
              2nd - 6th February 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
