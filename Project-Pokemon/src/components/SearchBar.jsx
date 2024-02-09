const SearchBar = ({ value, onChange }) => {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Cari pokemon...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
