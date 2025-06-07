import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchBooks = async () => {
    if (!query.trim()) return; // prevent empty queries
    const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    setResults(res.data.docs.slice(0, 10)); // First 10 results
  };

  // Handler for pressing Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchBooks();
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}  // Trigger search on Enter
      />
      <button className="button" onClick={searchBooks}>
        Search
      </button>

      <ul className="list">
        {results.map((book) => {
          const coverId = book.cover_i;
          return (
            <li
              key={book.key}
              className="listItem"
              onClick={() => navigate(`/book/${book.key.replace("/works/", "")}`)}
            >
              {coverId ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${coverId}-S.jpg`}
                  alt={`${book.title} cover`}
                  className="thumbnail"
                />
              ) : (
                <div className="thumbnail placeholder" />
              )}
              <div className="bookInfo">
                <span className="bookTitle">{book.title}</span>{" "}
                <span className="bookAuthor">by {book.author_name?.[0] || "Unknown"}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
