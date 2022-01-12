import React, { useEffect, useState } from "react"
import { PokemonList } from "./../components/pokemon-list"
//https://pokeapi.co/api/v2/pokemon/

export const Pokedex = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonCount, setPokemonCount] = useState(0);
    const [loadMoreUrl, setLoadMoreUrl] = useState("");

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/").then(async (res) => {
            const data = await res.json();
            setPokemonCount(data.count);
            setPokemonList(data.results);
            setLoadMoreUrl(data.next);
        });
    },[]);

    const onloadMore = () => {
        if (loadMoreUrl){
            fetch(loadMoreUrl).then(async (res) => {
                const data = await res.json();
                setPokemonList((prevState)=> {
                    return prevState.concat(data.results)
                });
                setLoadMoreUrl(data.next);
            });
        }
    };

    return (<>
        <h1>Pokedex {pokemonCount}</h1>
        <PokemonList list={pokemonList}></PokemonList>

        <div className="">
            <button onClick={onloadMore}>Load more</button>
        </div>
    </>)
}

