import React from "react";
import Book from "./Book.jsx";
import "../../../../public/assets/css/Row.css";
function Row() {
  var loop = [2, 3, 4, 1, 5, 4, 5, 43, 5, 4, 4, 3, 3, 4, 4, 5];
  return (
    <div className="row">
      <div className="row-header">
        <h2>My Library</h2>
        <a href="#">View All</a>
      </div>
      <div className="row_books">
        {loop.map((movie) => (
          <Book
            title="Đừng bao giờ đi ăn một mình"
            author="KEITH FERRAZZI"
            available={20}
            total={30}
            image="https://images-na.ssl-images-amazon.com/images/I/51BM6x0myfL._SX350_BO1,204,203,200_.jpg"
            className="book"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
