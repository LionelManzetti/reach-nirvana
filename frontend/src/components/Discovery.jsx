import React, { useContext } from "react";

import ExportContext from "../contexts/GameContext";

const Discovery = () => {
  const { data } = useContext(ExportContext.GameContext);

  return (
    <div className="flex flex-col">
      <h1 className=" text-3xl">What you already discovered :</h1>
      <div className="flex flex-col">
        {data
          .filter((resource) => resource.available === true)
          .map((resource) => (
            <p className="text-xl">
              {resource.letter} for {resource.name} {resource.emoji}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Discovery;
