import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { useLocation } from 'react-router-dom';

const containerStyle = {
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Response = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') || "harryPotter";

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${searchQuery}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${config.KEY}`,
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setResponseData(result.d);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>
        <div className="spinner-border" role="status"></div>
      </div>
    );
    
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <div style={containerStyle}>
      <div style={{height:"50px"}}></div>
      <h1>{searchQuery}</h1></div>
    <div style={{padding:"20px"}}>
      <div style={{ display: 'flex', flexWrap: 'wrap',gap:"20px"}}>
        {responseData && responseData.map((item,index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Response;
