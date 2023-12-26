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
};

const formStyle = {
  width: '450px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: 'gray',
  color:'white' // Center the text inside the form
};

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
  padding: '8px',
  boxSizing: 'border-box', // Ensure padding and border are included in the width
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const spacerStyle = {
  height: '50px',
};

const Contact = () => {
  return (
    <div style={containerStyle}>
      <div style={spacerStyle}></div>
      <div style={formStyle}>
        <h2>Contact Us</h2>
        <form>
          <label>
            Name:
            <input type="text" style={inputStyle} />
          </label>
          <label>
            Email:
            <input type="email" style={inputStyle} />
          </label>
          <label>
            Message:
            <textarea style={inputStyle}></textarea>
          </label>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
