import React, { useEffect, useState } from "react";
import { Move } from "./Move"

export type MovesProps = {
    moves : any[]
}

export type MoveState = {
    list : MoveInfo[]
}

export type MoveInfo = {
    id: number,
    name: string,
    accuracy: number,
    power: number,
    type: string,
    pp: number,
    names: any[],
    damage_class: string
}

export const Moves = (props: MovesProps) => {

    let number = 0;
    const initialState: MoveState = {
        list: []
    }

    console.log(initialState);
    const [loading, setLoading] = useState(true);
    const [moves, setMoves] = useState(initialState);
    const [typeFilter, setTypeFilter] = useState("");

    useEffect(()=>{
        setMoves(initialState);
        props.moves.forEach((move) => fetchMoveData(move));

    },[]);

    const fetchMoveData = (move: any) => {
        fetch(move.move.url)
        .then((res) => res.json())
        .then((data) => {
            const moveInfo: MoveInfo = {
                id: data.id,
                name : data.name,
                names : data.names,
                accuracy : data.accuracy,
                power : data.power,
                type : data.type.name,
                pp : data.pp,
                damage_class : data.damage_class.name
            }
            setMoves((prevState: MoveState) => { 
                return { list: [...prevState.list, moveInfo] }
            });
        })
        .catch((err)=> console.log(err));
    }

    const onLoadMoves = () => {
        setMoves(initialState);
        props.moves.forEach((move) => fetchMoveData(move));
    }

    const onFilterChanged = (event: any) => {
        setTypeFilter(event.target.value);
    }

    return <div>
        <h3>Moves:</h3>
        {
            loading && <div>Loading</div>
        }
        <button onClick={onLoadMoves}>Load moves</button>
        <select id="type" onChange={onFilterChanged}>
            <option value="">All</option>
            <option value="fire">Fire</option>
            <option value="normal">Normal</option>
            <option value="flying">Flying</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>power</th>
                    <th>accuracy</th>
                </tr>
            </thead>
            <tbody>
                {moves.list.filter((item) => typeFilter == "" || item.type == typeFilter ).map(move => 
                    <Move key={move.id} {...move}></Move>
                )}
            </tbody>
        </table>

    </div>
}