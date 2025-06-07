import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function BookInfoPage() {
  const { workId } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);
  const [authorData, setAuthorData] = useState(null);
  const [averagePages, setAveragePages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const res = await axios.get(`https://openlibrary.org/works/${workId}.json`);
        setBookData(res.data);

        // Fetch author
        if (res.data.authors && res.data.authors.length > 0) {
          const authorKey = res.data.authors[0].author.key;
          const authorRes = await axios.get(`https://openlibrary.org${authorKey}.json`);
          setAuthorData(authorRes.data);
        }

        // Fetch editions to calculate average page count
        const editionsRes = await axios.get(`https://openlibrary.org/works/${workId}/editions.json?limit=50`);
        const editions = editionsRes.data.entries;
        const pages = editions
          .map((ed) => ed.number_of_pages)
          .filter((num) => typeof num === "number" && num > 10 && num < 5000); // sanity check

        if (pages.length > 0) {
          const avg = Math.round(pages.reduce((a, b) => a + b, 0) / pages.length);
          setAveragePages(avg);
        }

      } catch (err) {
        setError("Failed to fetch book or author data.");
      }
    };

    fetchBookData();
  }, [workId]);

  if (error) return <div className="error-message">{error}</div>;
  if (!bookData) return <div className="loading-message">Loading...</div>;

  return (
    <div className="container book-info">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Search
      </button>

      <div className="book-details">
        {bookData.covers?.[0] && (
          <img
            src={`https://covers.openlibrary.org/b/id/${bookData.covers[0]}-L.jpg`}
            alt="Book Cover"
            className="book-cover"
          />
        )}

        <h1 className="book-title">{bookData.title}</h1>
        {authorData && <h2 className="book-author">By {authorData.name}</h2>}

        {bookData.description && (
          <p className="book-description">
            {typeof bookData.description === "string"
              ? bookData.description
              : bookData.description.value}
          </p>
        )}

        <div className="publish-date">
          First published: {bookData.first_publish_date || "Unknown"}
        </div>

        {averagePages && (
          <div className="average-pages">
            Avg Page Count: {averagePages}
          </div>
        )}
      </div>
    </div>
  );
}
