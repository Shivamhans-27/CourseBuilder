import React, { useState } from 'react';
import Module from './Module';
import './Home.css';

const Home = () => {
  const [modules, setModules] = useState([]);
  const [newModuleName, setNewModuleName] = useState('');

  const addModule = () => {
    setModules([...modules, { name: newModuleName, resources: [] }]);
    setNewModuleName('');
  };

  const deleteModule = (index) => {
    setModules(modules.filter((_, i) => i !== index));
  };

  const updateModule = (index, newModule) => {
    const updatedModules = modules.map((module, i) => (i === index ? newModule : module));
    setModules(updatedModules);
  };

  return (
    <div className="home">
      <h1>Course Builder</h1>
      <input
        type="text"
        value={newModuleName}
        onChange={(e) => setNewModuleName(e.target.value)}
        placeholder="New Module Name"
      />
      <button onClick={addModule}>Add Module</button>
      <div className="modules">
        {modules.map((module, index) => (
          <Module
            key={index}
            module={module}
            onDelete={() => deleteModule(index)}
            onUpdate={(newModule) => updateModule(index, newModule)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
