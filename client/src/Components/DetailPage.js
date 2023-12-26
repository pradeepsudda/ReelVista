import React, { useEffect,useState } from 'react';
import { useParams} from 'react-router-dom';

const spacerStyle = {
  height: '50px',
};

const DetailPage = () => {
  const {id} = useParams();
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { l: title, s: subtitle, i: img } = responseData;

 
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${id}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9f6bd92651msh162d4c00297ddb5p10dd79jsn6458940e10d0',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setResponseData(result.d);
        console.log(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [responseData,id]);

  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!img) {
    return null; 
  }
  const { imageUrl } = img;


  return (
    <div key={id}>
      <div style={spacerStyle}></div>
      <div className="card" style={{width: '30rem',height:'auto'}}>
     <img src={imageUrl} className="card-img-top" alt={title} style={{height:"200px"}}/>
     <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{subtitle}</p>
  </div>
</div>
    </div>
  );
};

export default DetailPage;
