import React, { useEffect, useState } from 'react';
import IPOCard from '../components/IPOCard';
import api from '../api';
import './Home.css';

const statusOptions = [
  { value: '', label: 'All Statuses' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'listed', label: 'Listed' },
];

const Home = () => {
  const [ipos, setIpos] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  // Fetch IPOs from Django backend
  useEffect(() => {
    api.get('ipos/')
       .then(res => setIpos(res.data))
       .catch(err => console.log("API Error:", err));
  }, []);

  const filteredIpos = ipos.filter(ipo => {
    const matchesStatus = status ? ipo.status === status : true;
    const matchesSearch = search ? ipo.company_name.toLowerCase().includes(search.toLowerCase()) : true;
    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <div className="ipo-searchbar-panel">
        <input
          className="ipo-searchbar"
          type="text"
          placeholder="Search by company name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="ipo-status-filter"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          {statusOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="ipo-grid">
        {filteredIpos.map(ipo => (
          <IPOCard key={ipo.id} ipo={ipo} />
        ))}
      </div>
    </div>
  );
};

export default Home;