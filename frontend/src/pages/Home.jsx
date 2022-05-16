import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="video-title">
          <video id="background-video" autoPlay loop muted>
            <source src="/src/assets/nirvana4.mp4" type="video/mp4" />
          </video>
          <div className="text-box">
            <h1>REACH NIRVANA</h1>
            <Link to="/game/">
              <button
                type="button"
                className="border py-2 px-8 rounded-lg hover:bg-gray-600 translate-x-2"
              >
                PLAY
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
