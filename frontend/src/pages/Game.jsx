import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import Ressources from "../components/Ressources";
import Keyboard from "../components/Keyboard";
import Production from "../components/Production";
import Discovery from "../components/Discovery";

import ExportContext from "../contexts/GameContext";

export default function Game() {
  const { data, setData } = useContext(ExportContext.GameContext);
  const [discoveryModal, setDiscoveryModal] = useState(false);

  function handleChange(letter) {
    const index = data.indexOf(letter);
    data[index].active = data[index].available
      ? !data[index].active
      : data[index].active;
    setData(data);
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
        <div
          className={`${
            discoveryModal ? "hidden" : "visible"
          } absolute top-10 left-10`}
        >
          <button
            className="text-4xl w-12 h-12 rounded-full border-2 hover:bg-slate-50 bg-slate-100/50"
            onClick={() => setDiscoveryModal(!discoveryModal)}
          >
            ?
          </button>
        </div>
        <div
          className={`${
            discoveryModal ? "visible" : "hidden"
          } absolute w-screen h-screen bg-slate-100/80`}
          onClick={() => setDiscoveryModal(!discoveryModal)}
        >
          <Discovery />
        </div>
        <div className="flex flex-col absolute inset-y-1/3 left-10">
          <Production />
        </div>
        <Keyboard data={data} handleChange={handleChange} />
        <Ressources type={data.filter((e) => e.active)} />
      </div>
    </motion.div>
  );
}
