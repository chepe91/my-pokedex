import React from "react";

import { MoveInfo } from "./moves"

export const Move = (props: MoveInfo) => {

    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td className={`type type-${props.type}`}>{props.type}</td>
            <td>{props.power}</td>
            <td>{props.accuracy}</td>
        </tr>
    )
}