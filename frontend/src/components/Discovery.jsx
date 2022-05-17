import React, { useContext } from "react";

import ExportContext from "../contexts/GameContext";

const Discovery = () => {
  const { data } = useContext(ExportContext.GameContext);

  return (
    <div className="flex flex-col bg-slate-100/90 rounded-2xl p-10">
      <h1 className=" text-3xl p-10">What you already discovered :</h1>
      <div className="flex flex-col">
        {data
          .filter((resource) => resource.available === true)
          .map((resource) => (
            <p className="text-xl" key={resource.letter}>
              {resource.letter} for {resource.name} {resource.emoji}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Discovery;
