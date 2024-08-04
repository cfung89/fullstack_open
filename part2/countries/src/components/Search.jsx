const Search = ({ search, setSearch }) => {
  const handleSearch = () => {
    setSearch(event.target.value);
  };

  return (
    <div>
      find countries <input value={search} onChange={handleSearch} />
    </div>
  );
};

export default Search;
