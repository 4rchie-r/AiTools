import React from 'react';
import './ToolCard.css';

const ToolCard = ({ name, description }) => {
  return (
    <div className="tool-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ToolCard;
