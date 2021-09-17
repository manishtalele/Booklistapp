import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Var
const books = [
  {
    id: 1,
    author: "Hector Garcia",
    title: "Ikigai the My Japanese Books",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
  },

  {
    id: 2,
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    author: "J Sai Deepak",
    title: "India that is Bharat",
    img: "https://images-eu.ssl-images-amazon.com/images/I/512DQT3R3fS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

function BookList() {
  return (
    <section className="grid">
      {books.map((books) => {
        return <Book key={books.id} {...books}></Book>;
      })}
    </section>
  );
}


const Book = ({ img, title, author }) => {
  const clickHandler = (author) => {
    console.log(author);
  };
  return (
    <article className="book"  >
      <img src={img} alt="book img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        className="btn"
        type="button"
        onClick={() => clickHandler(author)}
      >
        {" "}
        Buy Now
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
