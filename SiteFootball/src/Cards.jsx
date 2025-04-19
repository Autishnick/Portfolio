import { useNavigate } from "react-router-dom";
const Cards = ({ book }) => {
  const navigate = useNavigate();
  const addToList = (item, event) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      if (
        window.confirm(
          "Для додавання книги до вподобаних потрібно увійти в акаунт. Перейти до сторінки входу?"
        )
      ) {
        navigate("login");
      }
      return;
    }

    const key = `likedBooks_${currentUser.id}`;
    const existing = JSON.parse(localStorage.getItem(key)) || [];

    const alreadyAdded = existing.find((b) => b.id === item.id);

    if (!alreadyAdded) {
      const updated = [...existing, item];
      localStorage.setItem(key, JSON.stringify(updated));

      const button = event.target;
      button.textContent = "Додано до вподобаних)";
      button.style.backgroundColor = "#4CAF50";
    } else {
      const button = event.target;
      button.textContent = "Вже у вподобаних";
      button.style.backgroundColor = "#4CAF50";
    }
  };

  return (
    <div className="card-container">
      {book.map((item) => (
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
            onClick={() => addToList(item, event)}
          >
            Додати до вподобаних ❤️
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
