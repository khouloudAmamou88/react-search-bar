import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./Searchbar.css";

const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (val: string) => {
    setInput(val);
    fetchData(val);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search ..."
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
