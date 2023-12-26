import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Card = ({ data }) => {
  const navigate = useNavigate();
  const { id,l: title, s: subtitle, i: img } = data;
  if (!img) {
    return null; 
  }

  const { imageUrl } = img;

  const handleCardClick = () => {
    navigate(`/detail/${id}`, { state: { data } });
  };

  return (
    <div className="card" style={{ width: '17rem', height: 'auto' }} onClick={handleCardClick}>
      <img src={imageUrl} className="card-img-top" alt={title} style={{ height: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>
        <Link className="btn btn-primary" to="#">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};
