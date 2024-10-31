import React from 'react';
import { useParams } from 'react-router-dom';

const DetailView = ({ data }) => {
    const { id } = useParams();
    const character = data.find(char => char.id === parseInt(id));

    if (!character) {
        return <p>Character not found!</p>;
    }

    return (
        <div className="detail-view">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} className="character-image" />
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Episode Count:</strong> {character.episode.length}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default DetailView;
