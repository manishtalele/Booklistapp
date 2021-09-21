import { useState } from "react";

export function Add(items) {
  const [Items, setItems] = useState(items);
  console.log(Items);
  return setItems(Items + 1);
}
