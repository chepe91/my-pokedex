import React from "react";
import { Link } from "react-router-dom";
import "./PokemonInfo.css";
import { PokemonData } from "../pages/Pokedex";



export const PokemonInfo = (props: PokemonData) => {

    return (
        <div className="pokemon-info">

            <div>
                <img src={`/images/pokemon/${props.format_id}.png`} alt={props.format_id} />
            </div>
            <Link to={`/pokemon/${props.name}`}>
                {props.name}
            </Link>
        </div>
    )
}
