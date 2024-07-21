const SearchBar = ({ onSearch, value, onChange }) => {
    return (
        <form className="searchBar" onSubmit={onSearch}>
            <div>
                <input name="searchBox" type="text" placeholder="Search for a song..." value={value} onChange={onChange}/>
                <button type='submit'>SEARCH</button>
            </div>
        </form>
    )
};

export default SearchBar;
