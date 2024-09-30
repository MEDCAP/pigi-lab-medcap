// src/pages/SimulatorPage.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './../styles/pages.css';

const SimulatorPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const dataList = [
    'MEDCAP | Simulator 1 | Date | Sequence 1 | Image 1',
    'MEDCAP | Simulator 2 | Date | Sequence 2 | Image 2',
    'MEDCAP | Simulator 3 | Date | Sequence 3 | Image 3',
    // Add more data as needed
  ];

  const filteredData = dataList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <Sidebar />
      <div className="retrieve-container">
        <h1>Simulate Data</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="data-list">
          {filteredData.map((item, index) => (
            <li key={index} className="data-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimulatorPage;
