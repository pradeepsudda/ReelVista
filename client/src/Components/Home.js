import React from 'react';

const containerStyle = {
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  backgroundImage: 'url("images/homeimg.jpg")',  // Replace "your-image-url.jpg" with the actual image URL
  backgroundSize: 'cover',  // Adjust as needed ('cover', 'contain', or specific dimensions)
  backgroundPosition: 'center',
};

const spacerStyle = {
  height: '50px',
};

const Home = () => {
  return (
    <div style={containerStyle}>
      <div style={spacerStyle}></div>
      <h1 style={{color:"white",textShadow: '0 0 10px rgba(255, 255, 255, 0.4)'}}><span style={{color:"red"}}>ReelVista</span> ~a Best Movies Resource</h1>
      {/* Your content goes here */}
    </div>
  );
}

export default Home;
