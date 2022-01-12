import React from "react"
import { PokemonInfo } from "./pokemon-info"
//https://pokeapi.co/api/v2/pokemon/
export type PokemonListProps = {
    list: any[]
}

export const PokemonList = (props: PokemonListProps) => {

    return (<>
        <div className="pokemon-list">
            {props.list.map((pokemon)=>
                <PokemonInfo key={pokemon.name} pokemon={pokemon}></PokemonInfo>
            )}
        </div>
    </>)
}

