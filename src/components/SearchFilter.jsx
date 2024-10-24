import { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for a character..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchFilter;
