import { createContext, useState, useEffect } from "react";

const GameContext = createContext();

function GameProvider({ children }) {
  const [data, setData] = useState([
    {
      letter: "A",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "Z",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "E",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "R",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "T",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: true,
    },
    {
      letter: "Y",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "U",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "I",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "O",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "P",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "Q",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "S",
      emoji: "\uD83E\uDEA8",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: true,
    },
    {
      letter: "D",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "F",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "G",
      emoji: "\uD83C\uDF3F",
      prodSpeed: 2,
      value: 0,
      active: false,
      available: true,
    },
    {
      letter: "H",
      emoji: "\uD83D\uDED6",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "J",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "K",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "L",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "M",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "W",
      emoji: "\uD83D\uDCA7",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: true,
    },
    {
      letter: "X",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "C",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "V",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "B",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
    {
      letter: "N",
      emoji: "\uD83E\uDEB5",
      prodSpeed: 1,
      value: 0,
      active: false,
      available: false,
    },
  ]);

  useEffect(() => {
    setInterval(() => {
      data.forEach((e) => {
        if (e.active) {
          e.value += e.prodSpeed;
          if (data[20].value >= 10) {
            data[15].available += true;
          }
        }
      });
    }, 1000);
  }, []);

  return (
    <GameContext.Provider value={{ data, setData }}>
      {children}
    </GameContext.Provider>
  );
}
const ExportContext = {
  GameContext,
  GameProvider,
};

export default ExportContext;
