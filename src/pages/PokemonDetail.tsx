import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NotFound } from "../components/NotFound";
import { Types } from "../components/Types";
import { Abilities } from "../components/Abilities";
import { Moves } from "../components/Moves";

export const PokemonDetail = () => {
  const { name } = useParams();

  const [image, setImage] = useState("");
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();

        setPokemonId(data.id);
        setPokemonName(data.name);
        setImage(data.sprites.other.home.front_default);
        setAbilities(data.abilities);
        setMoves(data.moves);
        setTypes(data.types);
      } else if (res.status === 404) {
        setNotFound(true);
      }
    });
  }, [name]);

  return (
    <div>
      {notFound && <NotFound />}
      {!notFound && (
        <div>
          <h2>
            Pokemon #{pokemonId} {pokemonName}
          </h2>
          <img src={image} className="pokemon-image" alt={name} />
          <div>
            <Types types={types} />
            <Abilities abilities={abilities} />
            {moves.length > 0 && <Moves moves={moves} /> }
          </div>
        </div>
      )}
    </div>
  );
};
