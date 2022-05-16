import React from "react";
import Ressource from "./Ressource";

function Ressources({ type }) {
  return (
    <div className="bg-gray-200 w-2/3 m-20 p-4 h-20 flex items-center rounded-xl shadow-inner shadow-gray-600">
      {type.map((e) => (
        <Ressource emoji={e.emoji} speed={e.prodSpeed} />
      ))}
    </div>
  );
}

export default Ressources;
