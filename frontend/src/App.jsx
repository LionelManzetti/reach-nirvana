import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Game from "./pages/Game";
import Home from "./pages/Home";

import ExportContext from "./contexts/GameContext";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App h-screen">
      <ExportContext.GameProvider>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/game/" element={<Game />} />
          </Routes>
        </AnimatePresence>
      </ExportContext.GameProvider>
    </div>
  );
}

export default App;
