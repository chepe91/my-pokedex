import React from "react"
import { Move } from "./Move"
export const MovesTable = (props: any) => {

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => {props.onSortClicked("id")}}>id</th>
                    <th onClick={() => {props.onSortClicked("name")}}>name</th>
                    <th onClick={() => {props.onSortClicked("type")}}>type</th>
                    <th onClick={() => {props.onSortClicked("power")}}>power</th>
                    <th onClick={() => {props.onSortClicked("accuracy")}}>accuracy</th>
                </tr>
            </thead>
            <tbody>
                {props.moves.map((move: any) => 
                    <Move key={move.id} {...move}></Move>
                )}
            </tbody>
        </table>
    )
}