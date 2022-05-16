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
          if (e.consumptions) {
            if (
              e.consumptions.every(
                (consumption) =>
                  data[consumption.id].value >= consumption.amount
              )
            ) {
              e.consumptions.forEach((consumption) => {
                data[consumption.id].value -= consumption.amount;
              });
            } else {
              e.active = false;
            }
          }
          if (e.active) e.value += e.prodSpeed;
        }
      });
      updateTotalProdSpeed();
      setCount(count + 1);
    }, 1000);
  }, [count]);

  const updateTotalProdSpeed = () => {
    data.forEach((e) => {
      if (e.active) {
        e.totalProdSpeed = e.prodSpeed;
      }
    });
    data.forEach((e) => {
      if (e.active && e.consumptions) {
        e.consumptions.forEach(
          (consumption) =>
            (data[consumption.id].totalProdSpeed -= consumption.amount)
        );
      }
    });
  };
  // 10 woods are unlocking houses
  /**
   * @params require = resource id needed
   * @params toUnlock = resource id to unlock
   */
  const unlock = (require, toUnlock, amount) => {
    if (data[require].value >= amount) {
      data[toUnlock].available = true;
      setUnlock(count);
    }
  };
  unlock(20, 12, 5);
  unlock(12, 4, 5);
  unlock(12, 11, 5);
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
