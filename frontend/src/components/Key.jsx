import React, { useState } from "react";

export default function Key({
  letter,
  emoji,
  active,
  available,
  onClick,
  index,
}) {
  const color = [
    "red",
    "violet",
    "green",
    "gray",
    "green",
    "green",
    "green",
    "green",
    "green",
    "lightBrown",
    "lightBlue",
    "orange",
    "brown",
    "red",
    "yellow",
    "brown",
    "violet",
    "green",
    "green",
    "green",
    "blue",
    "green",
    "green",
    "pink",
    "lightBrown",
    "green",
  ];
  const [text, setText] = useState(letter);

  return (
    <div>
      <button
        id={`${active && color[index]}`}
        className={`keyTouch ${!available && "invisible"} `}
        type="button"
        onClick={onClick}
        onMouseOver={() => setText(emoji)}
        onMouseLeave={() => setText(letter)}
      >
        {text}
      </button>
    </div>
  );
}
