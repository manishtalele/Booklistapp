import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="grid">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <BookImage></BookImage>
      <Title />
      <Author />
    </article>
  );
};

const BookImage = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>Ikigai the My Japanese Book</h1>;

const Author = () => <h2 className="author">Hector Garcia</h2>;

ReactDOM.render(<BookList />, document.getElementById("root"));
