import React from "react";
import Key from "./Key";

function Keyboard({ data, handleChange }) {
  return (
    <div id="keyboard" className="grid grid-cols-10">
      {data.map((e, i) => (
        <Key
          key={e.letter}
          index={i}
          letter={e.letter}
          emoji={e.emoji}
          active={e.active}
          available={e.available}
          onClick={() => handleChange(e)}
        />
      ))}
    </div>
  );
}

export default Keyboard;
