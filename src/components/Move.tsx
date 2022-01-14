import React from "react";

import { Move as MoveInfo } from "./Moves";

export const Move = (props: MoveInfo) => {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
                <div className={`icon ${props.type}`}>
                    <img src={`/images/type/${props.type}.svg`} />
                </div>
            </td>
            <td>{props.power}</td>
            <td>{props.accuracy}</td>
        </tr>
    )
}

