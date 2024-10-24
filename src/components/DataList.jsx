const DataList = ({ data }) => {
    return (
        <div className="character-grid">
            {data.map((character) => (
                <div className="character-card" key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} className="character-image" />
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Origin:</strong> {character.origin.name}</p>
                </div>
            ))}
        </div>
    );
};

export default DataList;
