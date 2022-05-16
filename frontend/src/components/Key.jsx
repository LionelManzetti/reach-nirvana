import React from "react";

export default function Key({ letter, active, available, onClick, index }) {
  const color = [
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
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
