import "./SearchResult.css"
const SearchResult = ({result}) => {
  return (
    <div className="search_item">{result.name}</div>
  )
}

export default SearchResult