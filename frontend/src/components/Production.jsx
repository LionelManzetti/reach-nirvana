import React, { useContext, useEffect, useState } from "react";
import ExportContext from "../contexts/GameContext";
import Stock from "./Stock";

const Production = () => {
  const { data, setUnlock, setPopup } = useContext(ExportContext.GameContext);
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
        passivConsumation(e);
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
    data.forEach((e) => {
      if (e.active && e.passivs) {
        e.passivs.forEach(
          (consumption) =>
            (data[consumption.id].totalProdSpeed -= consumption.amount)
        );
      }
    });
    setUnlock(count);
  };

  /**
   * @params require = resource id needed
   * @params toUnlock = resource id to unlock
   */
  const unlock = (require, toUnlock, amount) => {
    if (data[toUnlock].available != true) {
      if (data[require].value >= amount) {
        data[toUnlock].available = true;
        setPopup(data[toUnlock]);
      }
    }
  };
  // Water unlocks Dirt
  unlock(20, 12, 4);
  // Dirt unlocks Seed
  unlock(12, 11, 9);
  // Seed unlocks Tree
  unlock(11, 4, 1);
  // Tree unlocks Apple
  unlock(4, 0, 4);
  //Tree unlocks House
  unlock(4, 15, 9);
  //Tree unlocks Paper
  unlock(4, 9, 19);
  //House unlocks Villagers
  unlock(15, 23, 1);
  //Villagers unlocks ...

  const passivConsumation = (resource) => {
    if (resource.passivs && resource.value >= 1) {
      if (
        resource.passivs.every(
          (consumption) => data[consumption.id].value >= consumption.amount
        )
      ) {
        resource.passivs.forEach((consumption) => {
          Math.max((data[consumption.id].value -= consumption.amount), 0);
        });
      } else {
        Math.max((resource.value -= 1), 0);
        resource.active = false;
      }
    }
  };
  return (
    <>
      {data
        .filter((e) => e.value > 0)
        .map((e) => (
          <Stock key={e.letter} letter={e} />
        ))}
    </>
  );
};

export default Production;
