
// pages/index.js
"use client"; // Ensure this component runs on the client side

import { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = () => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image);
    } else {
      alert('Webcam is not ready yet.');
    }
  };

  const retakePhoto = () => {
    setImageSrc(null);
  };

  const analyzePhoto = () => {
    if (!imageSrc) {
      alert('Please capture a photo first!');
      return;
    }
    // Add your analysis logic here (sending imageSrc to your API for analysis)
    alert('Analyzing photo...');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Skin Pro</h1>
      {!imageSrc ? (
        <>
          <Webcam 
            audio={false} 
            ref={webcamRef} 
            screenshotFormat="image/jpeg" 
            style={styles.webcam}
          />
          <button onClick={capture} style={styles.button}>Capture Photo</button>
        </>
      ) : (
        <>
          <img src={imageSrc} alt="Captured face" style={styles.image} />
          <button onClick={retakePhoto} style={styles.button}>Retake Photo</button>
        </>
      )}
      <button onClick={analyzePhoto} style={styles.analyzeButton}>Analyze Photo</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff', // Light and inviting background color
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  webcam: {
    width: '320px',
    height: '240px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '320px',
    height: '240px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 20px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  analyzeButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  }
};
