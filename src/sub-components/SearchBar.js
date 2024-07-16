import Spotify from './Spotify';


const SearchBar = ({ onSearch, value, onChange }) => {
    return (
        <form className="searchBar" onSubmit={onSearch}>
            <input name="searchBox" type="text" placeholder="Search for a song..." value={value} onChange={onChange}/>
            <button type='submit'>Search</button>
        </form>
    )
};

export default SearchBar;