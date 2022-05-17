import React from "react";

function Stock({ letter }) {
  return (
    <p className="text-xl text-white">
      {letter.emoji} = {Math.round(letter.value * 10) / 10}
    </p>
  );
}

export default Stock;
