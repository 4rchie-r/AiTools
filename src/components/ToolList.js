import React, { useState, useEffect } from 'react';
import ToolCard from './ToolCard';
import toolsData from '../tools.json';
import './ToolList.css';

const ToolList = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Load the tools data (in a real-world scenario, this could be an API call)
    setTools(toolsData);
  }, []);

  return (
    <div className="tool-list">
      {tools.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-heading">{category.category}</h2>
          <div className="card-row">
            {category.tools.map((tool, idx) => (
              <ToolCard key={idx} name={tool.name} description={tool.description} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolList;
