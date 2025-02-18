import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './App.css';  // Make sure this path is correct

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // useNavigate is used inside the child component

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    // Navigating to different pages based on search query
    if (query === 'home') navigate('/home');
    else if (query === 'veg') navigate('/veg');
    else if (query === 'nonveg') navigate('/nonveg');
    else if (query === 'sweets' || query === 'milk') navigate('/milk');
    else if (query === 'orders') navigate('/orders');
    else if (query === 'cart') navigate('/cart');
    else if (query === 'about us') navigate('/aboutus');
    else if (query === 'contact us') navigate('/contactus');
    else alert('No matching pages found.');

    setSearchQuery(''); // Clear search field after submitting
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search..." 
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchBar;
