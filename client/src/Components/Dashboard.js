import React from 'react';
import Response from './Response';

const containerStyle = {
  height: '158vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',

};

const spacerStyle = {
  height: '50px',
};

const Dashboard = () => {
  return (
    <div style={containerStyle}>
       <div style={spacerStyle}>
      </div>
      <Response/>
    </div>
  );
};

export default Dashboard;
