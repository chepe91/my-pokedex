import React, { useEffect, useState } from "react";
import { PokemonList } from "../components/PokemonList";
//https://pokeapi.co/api/v2/pokemon/

export type PokemonData = {
  id:number,
  format_id:string,
  name: string,
  types: any[]
}

export const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [loadMoreUrl, setLoadMoreUrl] = useState("");


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setPokemonCount(data.count);
        setLoadMoreUrl(data.next);
        Promise.all(data.results.map((pokemon: any) => fetchPokemonData(pokemon))).then(() => {
      
        });
      });
  }, []);

  const onloadMore = () => {
    if (loadMoreUrl) {
      fetch(loadMoreUrl)
        .then((res) => res.json())
        .then((data) => {
          
          setLoadMoreUrl(data.next);
          Promise.all(data.results.map((pokemon: any) => fetchPokemonData(pokemon))).then(() => {
            
          });
        });
    }
  };

  async function fetchPokemonData(pokemon: any) {
    const data = await (await fetch(pokemon.url)).json();
    const pokemonData: PokemonData = {
      id: data.id,
      name: data.name,
      format_id: String(data.id).padStart(3, '0'),
      types: data.types
    };

    console.log(pokemonData);
    setPokemonList((prevState: PokemonData[]) => {
      return [...prevState, pokemonData];
    });
  }


  return (
    <>
      <h1>Pokedex {pokemonCount}</h1>
      <PokemonList list={pokemonList}></PokemonList>

      <div className="">
        <button onClick={onloadMore}>Load more</button>
      </div>
    </>
  );
};
