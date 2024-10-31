import React from 'react';

const StatisticsCard = ({ stats }) => {
    return (
        <div className="statistics-container">
            <h2>Character Statistics</h2>
            <div className="stat-item">
                <p>Total Characters: <span>{stats.totalCharacters}</span></p>
            </div>
            <div className="stat-item">
                <p>Alive Characters: <span>{stats.aliveCount}</span></p>
            </div>
            <div className="stat-item">
                <p>Dead Characters: <span>{stats.deadCount}</span></p>
            </div>
        </div>
    );
};

export default StatisticsCard;
