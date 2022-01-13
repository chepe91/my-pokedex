import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Pokedex } from "./pages/Pokedex";
import { PokemonDetail } from "./pages/PokemonDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
