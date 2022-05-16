import React, { useContext, useEffect, useState } from "react";
import ExportContext from "../contexts/GameContext";
import Stock from "./Stock";

const Production = () => {
  const { data, setUnlock } = useContext(ExportContext.GameContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      data.forEach((e) => {
        if (e.active) {
          e.value += e.prodSpeed;
        }
      });
      setCount(count + 1);
    }, 1000);
  }, [count]);

  if (data[4].value >= 10) {
    data[15].available += true;
    setUnlock(count);
  }

  return (
    <>
      {data
        .filter((e) => e.value > 0)
        .map((e) => (
          <Stock letter={e} />
        ))}
    </>
  );
};

export default Production;
