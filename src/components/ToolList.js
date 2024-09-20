import React, { useState, useEffect } from 'react';
import ToolCard from './ToolCard';
import toolsData from '../tools.json';

const ToolList = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // In a real-world scenario, you could fetch the data from an API
    setTools(toolsData);
  }, []);

  return (
    <div className="tool-list">
      {tools.map((tool, index) => (
        <ToolCard key={index} name={tool.name} description={tool.description} />
      ))}
    </div>
  );
};

export default ToolList;