import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";
import { useNavigate } from "react-router-dom";
function Page() {
  const [book, setBook] = useState(null);
  const [search, setSearch] = useState("react");
  const [randomSearchQuery, setRandomSearchQuery] = useState("");
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  const fetchBooks = async (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&key=AIzaSyC8huVaGIFGoLTHjSR4jit3iuMe470j69g`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        setBook([]);
        return;
      }
      const result = await response.json();
      setBook(result.items || []);
    } catch (error) {
      console.error("Помилка при завантаженні книг:", error);
      setBook([]);
    }
  };

  useEffect(() => {
    fetchBooks(search);
  }, [search]);

  const handleSearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    if (randomSearchQuery) {
      fetchBooks(randomSearchQuery);
      setRandomSearchQuery("");
    }
  }, [randomSearchQuery]);

  const handleRand = () => {
    const randomword = randword();
    const randomNumber = Math.floor(Math.random() * 10);
    const randomSearchTerm = `${randomword}&startIndex=${randomNumber}`;
    setRandomSearchQuery(randomSearchTerm);
  };
  const randword = () => {
    let arr = [
      "cats",
      "dogs",
      "animal",
      "math",
      "ukraine",
      "USA",
      "cosmo",
      "degree",
      "football",
      "basketball",
      "javascript",
      "java",
      "react",
      "human",
      "c++",
      "formula 1",
      "anime",
      "marvel",
      "bea",
      "ocean",
      "sea",
      "ground",
      "programming",
      "witcher",
      "strongman",
    ];
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  if (!book) return <div className="liked-header">Завантаження...</div>;
  return (
    <>
      <ToolBar>
        <div className="randomBtn-container">
          <button className="randomBtn" onClick={handleRand}>
            Random
          </button>
        </div>
        <div className="lisBtn-container">
          <button className="lisBtn" onClick={goToAbout}>
            Вподобані
          </button>
        </div>
      </ToolBar>
      <SearchBar onSearch={handleSearch} />
      <Cards book={book} />
    </>
  );
}

export default Page;
