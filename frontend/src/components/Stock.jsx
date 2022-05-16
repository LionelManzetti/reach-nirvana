import React from "react";

function Stock({ letter }) {
  return (
    <p className="text-xl text-white">
      {letter.emoji} = {letter.value}
    </p>
  );
}

export default Stock;
