import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Ressources from "../components/Ressources";
import Keyboard from "../components/Keyboard";
import Production from "../components/Production";
import Discovery from "../components/Discovery";

import ExportContext from "../contexts/GameContext";

export default function Game() {
  const { data, setData, setUnlock, popup, setPopup } = useContext(
    ExportContext.GameContext
  );
  const [discoveryModal, setDiscoveryModal] = useState(false);
  const [transition, setTransition] = useState("opacity-0");

  function handleChange(letter) {
    const index = data.indexOf(letter);
    data[index].active = data[index].available
      ? !data[index].active
      : data[index].active;
    setData(data);
    setUnlock(Math.random());
  }

  function handleKeyPress(event) {
    if (!/[a-zA-Z]|\./.test(event.key)) {
      event.preventDefault();
    } else {
      handleChange(data.find((e) => event.key.toUpperCase() === e.letter));
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setTransition("opacity-100");
    }, 500);
    setTimeout(() => {
      setTransition("opacity-0");
    }, 3000);
  }, [popup]);

  window.onkeydown = (event) => handleKeyPress(event);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-6xl flex flex-row select-none font-bold m-28 font-sans tracking-wide text-transparent bg-gradient-to-r from-cyan-500 to-white bg-clip-text">
          REACH &nbsp;
          <p className={data[25].active && "title-shadow"}> N</p>
          <p className={data[7].active && "title-shadow"}>I</p>
          <p className={data[3].active && "title-shadow"}>R</p>
          <p className={data[23].active && "title-shadow"}>V</p>
          <p className={data[0].active && "title-shadow"}>A</p>
          <p className={data[25].active && "title-shadow"}>N</p>
          <p className={data[0].active && "title-shadow"}>A</p>
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
          } absolute w-screen h-screen p-20`}
          onClick={() => setDiscoveryModal(!discoveryModal)}
        >
          <Discovery />
        </div>
        <div className="flex flex-col absolute inset-y-1/3 left-10 text-left">
          <Production />
        </div>
        <Keyboard data={data} handleChange={handleChange} />
        <Ressources type={data.filter((e) => e.active)} />
        {popup && (
          <p
            className={`${transition} absolute transition duration-300 text-gray-200 text-xl leading-normal text-center left-10 top-32`}
          >
            {popup.emoji} {popup.name} discovered !
          </p>
        )}
      </div>
    </motion.div>
  );
}
