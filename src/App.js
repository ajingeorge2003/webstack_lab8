import "./index.css"
import Card from "./Card.js"
import React,{ useState, useEffect } from "react"


function App(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from Google Books API
        fetch("https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=40")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            // Transform Google Books API data to match the card format
            const booksData = data.items.map((item) => {
              return {
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors || ["Unknown Author"],
                image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
                description: item.volumeInfo.description || "No description available.",
              };
            });
            setBooks(booksData);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="min-h-screen bg-neutral-800 p-6">
        <h1 className="text-4xl text-lime-100 font-bold mb-6">Library Management System</h1>
        <div className="flex flex-wrap justify-center">
          {books.map((book) => (
            <Card
              key={book.id}
              title={book.title}
              authors={book.authors}
              image={book.image}
              description={book.description}
            />
          ))}
        </div>
      </div>
    );
}
export default App