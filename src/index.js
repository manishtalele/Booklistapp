import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // CSS
// All the Imported Component
import { books } from "./Book";
import { Book } from "./bookscompo";


function BookList() {
  return (
    <>
      <button className='shopCart'>Items:{Book.items}</button>
      <section className="grid">
        {books.map((books) => {
          return <Book key={books.id} {...books}></Book>;
        })}
      </section>
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
