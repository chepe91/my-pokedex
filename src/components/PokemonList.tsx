import { format } from "node:path/win32";
import React, { useEffect, useState } from "react";
import { PokemonInfo } from "./PokemonInfo";
//https://pokeapi.co/api/v2/pokemon/
export type PokemonListProps = {
  list: any[];
};

export type PokemonData = {
  id:number,
  format_id:string,
  name: string,
  types: any[]
}

export const PokemonList = (props: PokemonListProps) => {

  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  useEffect(()=> {
    async function fetchPokemonData(pokemon: any) {
      const data = await (await fetch(pokemon.url)).json();
      const pokemonData: PokemonData = {
        id: data.id,
        name: data.name,
        format_id: String(data.id).padStart(3, '0'),
        types: data.types
      };
      setPokemonList((prevState: PokemonData[]) => {
        return [...prevState, pokemonData];
      });
    }

    Promise.all(props.list.map((pokemon) => fetchPokemonData(pokemon))).then(() => {
      
    });
  },[props]);
  

  return (
    <>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonInfo key={pokemon.name} {...pokemon}></PokemonInfo>
        ))}
      </div>
    </>
  );
};
