import React from "react";

function Ressource({ emoji, speed }) {
  return (
    <h1 className="text-xl mx-3 font-semibold text-gray-600">
      {emoji}
      {speed}/sec
    </h1>
  );
}

export default Ressource;
