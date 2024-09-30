// src/pages/ImagesPage.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './../styles/pages.css';

const ImagesPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const dataList = [
    'MEDCAP | Image 1 | Date | Sequence 1',
    'MEDCAP | Image 2 | Date | Sequence 2',
    'MEDCAP | Image 3 | Date | Sequence 3',
    // Add more data as needed
  ];

  const filteredData = dataList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <Sidebar />
      <div className="retrieve-container">
        <h1>Image Data</h1>
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

export default ImagesPage;
