import React from 'react';

const containerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  backgroundImage: 'url("images/homeimg.jpg")',  // Replace "your-image-url.jpg" with the actual image URL
  backgroundSize: 'cover',  // Adjust as needed ('cover', 'contain', or specific dimensions)
  backgroundPosition: 'center',
  color:'white'
};

const spacerStyle = {
  height: '50px',
};

const aboutStyle = {
  width: '600px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: 'rgb(88, 87, 87)'
};

const contentStyle = {
  marginBottom: '10px',
};


const About = () => {
  return (
    <div style={containerStyle}>
      <div style={spacerStyle}></div>
      <h1>About Us</h1>
      <div style={aboutStyle}>
        <h2>The Importance of the Film Industry</h2>
        <p style={contentStyle}>
          The film industry plays a crucial role in shaping culture and entertainment worldwide.
        </p>
        <h3>Movies and Their Impact</h3>
        <p style={contentStyle}>
          Movies have the power to inspire, educate, and entertain, offering a unique form of storytelling.
        </p>
        <h3>Platforms and Movie Distribution</h3>
        <p style={contentStyle}>
          Various platforms, including streaming services and theaters, contribute to the accessibility and success of movies.
        </p>
        <h3>Indian Movies</h3>
        <p style={contentStyle}>
          Indian cinema has a rich history, producing diverse and culturally significant films that captivate audiences globally.
        </p>
      </div>
    </div>
  );
}

export default About;
