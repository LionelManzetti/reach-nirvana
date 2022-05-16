import React from "react";

function Stock({ letter }) {
  return (
    <h1 className="text-xl text-white">
      {letter.emoji} = {letter.value}
    </h1>
  );
}

export default Stock;
