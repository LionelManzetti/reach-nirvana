import React, { useEffect, useContext } from "react";
import Key from "./Key";
import ExportContext from "../contexts/GameContext";

function Keyboard({ data, handleChange }) {
  const { unlock } = useContext(ExportContext.GameContext);

  useEffect(() => {}, [unlock]);

  return (
    <div id="keyboard" className="grid grid-cols-10">
      {data.map((e, i) => (
        <Key
          index={i}
          letter={e.letter}
          active={e.active}
          available={e.available}
          onClick={() => handleChange(e)}
        />
      ))}
    </div>
  );
}

export default Keyboard;
