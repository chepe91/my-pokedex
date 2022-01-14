import React from "react";
import { Link } from "react-router-dom";

export type PokemonInfoProps = {
    pokemon: any
}

export const PokemonInfo = (props: PokemonInfoProps) => {

    return (
        <div className="pokemon-info">
            <Link to={`/pokemon/${props.pokemon.name}`}>
                {props.pokemon.name}
            </Link>
        </div>
    )
}
