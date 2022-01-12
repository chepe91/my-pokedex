import React from "react";

export type MovesProps = {
    moves : any[]
}


export const Moves = (props: MovesProps) => {
    return <div>
        <h3>Moves:</h3>
        {
            props.moves.map(item => <div key={item.move.name}>
                {item.move.name}
            </div>)
        }
    </div>
}