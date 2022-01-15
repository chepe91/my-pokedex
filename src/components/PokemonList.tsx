import { format } from "node:path/win32";
import React, { useEffect, useState } from "react";
import { PokemonInfo } from "./PokemonInfo";
//https://pokeapi.co/api/v2/pokemon/
export type PokemonListProps = {
  list: any[];
};


export const PokemonList = (props: PokemonListProps) => {
 

  return (
    <>
      <div className="pokemon-list">
        {props.list.map((pokemon) => (
          <PokemonInfo key={pokemon.name} {...pokemon}></PokemonInfo>
        ))}
      </div>
    </>
  );
};
