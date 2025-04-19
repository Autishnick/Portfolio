import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToolBar from "./ToolBar";

const Liked = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      if (
        window.confirm(
          "Для доступу до вподобаних книг потрібно увійти в систему. Перейти до сторінки входу?"
        )
      ) {
        navigate("/login");
      } else {
        navigate("/");
      }
      return;
    }
    setCurrentUser(user);

    const key = `likedBooks_${user.id}`;
    const savedBooks = localStorage.getItem(key);
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      const oldSavedBooks = localStorage.getItem("likedBooks");
      if (oldSavedBooks) {
        const parsedBooks = JSON.parse(oldSavedBooks);
        setBooks(parsedBooks);
        localStorage.setItem(key, JSON.stringify(parsedBooks));
      }
    }
  }, [navigate]);

  const goToPage = () => {
    navigate(-1);
  };

  const removeBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    if (currentUser) {
      const key = `likedBooks_${currentUser.id}`;
      localStorage.setItem(key, JSON.stringify(updatedBooks));
    }
  };
  const removeAll = () => {
    setBooks([]);
    if (currentUser) {
      const key = `likedBooks_${currentUser.id}`;
      localStorage.removeItem(key);
    }
  };
  function handleLogIn() {
    navigate("/login");
  }
  return (
    <>
      <ToolBar>
        <div className="lisBtn-container">
          <h1 className="liked-header">Вподобані книги</h1>
          <button className="randomBtn" onClick={removeAll}>
            Очистити список
          </button>
          <button className="lisBtn" onClick={goToPage}>
            Назад
          </button>
        </div>
      </ToolBar>

      <div className="card-container">
        {books.length === 0 ? (
          <p className="liked-text">Немає вподобаних книг</p>
        ) : (
          books.map((item) => (
            <div className="card" key={item.id || item.etag}>
              <img
                className="card-img"
                src={item.volumeInfo.imageLinks?.thumbnail}
                alt={item.volumeInfo.title}
              />
              <h2 className="card-h">{item.volumeInfo.title}</h2>
              <p className="card-autor">{item.volumeInfo.authors?.[0]}</p>
              <p className="card-year">{item.volumeInfo.publishedDate}</p>
              <button
                className="bookmarkBtn"
                onClick={() => removeBook(item.id)}
              >
                Прибрати з вподобаних 💔
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Liked;
