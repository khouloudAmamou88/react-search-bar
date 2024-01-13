import { useState } from 'react'
import './App.css'
import Searchbar from './components/searchbar/Searchbar'
import SearchResultsList from './components/searchResults/searchResultsList';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className='main_app'>
      <div className='search-bar-wrapper'>
        <Searchbar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  )
}

export default App
