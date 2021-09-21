import React from "react";
import {Add} from "./shoppingcart";


function Book({ img, title, author }) {
  const Items = 0 ;  
  return (
    <article className="book">
      <img src={img} alt="book img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button className="btn" type="button" onClick={() => Add(Items)}>
        Buy Now
      </button>
    </article>
  );
}

export {Book};