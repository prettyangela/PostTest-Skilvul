import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../src/components/Card';
import SearchBar from './components/searchBar';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchCardItem = async () => {
    try {
      const response = await axios.get(
        'https://pokeapi.deno.dev/pokemon?limit=20'
      );
      setItems(response.data);
      setFilteredItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCardItem();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <SearchBar value={searchTerm} onChange={handleSearch} />{' '}
      <div className='card-content'>
        {filteredItems.length === 0 ? (
          <p>Not Found</p>
        ) : (
          filteredItems.map((item, index) => <Card key={index} {...item} />)
        )}
      </div>
    </>
  );
};

export default App;
