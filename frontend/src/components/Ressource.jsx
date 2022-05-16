import React from "react";

function Ressource({ emoji, speed }) {
  return (
    <h1 className="text-3xl mx-3">
      {emoji}
      {speed}/sec
    </h1>
  );
}

export default Ressource;
