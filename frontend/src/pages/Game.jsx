import React, { useContext } from "react";
import { motion } from "framer-motion";

import Ressources from "../components/Ressources";
import Stock from "../components/Stock";
import Keyboard from "../components/Keyboard";

import ExportContext from "../contexts/GameContext";

export default function Game() {
  const { data, setData } = useContext(ExportContext.GameContext);

  function handleChange(letter) {
    const newKeys = [...data];
    const index = newKeys.indexOf(letter);
    newKeys[index].active = newKeys[index].available
      ? !newKeys[index].active
      : newKeys[index].active;
    setData(newKeys);
  }
  function handleKeyPress(event) {
    if (!/[a-zA-Z]|\./.test(event.key)) {
      event.preventDefault();
    } else {
      handleChange(data.find((e) => event.key.toUpperCase() === e.letter));
    }
  }

  window.onkeydown = (event) => handleKeyPress(event);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl font-bold m-28 font-sans tracking-wide text-transparent bg-gradient-to-r from-cyan-500 to-white bg-clip-text">
          REACH NIRVANA
        </h1>
        <div className="flex flex-col absolute inset-y-1/3 left-10">
          {data
            .filter((e) => e.value > 0)
            .map((e) => (
              <Stock letter={e} />
            ))}
        </div>
        <Keyboard data={data} handleChange={handleChange} />
        <Ressources type={data.filter((e) => e.active)} />
      </div>
    </motion.div>
  );
}
