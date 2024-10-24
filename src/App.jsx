import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import StatisticsCard from './components/StatisticsCard';
import DataList from './components/DataList';
import SearchFilter from './components/SearchFilter';
import './App.css';
import { AnimatedBackground } from 'animated-backgrounds';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState({ totalCharacters: 0, aliveCount: 0, deadCount: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setData(response.data.results);
      setFilteredData(response.data.results);
      calculateStats(response.data.results);
    };
    fetchData();
  }, []);

  const calculateStats = (data) => {
    const totalCharacters = data.length;
    const aliveCount = data.filter(character => character.status === 'Alive').length;
    const deadCount = data.filter(character => character.status === 'Dead').length;

    setStats({ totalCharacters, aliveCount, deadCount });
  };

  const handleSearch = (query) => {
    const filtered = data.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div className="app">
      <AnimatedBackground animationName="matrixRain" />
      <Header />
      <StatisticsCard stats={stats} />
      <SearchFilter onSearch={handleSearch} />
      <DataList data={filteredData} />
    </div>
  );
};

export default App;
