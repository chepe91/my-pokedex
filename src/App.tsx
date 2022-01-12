import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Pokedex } from "./pages/pokedex";
import { PokemonDetail } from "./pages/pokemon-detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
