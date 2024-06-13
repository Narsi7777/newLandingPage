import React from "react";

function Card({ cardFrontImg, title, description }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img src={cardFrontImg} alt="Card Image" className="card-img" />
          <div className="text-container">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="text-container">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
