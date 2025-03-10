import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState<string>("");

  const handleSearch = () => {
    if (location.trim()) {
      onSearch(location);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
