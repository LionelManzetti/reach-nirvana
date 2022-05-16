import React from "react";

export default function Key({ letter, active, available, onClick, index }) {
  const color = [
    "white",
    "white",
    "white",
    "white",
    "brown",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "gray",
    "white",
    "white",
    "green",
    "orange",
    "white",
    "white",
    "white",
    "white",
    "blue",
    "white",
    "white",
    "white",
    "white",
    "white",
  ];
  return (
    <div>
      <button
        id={`${active && color[index]}`}
        className={`keyTouch ${!available && "invisible"} `}
        type="button"
        onClick={onClick}
      >
        {letter}
      </button>
    </div>
  );
}
